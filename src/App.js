import React, { useState } from "react";
import "./App.css";
import Items from "./Items";

function App() {
  const [newItem, setItem] = useState();
  const [newItems, setItems] = useState([]);

  let itemEvents = (event) => {
    setItem(event.target.value);
  };

  let clickItem = () => {
    setItems((oldItems) => {
      setItem("");
      return [...oldItems, newItem];
    });
  };

  let rItem = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElms, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <div className="input-div">
            <h1>To Do List</h1>
            <br />
            <input
              type="text"
              value={newItem}
              placeholder="Kuch bhi add kar bro"
              onChange={itemEvents}
            />
            <button onClick={clickItem}>+</button>
          </div>

          <ol className="List-div">
            {newItems.map((val, index) => {
              return (
                <Items one={val} key={index} id={index} onSelect={rItem} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
