import React, { useState } from "react";
import "./Order.scss";
import Default from "layouts/Default/Default";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BaseInput from "components/base/BaseInput";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(/^\+[1-9]\d{1,14}$/, "Phone number is not valid"),
  address: yup.string().required(),
  prioritized: yup.boolean().required(),
});

type TForm = yup.InferType<typeof validationSchema>;

const Order: React.FC = () => {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: {
      firstName: localStorage.getItem("username") || "",
      phone: "",
      address: "",
      prioritized: false,
    },
    resolver: yupResolver(validationSchema),
  });

  const total = useSelector((state: RootState) => state.cart.total);
  const [prioritized, setPrioritized] = useState(false);

  const onSubmit = (data: TForm) => {
    console.log(data);
    console.log("Total: " + prioritized ? total + 8 : total);

    reset();
  };

  return (
    <Default>
      <div className="Order">
        <h2>Ready to order? Let's go! </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Control">
            <BaseInput
              control={control}
              name="firstName"
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
              name="prioritized"
              control={control}
              onChange={(e) => {
                setValue("prioritized", e.target.checked);
                setPrioritized(e.target.checked);
              }}
              type="checkbox"
              placeholder="Want to yo give your order priority?"
            />
          </div>

          <button>Order now for ${prioritized ? total + 8 : total}</button>
        </form>
      </div>
    </Default>
  );
};

export default Order;
