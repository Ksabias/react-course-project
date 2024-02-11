import React from "react";
import "./Cart.scss";
import Default from "layouts/Default/Default";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import {
  decrementQty,
  deleteFromCart,
  incrementQty,
} from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { Arrow } from "components/icons/ArrowIcon";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((state: RootState) => state.cart.items);

  return (
    <Default>
      <div className="Cart">
        <div className="BackToMenu" onClick={() => navigate("/menu")}>
          <Arrow />
          Back to menu
        </div>

        {(!items || items?.length === 0) && (
          <div className="Empty">Cart is empty</div>
        )}

        {items?.map((item) => (
          <div className="CartItem" key={item.id}>
            <div className="ItemInfo">
              <div className="ItemTitle">{`${item.qty}x ${item.name}`}</div>
            </div>

            <div className="Price">${item.unitPrice}</div>

            <div className="Buttons">
              <button
                className="Button Increment"
                onClick={() => dispatch(incrementQty(item))}
              >
                +
              </button>

              <div className="Quantity">{item.qty}</div>

              <button
                className="Button Decrement"
                onClick={() => dispatch(decrementQty(item))}
              >
                -
              </button>
            </div>

            <button
              className="Delete"
              onClick={() => dispatch(deleteFromCart(item))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </Default>
  );
};

export default Cart;
