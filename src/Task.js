import React, { useEffect, useState } from "react";
import { intlFormatDistance, differenceInDays } from "date-fns";

const Task = ({ taskObj, onComplete }) => {
  const deadline = new Date(taskObj.deadline).setHours(23, 59, 59, 999);

  const daysLeft = differenceInDays(deadline, Date.now());
  console.log("days left:", daysLeft);
  console.log("less then 3?", daysLeft <= 3);
  console.log("***********render bitti*************");

  return (
    <div className="p-[1.5rem] bg-[#fff] rounded-[5px]  leading-6 mt-4 shadow-md ">
      <h3 className="text-[18px] text-[#c8781a] ">{taskObj.title}</h3>
      <div className="deadline">
        son teslim:{" "}
        <span className={daysLeft <= 3 ? "bg-red-400" : "bg-indigo-200 "}>
          {intlFormatDistance(deadline, Date.now())}
        </span>
      </div>
      <p className="pt-[0.5rem] pb-[0.75rem] text-[14px] text-[#444]">
        {taskObj.description}
      </p>
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
