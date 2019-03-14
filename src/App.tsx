import React, { useState, useEffect } from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_config from "./aws-exports";
import * as mutations from "./graphql/mutations";
import * as queries from "./graphql/queries";
import List from "./components/List";
import AddItem from "./components/AddItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

Amplify.configure(aws_config);

const App = () => {
  const defaultState: Array<object> = [];
  const [items, setListItems] = useState(defaultState);

  useEffect(() => {
    const data: any = API.graphql(graphqlOperation(queries.listTodos));

    data.then((data: { data: { listTodos: { items: object[] } } }) => {
      const items = data.data.listTodos.items;

      setListItems(items);
    });
  });

  const addItem: (item: Item) => void = item => {
    API.graphql(graphqlOperation(mutations.createTodo, { input: item }));
  };

  const updateItem: (item: Item) => void = item => {
    API.graphql(graphqlOperation(mutations.updateTodo, { input: item }));
  };

  const deleteItem: (id: string) => void = id => {
    const item = {
      id
    };

    API.graphql(graphqlOperation(mutations.deleteTodo, { input: item }));
  };

  return (
    <div className="container py-5">
      <h1>Things to do:</h1>
      <AddItem handleAdd={addItem} />
      <List listItems={items} updateItem={updateItem} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
