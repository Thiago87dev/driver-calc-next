interface DivResultComponentProps {
  textLabel: string[]
  result: number | null
}

const DivResultComponent = ({ textLabel, result }: DivResultComponentProps) => {
  const renderDiv = () => {
    return (
      textLabel.length > 4 ?
      <div className=" bg-mainColorLight  mt-2">
        <div className="flex flex-wrap">
          {textLabel.map((textLabel, index) => (
            <div key={index} className="w-1/2 p-5 ">
              <label className="text-lg text-secundaryColor  mt-6">
                {textLabel}
              </label>
              <div className="bg-white w-full h-16 ">{result !== null ? result?.toFixed(2) : ''}</div>
            </div>
          ))}
        </div>
      </div> : <div className=" bg-white  mt-6 2xl:mt-16">
        <div className="flex justify-center">
          {textLabel.map((textLabel, index) => (
            <div key={index} className="w-1/2 p-5 ">
              <label className="text-lg text-mainColorLight  mt-6">
                {textLabel}
              </label>
              {textLabel === 'Valor do desconto (em %)' ? <div className="bg-mainColorLight w-full h-16 text-white flex justify-center items-center text-4xl">{result !== null ? result?.toFixed(2) + '%' : ''}</div> : <div className="bg-mainColorLight w-full h-16 text-white flex justify-center items-center text-4xl">{result !== null ? result?.toFixed(2) : ''}</div> }
              
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{renderDiv()}</div>;
};

export default DivResultComponent;
