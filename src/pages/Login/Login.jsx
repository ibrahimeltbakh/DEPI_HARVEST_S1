import React, { useState } from "react";

import style from "./login.module.css";

export default function Login() {
  // let arr = ["ibrahim", "mohamed", 1, 2, 3];
  // let [i, m, one, , three] = arr;
  // console.log(i, m, one, three);

  // let obj = {
  //   name: "ibrahim",
  //   age: 20,
  //   salary: 500,
  // };
  // let { salary,name,age  } = obj;
  // console.log(name, salary,age);

  let [userName, setUserName] = useState("User");

  return (
    <div>
      <h1>Login Page</h1>
      <button
        className={`${style.loggedin} ${style.p}`}
        onClick={() => {
          setUserName("Ibrahim");
        }}>
        Login
      </button>
      <button
        className={`${style.notLoggedin} ${style.p}`}
        onClick={() => {
          setUserName("User");
        }}>
        Logout
      </button>

      {userName == "User" ? (
        <h2 className={`${style.notLoggedin} ${style.p}`}>
          Welcome {userName}{" "}
        </h2>
      ) : (
        <h2 className={`${style.loggedin} ${style.p}`}>Welcome {userName} </h2>
      )}
    </div>
  );
}
