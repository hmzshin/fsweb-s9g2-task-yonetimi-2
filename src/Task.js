import React, { useEffect, useState } from "react";
import { intlFormatDistance, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline);
  deadline.setHours(23, 59, 59, 999);

  const daysLeft = differenceInDays(deadline, Date.now());
  console.log("days left:", daysLeft);
  console.log("3 den az mı ", daysLeft <= 3);
  console.log("***********render bitti*************");

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className={daysLeft <= 3 ? "deadline bg-red-400" : "deadline"}>
        son teslim:
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
