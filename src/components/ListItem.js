import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const Item = (props) => {
  const element = <FontAwesomeIcon icon={faTrash} />;
  const classod = "d-flex justify-content-between p-2 bg-success";
  const classeven = "d-flex justify-content-between p-2 bg-primary";
  const lists = props.list.map((item, index) => {
    return (
      <li className={index % 2 === 0 ? classod : classeven} key={index}>
        <span>{item}</span>
        <span
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.delete(index);
          }}
        >
          {element}
        </span>
      </li>
    );
  });

  return (
    <div>
      <h3 className="text-center bg-secondary p-3 mt-2 text-white">
        This is my to do list
      </h3>
      <div className="">
        <ul className="list-unstyled text-white">{lists}</ul>
      </div>
    </div>
  );
};

export default Item;
