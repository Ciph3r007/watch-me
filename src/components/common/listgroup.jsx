import React from "react";

const ListGroup = ({ items, id, name, currentItem, onItemSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[id]}
          onClick={() => onItemSelect(item)}
          className={
            item === currentItem ? "list-group-item active" : "list-group-item"
          }
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
