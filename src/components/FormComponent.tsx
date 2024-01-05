"use client";

import { useState } from "react";

interface InputData {
  label: string;
  type: string;
}

interface FormComponentProps {
  inputsData: InputData[];
  onCalcutale: (values: Record<string, unknown>) => void;
}

const FormComponent = ({ inputsData, onCalcutale }: FormComponentProps) => {
  const [inputValues, setInputValues] = useState<Record<string, unknown>>({});

  const handleInputChange = (label: string, value: unknown) => {
    setInputValues((prevValues) => ({ ...prevValues, [label]: value }));
  };

  const handleCalculate = () => {
    onCalcutale(inputValues);
  };

  const renderInputs = () => {
    return inputsData.length > 4
      ? inputsData.map((input, index) => (
          <div key={index}>
            <label className="block text-sm font-bold mt-2 ">
              {input.label}
            </label>
            {input.type === "number" && (
              <input
                className="shadow appearance-none bg-mainColorLight border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
                type={input.type}
                step="0.1"
                onChange={(e) => handleInputChange(input.label, e.target.value)}
              />
            )}
            {input.type === "time" && (
              <input
                className="shadow appearance-none bg-mainColorLight border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
                type={input.type}
              />
            )}
          </div>
        ))
      : inputsData.map((input, index) => (
          <div key={index}>
            <label className="block text-sm font-bold mt-2 text-secundaryColor ">
              {input.label}
            </label>
            {input.type === "number" && (
              <input
                className="shadow appearance-none bg-white border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
                type={input.type}
                step="0.1"
                onChange={(e) => handleInputChange(input.label, e.target.value)}
              />
            )}
          </div>
        ));
  };

  return (
    <form>
      {renderInputs()}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5"
        type="button"
        onClick={handleCalculate}
      >
        Calcular
      </button>
    </form>
  );
};

export default FormComponent;
