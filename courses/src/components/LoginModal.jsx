import { React, useState } from "react";
import "../assets/css/LoginModalCss.css";
import "../assets/css/MainPageCss.css";
import Button from "./Button";

//hàm này dùng cho button login
let handleLogin = async (callback, handleLoggedIn) => {
  let userInput = {
    name: document.getElementById("nameInput").value,
    password: document.getElementById("passwordInput").value,
  };
  console.log(userInput);
  let response = await fetch("http://localhost:3001/users");
  let datas = await response.json();
  datas.map((data) => {
    //NEU LOGIN THANH CONG
    if (data.password == userInput.password && data.name == userInput.name) {
      alert("login success");
      callback();
      handleLoggedIn();
    }
  });
};

let LoginModal = (props) => {
  let { displayState, handleDisplayState, handleLoggedIn } = props;
  return (
    <div className={`d-${displayState}`}>
      {/*div nay co position la fixed, chua background mau den*/}
      <div className="login-modal__container"></div>{" "}
      {/*div nay chua form mau trang o ben trong, co position la FIXED, ko bi opacity anh huong*/}
      <div className=" container-fluid login-form-container">
        <div className="row">
          <div className="col-6 bg-light m-auto modal__form">
            <div div className="container mt-4 mb-4 text-center text-secondary">
              <i
                class="fas fa-times float-right lead"
                onClick={handleDisplayState}
              ></i>
              <h3 className="login__header pt-5 pb-4 ">Login</h3>

              <div className="login__form col-12 ">
                <input
                  type="text"
                  name=""
                  id="nameInput"
                  placeholder="Username"
                  className="col-12 form-control mt-2 mb-2"
                />
                <input
                  type="password"
                  name=""
                  id="passwordInput"
                  placeholder="Password"
                  className="col-12 form-control mt-2 mb-2"
                />
                <div
                  onClick={() =>
                    handleLogin(handleDisplayState, handleLoggedIn)
                  }
                >
                  <Button btnName="Login" />
                </div>
              </div>
              <div className="col-12 login-social mt-3 mb-5">
                <p className="login-social__header">
                  Or use your social network
                </p>
              </div>
              <hr />
              <p>
                Not a member yet ? <a className="register-link"> Register </a>{" "}
                now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginModal;
