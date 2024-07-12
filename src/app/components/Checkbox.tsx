"use client";

import { animated } from "@react-spring/web";

import { CheckboxProps } from "../types";

export default function Checkbox({
  name,
  checked = false,
  onChange,
}: CheckboxProps) {
  return (
    <>
      <input type="checkbox" onChange={onChange} name={name} id={name} />
      <animated.svg
        width="19"
        height="14"
        viewBox="0 0 19 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block border w-[25px] h-[25px] p-[3px] gap-0 rounded-md ${
          checked
            ? "border-primary bg-primary opacity-100 group-hover:bg-primary-hover group-hover:border-primary-hover"
            : "opacity-60 border-divider-gray group-hover:border-border-gray-hover group-hover:[&_path]:stroke-border-gray-hover"
        } `}
        aria-hidden="true"
      >
        <animated.path
          d="M1 7.6L7.03451 12.9672C7.05497 12.9854 7.08626 12.9837 7.1047 12.9635L18 1"
          stroke={checked ? "black" : "none"}
          strokeLinecap="round"
        />
      </animated.svg>
    </>
  );
}
