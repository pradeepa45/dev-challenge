"use client";

import React from "react";
import { animated } from "@react-spring/web";

import Button from "./Button";
import Checkbox from "./Checkbox";
import Divider from "../Divider";
import { Option } from "../types";

interface MultiSelectProps {
  selectAll: boolean;
  options: Option[];
}

export default function MultiSelect({
  selectAll = false,
  options,
}: MultiSelectProps) {
  const [selectAllOptions, setSelectAllOptions] = React.useState(selectAll);
  const [selectedOptions, setSelectedOptions] = React.useState(options);

  const handleCheckboxChange = (option: any) => {
    const newSelectedOptions = selectedOptions.map((selectedOption: Option) => {
      if (selectedOption.name === option.name) {
        return { ...selectedOption, selected: !selectedOption.selected };
      }
      return selectedOption;
    });
    setSelectedOptions(newSelectedOptions);
    const allSelected = newSelectedOptions.every(
      (option: Option) => option.selected
    );
    setSelectAllOptions(allSelected);
  };

  const toggleSelectAll = () => {
    setSelectAllOptions(!selectAllOptions);
    const newSelectedOptions = options.map((option: Option) => {
      return { ...option, selected: !selectAllOptions };
    });
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <animated.div className="flex flex-col px-[22px] rounded-md shadow-dual border border-border-gray py-2.5">
      <Checkbox
        label="All pages"
        name="selectAll"
        checked={selectAllOptions}
        onChange={toggleSelectAll}
      />
      <Divider />
      {selectedOptions.map((option: Option) => (
        <Checkbox
          key={option.slug}
          label={option.name}
          name={option.slug}
          checked={option.selected}
          onChange={() => handleCheckboxChange(option)}
        />
      ))}
      <Divider />
      <Button>Done</Button>
    </animated.div>
  );
}
