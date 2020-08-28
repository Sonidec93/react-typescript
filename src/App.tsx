import React, { useState, useCallback } from "react";
import "./App.css";
import TODO from "./components/todo";
import AddItem from "./components/add-Item";

const App: React.FC = () => {
  let [items, setItems] = useState<{ id: number; name: string }[]>([
    { id: 1, name: "Football" },
    { id: 2, name: "BasketBall" }
  ]);

  let addToList = useCallback((...items: { id: number; name: string }[]) => {
    setItems(prevState => [...prevState, ...items]);
  }, []);
  return (
    <div className="App">
      <TODO items={[...items]}>List of Items</TODO>
      <AddItem addtoList={addToList}></AddItem>
    </div>
  );
};

export default App;
