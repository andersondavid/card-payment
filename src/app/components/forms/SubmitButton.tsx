import React, { useState } from "react";

type PropTypes = {
  text: string;
};

export default function SubmitButton(props: PropTypes) {
  const [pressEffect, setPressEffect] = useState<boolean>(false);
  const { text } = props;

  const handlePress = () => {
    setPressEffect(true);
    setTimeout(() => {
      setPressEffect(false);
    }, 500);
  };

  return (
    <div className="relative">
      <span className="border-[3px] absolute top-[2px] left-0 bg-nb-dark-blue w-full h-full rounded-2xl"></span>
      <div
        className={`bg-nb-green border-[3px] relative rounded-xl h-14 w-full ${pressEffect ? "translate-y-[2px]" : "translate-y-0"}`}
      >
        <button
          className="bg-transparent h-full outline-0 w-full text-2xl px-4 font-lexend-mega font-normal"
          onClick={handlePress}
        >
          {text}
        </button>
      </div>
    </div>
  );
}
