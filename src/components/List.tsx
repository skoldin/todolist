import React from "react";
import ListItem from "./ListItem";

interface ListItems {
  listItems: object[];
  updateItem: (item: Item) => void;
  deleteItem: (id: string) => void;
}

const List: React.FunctionComponent<ListItems> = ({
  listItems,
  updateItem,
  deleteItem
}) => {
  if (!listItems.length) {
    return null;
    ``;
  }

  return (
    <ul className="list-group">
      {/* TODO: typecheck this */}
      {listItems.map((item: any) => {
        const { id } = item;

        return (
          <ListItem
            item={item}
            key={id}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
};

export default List;
