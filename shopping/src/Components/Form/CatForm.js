import React from "react";

const CatForm = ({submit, value, setValue}) => {
  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <input
          type="text"
          className="form"
          placeholder="Enter New Category"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default CatForm;
