import React, { useEffect } from "react";
import "./Menu.scss";
import Default from "layouts/Default/Default";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, addToCart } from "../../redux/slices/cartSlice";
import { getMenuItems } from "../../redux/slices/menuSlice";
import { RootState } from "redux/store";
import { UnknownAction } from "@reduxjs/toolkit";

export interface MenuItem {
  id: number;
  imageUrl: string;
  name: string;
  soldOut: boolean;
  unitPrice: number;
  ingredients: string[];
}

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    isError,
    items: menu,
  } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    dispatch(getMenuItems() as unknown as UnknownAction);
  }, [dispatch]);

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (isError) {
    return <div>Error occured</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <Default>
      <div className="Menu">
        {menu?.map((item) => (
          <div className={`MenuItem ${item.soldOut && "Sold"}`} key={item.id}>
            <img src={item.imageUrl} alt="" className="ItemImg" />

            <div className="ItemInfo">
              <div className="ItemTitle">{item.name}</div>

              <div className="ItemIngredients">
                {item.ingredients.map((ingredient, index) => (
                  <span key={`${ingredient}-${index}`}>
                    {capitalizeFirstLetter(ingredient)}
                    {index < item.ingredients.length - 1 && ", "}
                  </span>
                ))}
              </div>

              <div className="ItemIsAvailable">
                {!item.soldOut ? (
                  <div className="ItemPrice">${item.unitPrice}</div>
                ) : (
                  <div className="ItemSoldOut">Sold Out</div>
                )}
              </div>
            </div>

            {!item.soldOut && (
              <div className="ButtonWrapper">
                <button
                  className="Add"
                  onClick={() => dispatch(addToCart(item as CartItem))}
                >
                  Add to cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </Default>
  );
};

export default Menu;
