import React from "react";

type PropTypes = {
  text: string;
};

export default function SubmitButton(props: PropTypes) {
  const { text } = props;

  return (
    <div className="bg-nb-green border-[3px] relative rounded-xl h-14 w-full">
      <button className="bg-transparent h-full outline-0 w-full text-2xl px-4">
        {text}
      </button>
    </div>
  );
}
