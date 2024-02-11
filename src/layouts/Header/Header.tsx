import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { CartItem } from "redux/slices/cartSlice";
import CartIcon from "components/icons/CartIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const headerRef = useRef(null as any);

  const [isShrunk, setShrunk] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const [cartLength, setCartLength] = useState(0);
  const { items: products } = useSelector((state: RootState) => state.cart);

  const authData = useSelector((state: RootState) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const cart: CartItem[] =
      typeof localStorage !== "undefined"
        ? JSON.parse(localStorage.getItem("cart") as string) ?? products
        : products;
    const amount = cart.reduce((accum, current) => accum + current.qty, 0);

    if (cart) {
      setCartLength(amount);
    }
  }, [products]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setTimeout(() => {
          setShrunk(e.intersectionRatio < 1);
        }, 100);
      },
      { threshold: [1] }
    );

    observer.observe(headerRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("username");
    setUsername(userNameFromStorage);
  }, [authData]);

  return (
    <div className={`Wrapper ${isShrunk && "Sticky"}`} ref={headerRef}>
      <div className="Container">
        <div className="Left">Pizza Day</div>

        <div className="Right">
          {username && (
            <div className="UserInfo">
              <div className="UserName">{username}</div>
            </div>
          )}

          <div className="Cart" onClick={() => navigate("/cart")}>
            <CartIcon />

            {cartLength > 0 && (
              <div className="Count">{cartLength > 99 ? "99" : cartLength}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
