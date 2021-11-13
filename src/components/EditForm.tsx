interface IEditFormProps {
  id: string;
  name: string;
  newName: string;
  onEditNameChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onEditFormSubmit(event: React.FormEvent<HTMLFormElement>): void;
}

export const EditForm: React.FC<IEditFormProps> = ({
  id,
  name,
  newName,
  onEditNameChange,
  onEditFormSubmit,
}) => {
  return (
    <form className="edit-form" onSubmit={onEditFormSubmit}>
      <div className="form-group">
        <label htmlFor={id}>Edit "{name}"</label>
        <input id={id} value={newName} onChange={onEditNameChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};
