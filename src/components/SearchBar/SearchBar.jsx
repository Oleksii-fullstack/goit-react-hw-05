import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return toast.error("You must enter your search phrase");
    }
    onSubmit(value);
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className={s.searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={value}
        />
        <button className={s.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
