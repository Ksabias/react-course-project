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
  const { register, handleSubmit, formState, reset, control } = useForm({
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
  };

  return (
    <Default>
      <div className="Order">
        <h2>Ready to order? Let's go! </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Control">
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <BaseInput {...field} placeholder="First Name" />
              )}
            />
          </div>

          <div className="Control">
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <BaseInput {...field} placeholder="Phone number" />
              )}
            />
          </div>

          <div className="Control">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <BaseInput {...field} placeholder="Address" />
              )}
            />
          </div>

          <div className="Control ControlCheckbox">
            <Controller
              name="prioritized"
              control={control}
              render={({ field }) => (
                <BaseInput
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    setPrioritized(e.target.checked);
                  }}
                  type="checkbox"
                  placeholder="Want to yo give your order priority?"
                />
              )}
            />
          </div>

          <button>Order now for ${prioritized ? total + 8 : total}</button>
        </form>
      </div>
    </Default>
  );
};

export default Order;
