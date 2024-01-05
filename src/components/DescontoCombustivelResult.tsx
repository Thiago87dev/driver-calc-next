import DivResultComponent from "./DivResultComponent";

const DescontoCombustivelResult = ({ result }: { result: number | null }) => {
  const textLabels = ["Valor do desconto (em %)"];
  return (
    <>
      <div className="border-solid  w-2/5">
        <h2 className="flex justify-center text-4xl font-bold">
          Resultado
        </h2>
        <DivResultComponent result={result} textLabel={textLabels} />
      </div>
    </>
  );
};

export default DescontoCombustivelResult;
