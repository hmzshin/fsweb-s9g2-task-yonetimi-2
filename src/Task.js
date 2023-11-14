import React, { useEffect, useState } from "react";
import { intlFormatDistance, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline).setHours(23, 59, 59, 999);

  const daysLeft = differenceInDays(deadline, Date.now());
  console.log("days left:", daysLeft);
  console.log("less then 3?", daysLeft <= 3);
  console.log("***********render bitti*************");

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={daysLeft <= 3 ? "bg-red-400" : "bg-indigo-200 "}>
          {intlFormatDistance(deadline, Date.now())}
        </span>
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
