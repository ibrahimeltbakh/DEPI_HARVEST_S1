import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="container p-2 min-vh-100">
        <Outlet></Outlet>
      </main>
      <footer>This is footer</footer>
    </>
  );
}
