import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const addActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink className={addActive} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={"/movies"}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
