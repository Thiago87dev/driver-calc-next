import FormComponent from "./FormComponent";

const DriverCalc = () => {
    const inputsData = [
        {label: "Preço do combustivel", type: 'number'},
        {label: "Desconto combustivel (em %)", type: 'number'},
        {label: "Quantos km seu carro faz com 1 litro", type: 'number'},
        {label: "Quantos km você rodou", type: 'number'},
        {label: "Hora do inicio", type: 'time'},
        {label: "Hora do final", type: 'time'},
        {label: "Faturamento", type: 'number'},
    ]
  return (
    <>
      <h2 className="flex justify-center pt-8 text-6xl font-bold">
        Driver Calc
      </h2>
      <FormComponent inputsData={inputsData} />
    </>
  );
};

export default DriverCalc;
