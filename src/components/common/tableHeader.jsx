import React from "react";

const TableHeader = ({ columns, sortBy, onSort }) => {
  const raiseSort = (key) => {
    let order = "asc";
    if (sortBy.key === key) order = sortBy.order === "asc" ? "desc" : "asc";
    onSort({ key, order });
    console.log(key, order);
  };

  const renderSortIcon = (column) => {
    if (sortBy.key !== column.key) return null;
    if (sortBy.order === "asc") return "fa fa-sort-amount-asc";
    return "fa fa-sort-amount-desc";
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            className="clickable"
            key={column.key}
            onClick={() => raiseSort(column.key)}
          >
            {column.label}{" "}
            <i class={renderSortIcon(column)} aria-hidden="true"></i>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
