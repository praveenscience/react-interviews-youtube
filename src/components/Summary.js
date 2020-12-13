import React from "react";

const Summary = ({ summary }) => {
  return (
    <ul className="Summary">
      {Object.keys(summary).map((question, key) => (
        <React.Fragment key={key}>
          <li>
            {question}: {summary[question]}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Summary;
