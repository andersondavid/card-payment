"use client";

import { useState } from "react";
import TextInput from "./components/forms/TextInput";
import Card from "./components/Card";

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
        <div className="ml-8">
          <Card cardNumber="" name="" validate="" cvv="" cvvFocus={cvvFocus} />
        </div>
      </div>
    </main>
  );
}
