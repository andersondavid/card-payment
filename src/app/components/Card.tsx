import React from "react";

type PropsType = {
  name: string;
  cardNumber: string;
  validate: string;
  cvv: string;
  cvvFocus?: boolean;
};

export default function Card(props: PropsType) {
  const { name, cardNumber, validate, cvv, cvvFocus } = props;

  return (
    <div className="relative w-80 h-48">
      <div
        className={`absolute border-[3px] w-80 h-48 bg-nb-blue rounded-xl flex items-end p-4 transition ease-linear duration-300 ${cvvFocus ? "rotate-y-90-pers-800" : "rotate-y-0-pers-800 delay-300"}`}
      >
        <div>
          <h1 className="text-xl">{cardNumber || '1234 1234 1234 1234'}</h1>
          <div>
            <span className="font-bold">{name || 'CLIENT NAME'}</span>
            <span className="pl-4 font-bold">{validate || '12/34'}</span>
          </div>
        </div>
      </div>
      <div
        className={`absolute border-[3px] w-80 h-48 bg-nb-dark-blue rounded-xl flex items-end p-4 transition ease-linear duration-300 ${cvvFocus ? "rotate-y-360-pers-800 delay-300" : "rotate-y-270-pers-800"}`}
      >
        <div>
          <span className="">CVV:</span>
          <span className="pl-2 text-xl font-bold">{cvv || '123'}</span>
        </div>
      </div>
    </div>
  );
}
