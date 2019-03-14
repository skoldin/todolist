import * as React from "react";

interface Props {
  handleAdd: (item: Item) => void;
}

const AddItem: React.FunctionComponent<Props> = ({ handleAdd }) => {
  const defaultState: Item = { id: "", name: "", done: false };
  const [item, setItem] = React.useState(defaultState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setItem({ id: "", name: value, done: false });
  };

  const addItem = () => {
    handleAdd(item);

    setItem(defaultState);
  };

  return (
    <div className="d-flex mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add a thing to do"
        onChange={handleChange}
        value={item.name}
      />
      <button className="btn btn-primary" onClick={addItem}>
        Add
      </button>
    </div>
  );
};

export default AddItem;
