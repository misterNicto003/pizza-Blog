import React from "react";
import { useState } from "react";

const Categories = ({ items, onClick }) => {
  const [test, setTest] = useState(null);

  const click = (index) => {
    setTest(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={test === null ? "active" : ""}
          onClick={() => click(null)}
        >
          Все
        </li>

        {items &&
          items.map((name, index) => (
            <li
              className={test === index ? "active" : ""}
              onClick={() => click(index)}
              key={(name, index)}
            >
              {name}
            </li>
          ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Categories;
