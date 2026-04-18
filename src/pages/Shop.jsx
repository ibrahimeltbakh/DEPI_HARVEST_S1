import React from "react";
import { Link, NavLink, Outlet } from "react-router";

export default function Shop() {
  return (
    <div>
      <h1>Shop Page</h1>
      <div style={{ display: "flex", gap: "50px" }}>
        <aside>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "categoryNavLinkActive" : "categoryNavLinkUnActive"}`
            }
            to="laptop">
            Laptop
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "categoryNavLinkActive" : "categoryNavLinkUnActive"}`
            }
            to="phone">
            phone
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "categoryNavLinkActive" : "categoryNavLinkUnActive"}`
            }
            to="screen">
            screen
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "categoryNavLinkActive" : "categoryNavLinkUnActive"}`
            }
            to="tv">
            tv
          </NavLink>
        </aside>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
