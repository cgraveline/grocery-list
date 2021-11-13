import { useState } from "react";
import { EditForm } from "./EditForm";

interface IGroceryItemProps {
  id: string;
  name: string;
  onEdit(id: string, newName: string): void;
  onDeleteClick(id: string): void;
}

export const GroceryItem: React.FC<IGroceryItemProps> = ({
  id,
  name,
  onEdit,
  onDeleteClick,
}) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleEditNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    setNewName(event.target.value);
  }

  function handleEditFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onEdit(id, newName);
    // clear input
    setNewName("");
    setEditing(false);
  }

  return (
    <li id={id} className="grocery-item">
      {editing ? (
        <EditForm
          id={id}
          name={name}
          newName={newName}
          onEditNameChange={handleEditNameChange}
          onEditFormSubmit={handleEditFormSubmit}
        />
      ) : (
        <>
          {name}
          <div className="grocery-item__controls">
            <button onClick={() => setEditing(true)} title="Edit">
              ✏️
            </button>
            <button onClick={() => onDeleteClick(id)} title="Delete">
              🗑
            </button>
          </div>
        </>
      )}
    </li>
  );
};
