import { ReactNode } from "react";

interface InputData {
  label: string;
  type: string;
}

interface FormComponentProps {
  inputsData: InputData[];
}

const FormComponent = ({ inputsData }: FormComponentProps) => {
  const renderInputs = () => {
    return inputsData.map((input, index) => (
      <div key={index}>
        <label className="block text-sm font-bold mt-6 ">{input.label}</label>
        {input.type === "number" && (
          <input
            className="shadow appearance-none bg-mainColorLight border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
            type={input.type}
            step='0.1'
          />
        )}
        {input.type === "time" && (
          <input
            className="shadow appearance-none bg-mainColorLight border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-slate-300"
            type={input.type}
          />
        )}
      </div>
    ));
  };

  return (
    <form>
      {renderInputs()}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
        Calcular
      </button>
    </form>
  );
};

export default FormComponent;
