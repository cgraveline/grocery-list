import { useState } from "react";
import { AddForm } from "./components/AddForm";
import { GroceryItem } from "./components/GroceryItem";

interface IGroceries {
  id: string;
  name: string;
}

const groceryList = [
  {
    id: "1",
    name: "ice cream",
  },
  {
    id: "2",
    name: "frozen pizza",
  },
  {
    id: "3",
    name: "bread",
  },
];

export default function GroceryList() {
  const [groceries, setGroceries] = useState<IGroceries[]>(groceryList);
  const [name, setName] = useState("");
  const [edit, setEdit] = useState(false);

  function handleAddFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    function makeId() {
      return (groceries.length + 1).toString();
    }

    setGroceries([
      ...groceries,
      {
        id: makeId(),
        name: name,
      },
    ]);

    // clear input
    setName("");
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setName(event.target.value);
  }

  function handleEdit(id: string, newName: string) {
    setEdit(true);

    const editedGroceryList = groceries.map((item) => {
      if (id === item.id) {
        return { ...item, name: newName };
      }
      return item;
    });

    setGroceries(editedGroceryList);
  }

  function handleDeleteClick(id: string) {
    setGroceries(groceries.filter((item) => item.id !== id));
  }

  return (
    <div className="groceries">
      <h1 className="groceries__title">Grocery List</h1>
      <AddForm
        name={name}
        onAddFormSubmit={handleAddFormSubmit}
        onAddNameChange={handleNameChange}
      />
      <ul className="grocery-list">
        {groceries.map((item) => (
          <GroceryItem
            id={item.id}
            name={item.name}
            onEdit={handleEdit}
            onDeleteClick={handleDeleteClick}
          />
        ))}
      </ul>
    </div>
  );
}
