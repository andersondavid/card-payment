import React from "react";

type PropsType = {
  label: string;
  id: string;
  placeholder: string;
  mask?: string;
  ref?: React.RefObject<HTMLInputElement>;
  onFocusBlur?: (arg0: boolean) => void;
};

function TextInput(props: PropsType) {
  const { label, id, placeholder, mask, ref, onFocusBlur = () => {} } = props;

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="text-base pl-4 my-2 block">
          {label}
        </label>
      )}
      <div className="bg-white relative rounded-xl h-14 w-full">
        <input
          type="text"
          onFocus={() => onFocusBlur(true)}
          onBlur={() => onFocusBlur(false)}
          id={id}
          placeholder={placeholder}
          className="bg-transparent h-full outline-0 w-full text-2xl px-4"
        />
      </div>
    </div>
  );
}

export default TextInput;
