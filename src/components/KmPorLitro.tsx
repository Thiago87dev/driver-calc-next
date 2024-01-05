"use client";

import { useState } from "react";

import FormComponent from "./FormComponent";
import KmPorLitroResult from "./KmPorLitroResult";

const KmPorLitro = () => {
  const inputsData = [
    { label: "Quantidade de km rodado", type: "number" },
    { label: "Quantidade de litros abastecido", type: "number" },
  ];

  const [result, setResult] = useState<number | null>(null);

  const calculateAutonomy = (values: Record<string, unknown>) => {
    const kmRodado = Number(values["Quantidade de km rodado"]) || 0;
    const litrosAbastecidos =
      Number(values["Quantidade de litros abastecido"]) || 0;

    if (litrosAbastecidos === 0) {
      setResult(null);
    } else {
      const autonomy = kmRodado / litrosAbastecidos;
      setResult(autonomy);
    }
  };

  return (
    <>
      <div className="flex justify-around  w-full">
        <div className="border-solid w-2/5">
          <h2 className="flex justify-center pt-2 text-4xl font-bold  ">
            Descubra a autonomia do seu veiculo
          </h2>
          <FormComponent
            onCalcutale={calculateAutonomy}
            inputsData={inputsData}
          />
        </div>
        <KmPorLitroResult result={result} />
      </div>
    </>
  );
};

export default KmPorLitro;
