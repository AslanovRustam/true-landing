import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import logo from "../../assets/Images/logo.png";
import s from "./header.module.css";
import Button from "../Button/Button";

export default function Header() {
  return (
    <Container>
      <div className={s.header}>
        <NavLink to="/">
          <img className={s.logo} src={logo} alt="logo" />
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

        <Button
          text="White paper"
          type="button"
          onClick={() => console.log("click")}
        />
      </div>
    </Container>
  );
}
