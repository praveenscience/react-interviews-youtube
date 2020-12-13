import React from "react";
import Card from "./Card";
import QuestionBank from "../constants/Questions";

const Questions = () => {
  const LevelKeys = Object.keys(QuestionBank);
  const Levels = LevelKeys.map(l =>
    l.replace("_", " ").replace("JS", " JS -").replace("Level", "Level ")
  );
  const handleChange = e => {
    console.log(e.target.value);
  };
  return (
    <div className="Questions">
      <Card Header="Choose the Options">
        {Levels.map((val, key) => (
          <label className="form-check form-check-inline" key={key}>
            <input
              type="checkbox"
              value={LevelKeys[key]}
              className="form-check-input"
              onChange={handleChange}
            />
            {val}
          </label>
        ))}
      </Card>
    </div>
  );
};

export default Questions;
