export default function DeleteAssignment({
  itemName,
  onCancel,
  onDelete,
}: {
  itemName: string;
  onCancel: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="modal">
      <div className="modal-content p-4 rounded shadow">
        <h4 className="text-danger mb-3">Confirm Deletion</h4>
        <p className="mb-4">
          Are you sure you want to delete <strong>{itemName}</strong>?
          This action cannot be undone.
        </p>
        <div className="d-flex justify-content-end gap-2">
          <button 
            onClick={onCancel} 
            className="btn btn-outline-secondary"
          >
            Cancel
          </button>
          <button 
            onClick={onDelete} 
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}