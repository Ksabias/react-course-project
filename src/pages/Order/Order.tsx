import React, { useState } from "react";
import "./Order.scss";
import Default from "layouts/Default/Default";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BaseInput from "components/base/BaseInput";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { PIZZA_API } from "../../constants";
import { useNavigate } from "react-router-dom";

export interface OrderDto {
  address: string;
  customer: string;
  phone: string;
  priority: boolean;
  position: string;
  cart: OrderItem[];
}

export interface OrderItem {
  pizzaId: number;
  name: string;
  unitPrice: number;
  quantity: number;
  totalPrice?: number;
}

const validationSchema = yup.object().shape({
  customer: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  priority: yup.boolean().required(),
});

type TForm = yup.InferType<typeof validationSchema>;

const Order: React.FC = () => {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {
      customer: localStorage.getItem("username") || "",
      phone: "",
      address: "",
      priority: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();
  const total = useSelector((state: RootState) => state.cart.total);
  const cartProducts = useSelector((state: RootState) => state.cart.items);
  const [priority, setPriority] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = async (data: TForm) => {
    const products = cartProducts.map((item) => ({
      name: item.name,
      pizzaId: item.id,
      quantity: item.qty,
      totalPrice: item.unitPrice * item.qty,
      unitPrice: item.unitPrice,
    }));

    const dto: OrderDto = {
      ...data,
      position: "",
      cart: products,
    };

    try {
      const response = await fetch(`${PIZZA_API}/order`, {
        method: "POST",
        body: JSON.stringify(dto),
      });
      const responseData = await response.json();

      reset();
      if (responseData?.status === "fail") {
        setIsError(true);
        return;
      }

      return navigate(`/order/${responseData.id}`, { state: responseData });
    } catch (error) {
      setIsError(true);
      throw error;
    }
  };

  if (isError) {
    return (
      <Default>
        <div>Something went wrong</div>
      </Default>
    );
  }

  return (
    <Default>
      <div className="Order">
        <h2>Ready to order? Let's go! </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Control">
            <BaseInput
              control={control}
              name="customer"
              placeholder="First Name"
            />
          </div>

          <div className="Control">
            <BaseInput
              control={control}
              name="phone"
              placeholder="Phone number"
            />
          </div>

          <div className="Control">
            <BaseInput name="address" control={control} placeholder="Address" />
          </div>

          <div className="Control ControlCheckbox">
            <BaseInput
              name="priority"
              control={control}
              onChange={(e) => {
                setValue("priority", e.target.checked);
                setPriority(e.target.checked);
              }}
              type="checkbox"
              placeholder="Want to yo give your order priority?"
            />
          </div>

          <button>Order now for ${priority ? total + 8 : total}</button>
        </form>
      </div>
    </Default>
  );
};

export default Order;
