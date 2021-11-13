interface IAddForm {
  name: string;
  onAddNameChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onAddFormSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

export const AddForm: React.FC<IAddForm> = ({
  name,
  onAddNameChange,
  onAddFormSubmit,
}) => {
  return (
    <form className="add-form" onSubmit={onAddFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Add grocery item</label>
        <input id="name" value={name} onChange={onAddNameChange} />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
