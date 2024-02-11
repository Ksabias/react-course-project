import React from "react";
import "./OrderDetails.scss";
import Default from "layouts/Default/Default";
import { useLocation } from "react-router-dom";

const OrderDetails: React.FC = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Default>
      <div className="Cart">
        {/* {items?.map((item) => (
              <div className="CartItem" key={item.id}>
                <div className="ItemInfo">
                  <div className="ItemTitle">{`${item.qty}x ${item.name}`}</div>
                </div>

                <div className="Price">${item.unitPrice * item.qty}</div>

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
            ))} */}
      </div>
    </Default>
  );
};

export default OrderDetails;
