import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

const Header = () => {
  const headerRef = useRef(null as any);

  const [isShrunk, setShrunk] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);

  const authData = useSelector((state: RootState) => state.auth);

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
        </div>
      </div>
    </div>
  );
};
export default Header;
