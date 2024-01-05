"use client";

import { useState } from "react";

import FormComponent from "./FormComponent";
import DescontoCombustivelResult from "./DescontoCombustivelResult";

const DescontoCombustivel = () => {
  const inputsData = [
    { label: "Valor pago sem desconto", type: "number" },
    { label: "Valor pago com desconto", type: "number" },
  ];

  const [result, setResult] = useState<number | null>(null);

  const calculateDiscount = (values: Record<string, unknown>) => {
    const semDesconto = Number(values["Valor pago sem desconto"]) || 0;
    const comDesconto = Number(values["Valor pago com desconto"]) || 0;

    if (semDesconto === 0) {
      setResult(null);
    } else {
      const resultDescComb = ((semDesconto - comDesconto) * 100) / semDesconto;
      setResult(resultDescComb);
    }
  };

  return (
    <>
      <div className="flex justify-around  w-full">
        <div className="border-solid w-2/5">
          <h2 className="flex justify-center pt-2 text-4xl font-bold">
            Descubra o desconto do Combustivel
          </h2>
          <FormComponent
            onCalcutale={calculateDiscount}
            inputsData={inputsData}
          />
        </div>
        <DescontoCombustivelResult  result={result}/>
      </div>
    </>
  );
};

export default DescontoCombustivel;
