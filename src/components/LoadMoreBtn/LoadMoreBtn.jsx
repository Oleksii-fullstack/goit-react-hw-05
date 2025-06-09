import { FiChevronsDown } from "react-icons/fi";
import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={s.wrapper}>
      <button className={s.button} type="button" onClick={onClick}>
        <span className={s.text}>Load More</span>
        <FiChevronsDown className={s.icon} size="16px" />
      </button>
    </div>
  );
};

export default LoadMoreBtn;
