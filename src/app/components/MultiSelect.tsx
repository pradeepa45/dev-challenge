"use client";

import React from "react";
import { animated } from "@react-spring/web";

import Button from "./Button";
import Checkbox from "./Checkbox";
import Divider from "../Divider";
import { Task } from "../types";
import Input from "./Input";
import updateTask from "../api/updateTask";

interface MultiSelectProps {
  selectAll: boolean;
  options: Task[];
}

export default function MultiSelect({
  selectAll = false,
  options,
}: MultiSelectProps) {
  const [selectAllOptions, setSelectAllOptions] = React.useState(selectAll);
  const [selectedOptions, setSelectedOptions] = React.useState(options);
  const [newTaskName, setNewTask] = React.useState("");

  const handleCheckboxChange = async (option: any) => {
    const allSelected = selectedOptions.every(
      (option: Task) => option.completed
    );
    setSelectAllOptions(allSelected);
    await updateTask({
      task: {
        ...option,
        completed: !option.completed,
      },
    });
  };

  const toggleSelectAll = () => {
    setSelectAllOptions(!selectAllOptions);
    const newSelectedOptions = options.map((option: Task) => {
      return { ...option, completed: !selectAllOptions };
    });
    setSelectedOptions(newSelectedOptions);
  };

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setNewTask(e.target.value);
  };

  return (
    <animated.div className="flex flex-col px-[22px] rounded-md shadow-dual border border-border-gray py-2.5">
      <Checkbox
        label="All done!"
        name="selectAll"
        checked={selectAllOptions}
        onChange={toggleSelectAll}
      />
      <Divider />
      <Input value={newTaskName} onChange={handleChange} label="New task" />
      <Divider />
      <div className="grid grid-cols-2 gap-x-4">
        {selectedOptions.map((option: Task) => (
          <Checkbox
            key={option.id}
            label={option.title}
            name={option.title}
            checked={option.completed}
            onChange={() => handleCheckboxChange(option)}
          />
        ))}
      </div>
      <Divider />
      <Button>Done</Button>
    </animated.div>
  );
}
