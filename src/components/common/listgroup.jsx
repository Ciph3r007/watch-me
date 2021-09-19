import React from "react";

const ListGroup = ({ items, id, name, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[id]}
          onClick={() => onItemSelect(item)}
          className="list-group-item"
        >
          {item[name]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  id: "_id",
  name: "name",
};

export default ListGroup;
