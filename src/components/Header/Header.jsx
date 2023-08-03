import { useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../assets/Images/logo.png";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import s from "./header.module.css";

export default function Header() {
  const [showModal, setShowmodal] = useState(false);

  const togleModal = () => {
    setShowmodal(!showModal);
  };

  return (
    <>
      <Container>
        <div className={s.header}>
          <NavLink to="/">
            <img
              className={s.logo}
              src={logo}
              alt="logo"
              onClick={() => setShowmodal(false)}
            />
          </NavLink>

          <ul className={s.list}>
            <li className={s.item}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="/tax-collection"
              >
                Tax Collection
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="/gambling"
              >
                Aiding responsible gambling
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="/data"
              >
                Data at your fingertips
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="*"
              >
                Trueplay Explorer
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                className={({ isActive }) => (isActive ? s.active : s.navLink)}
                to="*"
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <div className={s.mobSection}>
            <Button
              text="White paper"
              type="button"
              onClick={() => console.log("click")}
            />
          </div>

          <div
            className={`${s.menu} ${showModal && s.active}`}
            onClick={togleModal}
          >
            <div className={s.menuLineItem}></div>
            <div className={s.menuLineItem}></div>
            <div className={s.menuLineItem}></div>
          </div>
        </div>
      </Container>
      <Modal onClose={togleModal} showModal={showModal} />
    </>
  );
}
