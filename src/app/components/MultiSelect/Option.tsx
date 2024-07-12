"use client";

import { Task } from "@/app/types";
import updateTask from "@/app/api/updateTask";
import React from "react";
import Checkbox from "../Checkbox";

interface OptionProps {
  task: Task;
}

export default function Option({ task }: OptionProps) {
  const { id, title, completed = false } = task;
  const [checked, setChecked] = React.useState(completed);
  const handleCheckboxChange = async () => {
    setChecked(!checked);
    await updateTask({
      task: {
        ...task,
        completed: !checked,
      },
    });
  };

  return (
    <div className="group min-w-[340px]">
      <label
        htmlFor={id}
        className="text-sm flex justify-between items-center py-2"
      >
        {title}
        <Checkbox name={id} checked={checked} onChange={handleCheckboxChange} />
      </label>
    </div>
  );
}
