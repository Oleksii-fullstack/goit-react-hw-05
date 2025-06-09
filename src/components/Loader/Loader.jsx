import { PacmanLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <PacmanLoader color="#eec532" size={35} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
