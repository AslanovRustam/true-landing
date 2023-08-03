import { createPortal } from "react-dom";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/Images/logo.png";
import s from "./modal.module.css";

const modalRoot = document.querySelector("#modal");

export default function Modal({ onClose, showModal }) {
  useEffect(() => {
    document.body.classList.add(s.overvlow);
    return () => {
      document.body.classList.remove(s.overvlow);
    };
  }, []);
  return createPortal(
    <div
      className={`${s.modalBackDrop} ${showModal ? s.opacity : ""}`}
      onClick={() => onClose()}
    >
      <div className={`${s.container} ${showModal ? s.containerActive : ""}`}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/tax-collection"
              className={({ isActive }) => (isActive ? s.active : s.navlink)}
            >
              Tax Collection
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/gambling"
              className={({ isActive }) => (isActive ? s.active : s.navlink)}
            >
              Aiding responsible gambling
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/data"
              className={({ isActive }) => (isActive ? s.active : s.navlink)}
            >
              Data at your fingertips
            </NavLink>
          </li>
          <li className={s.item}>Trueplay Explorer</li>
          <li className={s.item}>Blog</li>
        </ul>
        <Button
          text="White paper"
          type="button"
          onClick={() => console.log("click")}
        />
      </div>
    </div>,
    modalRoot
  );
}
