"use client";

import { useState } from "react";
import TextInput from "./components/forms/TextInput";

export default function Home() {
  const [cvvFocus, setCvvFocus] = useState<boolean>();

  const cvvOnFocus = (focus: boolean) => {
    setCvvFocus(focus);
  };

  return (
    <main className="min-h-screen flex justify-center items-center bg-orange-200">
      <div className="bg-slate-400 rounded-2xl p-8 flex">
        <div>
          <div className="w-80">
            <TextInput
              id="card-number"
              label="Numero do Cartão"
              mask="XXXX XXXX XXXX XXXX"
              placeholder="0000 0000 0000 0000"
            />
          </div>
          <div className="w-36 inline-block">
            <TextInput
              id="card-validity"
              label="Validade"
              mask="XX/XX"
              placeholder="12/34"
            />
          </div>
          <div className="w-36 ml-8 inline-block">
            <TextInput
              id="card-cvv"
              onFocusBlur={cvvOnFocus}
              label="CVV"
              mask="XXX"
              placeholder="000"
            />
          </div>
          <div className="w-80">
            <TextInput
              id="owner-name"
              label="Nome no Cartão"
              mask="X"
              placeholder="Seu nome..."
            />
          </div>
          <div className="w-80">
            <TextInput
              id="owner-cpf"
              label="Card number"
              mask="XXX.XXX.XXX-XX"
              placeholder="000.000.000-00"
            />
          </div>
        </div>
        <div className="">
          <div className="relative w-80 h-48">
            <div
              className={`absolute w-80 h-48 bg-purple-700 rounded-xl flex items-end p-4 transition ease-linear duration-500 ${cvvFocus ? "rotate-y-90-pers-800" : "rotate-y-0-pers-800 delay-500"}`}
            >
              <div>
                <h1 className="text-xl">1234 1234 1234 1234</h1>
                <div>
                  <span className="font-bold">Anderson S Freitas</span>
                  <span className="pl-4 font-bold">12/34</span>
                </div>
              </div>
            </div>
            <div
              className={`absolute w-80 h-48 bg-blue-700 rounded-xl flex items-end p-8 transition ease-linear duration-500 ${cvvFocus ? "rotate-y-360-pers-800 delay-500" : "rotate-y-270-pers-800"}`}
            >
              <div>
                <span className="font-bold">CVV</span>
                <span className="pl-2 text-xl font-bold">123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
