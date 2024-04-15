"use client";

import { ChangeEvent, useState } from "react";
import TextInput from "./components/forms/TextInput";
import Card from "./components/Card";
import SubmitButton from "./components/forms/SubmitButton";

interface CardData {
  cardNumber: string;
  cardValidity: string;
  cardCvv: string;
  ownerName: string;
  ownerCpf: string;
}

export default function Home() {
  const [cardData, setCardData] = useState<CardData>({
    cardCvv: "",
    cardNumber: "",
    cardValidity: "",
    ownerCpf: "",
    ownerName: "",
  });
  const [cvvFocus, setCvvFocus] = useState<boolean>();

  const cvvOnFocus = (focus: boolean) => {
    setCvvFocus(focus);
  };

  const handleChange = (key: string, event: ChangeEvent<HTMLInputElement>) => {
    setCardData((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="bg-nb-clear rounded-2xl p-8 flex border-4 relative before:border-4 before:absolute before:-z-10 before:top-2 before:left-0 before:bg-nb-dark-blue before:w-full before:h-full before:rounded-2xl">
        <div>
          <div className="w-80">
            <TextInput
              id="card-number"
              label="Numero do Cartão"
              mask="XXXX XXXX XXXX XXXX"
              placeholder="0000 0000 0000 0000"
              value={cardData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e)}
            />
          </div>
          <div className="w-36 inline-block">
            <TextInput
              id="card-validity"
              label="Validade"
              mask="XX/XX"
              placeholder="12/34"
              value={cardData.cardValidity}
              onChange={(e) => handleChange("cardValidity", e)}
            />
          </div>
          <div className="w-36 ml-8 inline-block">
            <TextInput
              id="card-cvv"
              onFocusBlur={cvvOnFocus}
              label="CVV"
              mask="XXX"
              placeholder="000"
              value={cardData.cardCvv}
              onChange={(e) => handleChange("cardCvv", e)}
            />
          </div>
          <div className="w-80">
            <TextInput
              id="owner-name"
              label="Nome no Cartão"
              mask="X"
              placeholder="Seu nome..."
              value={cardData.ownerName}
              onChange={(e) => handleChange("ownerName", e)}
            />
          </div>
          <div className="w-80">
            <TextInput
              id="owner-cpf"
              label="CPF do titular"
              mask="XXX.XXX.XXX-XX"
              placeholder="000.000.000-00"
              value={cardData.ownerCpf}
              onChange={(e) => handleChange("ownerCpf", e)}
            />
          </div>
        </div>
        <div className="ml-8 flex flex-col justify-between pt-10">
          <Card
            cardNumber={cardData.cardNumber}
            name={cardData.ownerName}
            validate={cardData.cardValidity}
            cvv={cardData.cardCvv}
            cvvFocus={cvvFocus}
          />
          <div className="w-80">
            <SubmitButton text="Confirmar" />
          </div>
        </div>
      </div>
    </main>
  );
}
