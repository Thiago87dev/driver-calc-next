import Image from "next/image";
import bgImage from "../../public/img/audi.jpg";
import DriverCalc from "./DriverCalc";

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
              height={100}
            />
          </div>
          <h1 className="text-8xl text-white text-center font-bold mt-10 xl:text-6xl ">
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
      <div className=" h-screen">
        <div className="w-2/5 mx-3">
          <DriverCalc />
        </div>
      </div>
    </>
  );
}
