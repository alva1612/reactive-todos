import "./TodoLoading.css";

export const TodoLoading = () => {
  return (
    <>
      <div className="TodoLoading-container">
        <span className="TodoLoading-completeIcon"></span>
        <p className="TodoLoading-text">Loading</p>
        <span className="TodoLoading-deleteIcon"></span>
      </div>
      <div className="TodoLoading-container">
        <span className="TodoLoading-completeIcon"></span>
        <p className="TodoLoading-text">Loading</p>
        <span className="TodoLoading-deleteIcon"></span>
      </div>
      <div className="TodoLoading-container">
        <span className="TodoLoading-completeIcon"></span>
        <p className="TodoLoading-text">Loading</p>
        <span className="TodoLoading-deleteIcon"></span>
      </div>
    </>
  );
};
