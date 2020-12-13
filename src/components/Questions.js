import React, { useState } from "react";
import Card from "./Card";
import QuestionBank from "../constants/Questions";
import Question from "./Question";

const Questions = () => {
  const [SelectedVal, setSelectedVal] = useState([]);
  const LevelKeys = Object.keys(QuestionBank);
  const Levels = LevelKeys.map(l =>
    l.replace("_", " ").replace("JS", " JS -").replace("Level", "Level ")
  );
  const AllQuestions = SelectedVal.reduce(
    (acc, cur) => [...acc, ...QuestionBank[cur]],
    []
  );
  const handleChange = e => {
    const { value } = e.target;
    if (SelectedVal.indexOf(value) > -1) {
      let sel = [...SelectedVal];
      sel.splice(sel.indexOf(value), 1);
      setSelectedVal([...sel]);
    } else {
      setSelectedVal([...SelectedVal, value]);
    }
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
              checked={SelectedVal.indexOf(LevelKeys[key]) > -1}
            />
            {val}
          </label>
        ))}
      </Card>
      {SelectedVal.length > 0 && (
        <Card Header="Questions" className="mt-3">
          {AllQuestions.map((q, key) => (
            <Question key={key} Que={q} />
          ))}
        </Card>
      )}
    </div>
  );
};

export default Questions;
