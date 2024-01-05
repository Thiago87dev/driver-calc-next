import DivResultComponent from "./DivResultComponent";

const KmPorLitroResult = ({ result }: { result: number | null }) => {
  const textLabels = ["Autonomia"];
  return (
    <>
      <div className="border-solid  w-2/5">
        <h2 className="flex justify-center text-4xl font-bold">
          Resultado
        </h2>
        <DivResultComponent textLabel={textLabels} result={result} />
      </div>
    </>
  );
};

export default KmPorLitroResult;
