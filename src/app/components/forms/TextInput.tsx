import React, { ChangeEvent } from "react";
import MaskedInput from "react-text-mask";

type PropsType = {
  label: string;
  id: string;
  placeholder: string;
  mask?: any[];
  onFocusBlur?: (arg0: boolean) => void;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const fnVoid = () => {};

function TextInput(props: PropsType) {
  const {
    label,
    id,
    placeholder,
    mask,
    onFocusBlur = fnVoid,
    value,
    onChange,
  } = props;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="text-base pl-4 my-2 block font-public-sans"
        >
          {label}
        </label>
      )}
      <div className="bg-white relative rounded-xl h-14 w-full border-[3px]">
        {(mask && (
          <MaskedInput
            mask={mask}
            type="text"
            onFocus={() => onFocusBlur(true)}
            onBlur={() => onFocusBlur(false)}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-transparent h-full outline-0 w-full text-xl px-4 font-lexend-mega"
          />
        )) || (
          <input
            type="text"
            onFocus={() => onFocusBlur(true)}
            onBlur={() => onFocusBlur(false)}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="bg-transparent h-full outline-0 w-full text-xl px-4 font-lexend-mega"
          />
        )}
      </div>
    </div>
  );
}

export default TextInput;
