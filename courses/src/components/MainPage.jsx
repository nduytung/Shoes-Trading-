import React, { useState } from "react";
import NavBar from "./NavBar";
import Ad from "./Ad";
import Services from "./Services";
import Register from "./Register";
import Products from "./Products";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

let MainPage = () => {
  //CÔNG DỤNG: XÁC ĐỊNH XEM LÀ MODAL ẨN HAY HIỆN
  let [displayState, setDisplayState] = useState("none");

  //CÔNG DỤNG: XÁC ĐỊNH XEM BUTTON SẼ HIỂN THỊ "LOGIN" HAY "WELCOME BACK"
  //biến loginState được truyền xuống cho button "login" để nó biết mà hiển thị welcome back
  //biến này được thay đổi thông qua hàm handleLoggedIn
  let [loginState, setLoginState] = useState(false);

  //CÔNG DỤNG: QUYẾT ĐỊNH XEM ẨN HAY HIỆN MODAL
  //truyền hàm này xuống cho component con là modal
  //khi click vào element có chứa hàm này ở modal, state mới sẽ dc update thẳng lên đây => ẩn hiện
  let handleDisplayState = () => {
    let newState;
    if (displayState == "block") newState = "none";
    else {
      newState = "block";
    }
    setDisplayState(newState);
    console.log(displayState);
  };

  //CÔNG DỤNG: QUYẾT ĐỊNH XEM LÀ BUTTON SẼ HIỂN THỊ LOGIN HAY WELCOME BACK
  //hàm này được truyền xuống cho modal
  //để mỗi khi modal check đăng nhập thành công thì sẽ gọi hàm này ra,
  //và hàm này sẽ thay đổi state login, khiến cho button login thay đổi chữ
  let handleLoggedIn = () => {
    let newState;
    if (loginState == false) newState = true;
    else newState = false;
    setLoginState(newState);
  };

  return (
    <div>
      <div className="position-absolute w-100">
        <NavBar
          handleDisplayState={handleDisplayState}
          loginState={loginState}
        />
        <Ad />
        <Services />
        <Register />
        <Products />
        <Footer />
      </div>
      <div className="position-relative ">
        <LoginModal
          displayState={displayState}
          handleDisplayState={handleDisplayState}
          loginState={loginState}
          handleLoggedIn={handleLoggedIn}
        />{" "}
      </div>
    </div>
  );
};

export default MainPage;
