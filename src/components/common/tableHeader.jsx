import React from "react";

const TableHeader = ({ columns, sortBy, onSort }) => {
  const raiseSort = (key) => {
    let order = "asc";
    if (sortBy.key === key) order = sortBy.order === "asc" ? "desc" : "asc";
    onSort({ key, order });
    console.log(key, order);
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column.key} onClick={() => raiseSort(column.key)}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
