import Image from "next/image";
import bgImage from "../../public/img/audi.jpg";
import DriverCalc from "./DriverCalc";
import CalcResult from "./CalcResult";
import KmPorLitro from "./KmPorLitro";
import KmPorLitroResult from "./KmPorLitroResult";
import DescontoCombustivel from "./DescontoCombustivel";
import DescontoCombustivelResult from "./DescontoCombustivelResult";

export default function Hero() {
  return (
    <>
      <div className="max-w-full h-screen md:bg-mainColor">
        <div className="flex flex-col items-center my-0 mx-auto gap-8 w-3/5 xl:w-4/5">
          <div className="absolute -z-10 w-full">
            <Image
              src={bgImage}
              alt="audi"
              className="w-screen h-screen md:hidden "
              width={1000}
              height={1000}
            />
          </div>
          <h1 className="text-7xl text-white text-center font-bold mt-6 xl:text-6xl ">
            Calculadora de ganhos para motoristas de app
          </h1>
          <p className="text-center font-bold text-xl w-4/5 md:text-white">
            Descubra quanto você{" "}
            <span className="text-secundaryColor">lucra por hora</span>, quanto
            você gasta e quanto você lucra a cada km rodado, quanto você gasta
            com combustível e quanto você{" "}
            <span className="text-secundaryColor">
              realmente lucra no final do dia
            </span>
            .
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center h-screen">
        <div className="w-2/5 mx-5">
          <DriverCalc />
        </div>
        <div className="w-2/5 mx-5">
          <CalcResult />
        </div>
      </div>
      <div className=" flex justify-around h-screen bg-mainColorLight flex-col">
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-center items-center w-full mx-5">
            <KmPorLitro />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col justify-center items-center w-full mx-5">
            <DescontoCombustivel />
          </div>
        </div>
      </div>
    </>
  );
}
