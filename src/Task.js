import React, { useEffect, useState } from "react";
import { intlFormatDistance } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline);
  deadline.setHours(23, 59, 59, 999);
  console.log("deadline", deadline);

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        <span>son teslim: </span>
        <span>{intlFormatDistance(deadline, Date.now())}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
