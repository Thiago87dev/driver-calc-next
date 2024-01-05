import DivResultComponent from "./DivResultComponent";

const CalcResult = () => {
  const textLabels = [
    "Gasto por km",
    "Gasto com combustivel",
    "Combustivel com desconto",
    "Horas trabalhada",
    "Ganho por hora",
    "Ganho por km",
    "Lucro",
  ];
  return (
    <>
      <h2 className="flex justify-center pt-2 text-6xl font-bold">Resultado</h2>
      <DivResultComponent textLabel={textLabels} />
    </>
  );
};

export default CalcResult;
