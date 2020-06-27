import React, { useState } from "react";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  const handleChanges = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h4>Give it a name!</h4>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChanges}
            value={newSmurf.name}
          />
        </div>
        <div>
          <h4>How Old is It!</h4>
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={handleChanges}
            value={newSmurf.age}
          />
        </div>
        <div>
          <h4>How Tall is It?</h4>
          <input
            type="text"
            name="height"
            placeholder="height"
            onChange={handleChanges}
            value={newSmurf.height}
          />
        </div>
        <button className="button" type="submit">
          Add A Smurf
        </button>
      </form>
    </div>
  );
};

export default SmurfForm;
