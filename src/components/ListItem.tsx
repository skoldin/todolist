import React from "react";

interface Props {
  item: Item;
  updateItem: (item: Item) => void;
  deleteItem: (id: string) => void;
}

const ListItem: React.FunctionComponent<Props> = ({
  item,
  updateItem,
  deleteItem
}) => {
  const { name, done, id } = item;

  const handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const { checked } = e.currentTarget;

    item.done = checked;

    updateItem(item);
  };

  const handleDelete = () => {
    deleteItem(item.id);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id={id}
          defaultChecked={done}
          onChange={handleChange}
        />
        <label
          className="custom-control-label"
          htmlFor={id}
          style={done ? { color: "#999", textDecoration: "line-through" } : {}}
        >
          {name}
        </label>
      </div>
      <button className="btn btn-link" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
