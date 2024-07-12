"use client";

import React from "react";
import { animated } from "@react-spring/web";

import Button from "../Button";
import Divider from "../../Divider";
import { Task } from "../../types";
import Input from "../Input";
import Option from "./Option";
import Checkbox from "../Checkbox";
import addTask from "@/app/api/addTask";

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

  const handleClick = async () => {
    await addTask({ name: newTaskName });
  };

  return (
    <animated.div className="flex flex-col px-[22px] rounded-md shadow-dual border border-border-gray py-2.5">
      <div className="flex justify-between items-center">
        <p>All done!</p>
        <Checkbox
          checked={selectAllOptions}
          onChange={toggleSelectAll}
          name="selectAll"
        />
      </div>
      <Divider />
      <Input
        value={newTaskName}
        onChange={handleChange}
        label="New task"
        cta={handleClick}
      />
      <Divider />
      <div className="grid grid-cols-2 gap-x-4">
        {selectedOptions
          .sort((a, b) => parseInt(a.id) - parseInt(b.id))
          .map((option: Task) => (
            <Option key={option.id} task={option} />
          ))}
      </div>
      <Divider />
      <Button>Done</Button>
    </animated.div>
  );
}
