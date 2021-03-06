import React from "react";

const Question = ({ Que, handleClick }) => (
  <div className="Question">
    <p>{Que}</p>
    <div className="d-flex ">
      {[...Array(6).keys()].map(rate => (
        <label
          className="form-check form-check-inline border rounded p-1 bg-light flex-fill"
          key={rate}
        >
          <input
            type="radio"
            name={Que}
            value={rate}
            className="form-check-input"
            onClick={handleClick}
          />
          {rate}
        </label>
      ))}
    </div>
  </div>
);

export default Question;
