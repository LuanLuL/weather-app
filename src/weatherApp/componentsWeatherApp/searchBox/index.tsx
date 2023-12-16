import React, { useState, useCallback } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "./style.css";
import { keyboardKey } from "@testing-library/user-event";

interface MyComponentProps {
  useApi: (city: string) => void;
}

export const SearchBox: React.FC<MyComponentProps> = (props) => {
  const [input, setInput] = useState("");

  const handleSearchInput = useCallback(
    (e: keyboardKey) => {
      if (e.code === "Enter") {
        handleSearchButton();
      }
    },
    [input]
  );

  const handleSearchButton = useCallback(() => {
    if (input.length !== 0) {
      props.useApi(input);
      setInput("");
    }
  }, [input]);

  return (
    <div className="searchBox--weatherApp">
      <FaMapMarkerAlt className="icon-map" />
      <input
        type="text"
        placeholder="Busque um local..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={handleSearchInput}
      />
      <button onClick={handleSearchButton}>
        <FaSearch />
      </button>
    </div>
  );
};
