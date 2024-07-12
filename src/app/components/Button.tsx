"use client";

import { animated } from "@react-spring/web";
import { ButtonProps } from "../types";

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <animated.button
      className="bg-primary block h-12 tablet:w-[340px] hover:bg-primary-hover rounded py-2.5 px-5 my-2.5 w-full text-black text-lg"
      type="button"
      onClick={onClick}
    >
      {children}
    </animated.button>
  );
}
