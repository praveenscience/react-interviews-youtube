import React from "react";
import QuestionBank from "../constants/Questions";

const Questions = () => {
  const LevelKeys = Object.keys(QuestionBank);
  const Levels = LevelKeys.map(l =>
    l.replace("_", " ").replace("JS", " JS -").replace("Level", "Level ")
  );
  return (
    <div className="Questions">
      <pre className="border rounded bg-light p-3">
        {JSON.stringify({ LevelKeys, Levels }, null, 2)}
      </pre>
    </div>
  );
};

export default Questions;
