import React from "react";

const FunFact = (props) => {
  const funFact = [
    {
      title: "Cert",
      subTitle: "Certificado 1",
      Symbol: "%",
    },
    {
      title: "Cert",
      subTitle: "Certificado 2",
      Symbol: "+",
    },
    {
      title: "Cert",
      subTitle: "Certificado 3",
      Symbol: "+",
    },
    {
      title: "Cert",
      subTitle: "Certificado 4",
      Symbol: "-",
    },
  ];

  return (
    <section
      className="relative z-1 bg-no-repeat bg-center bg-cover overflow-hidden pt-[100px] pb-[95px]"
      style={{
        backgroundImage: `url(${"/images/integralPro/certificados/certificados.jpg"})`,
      }}
    >
      <div className="wraper">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-6 md:col-span-6 sm:col-span-12">
            <div className="counter-grids relative overflow-hidden">
              {funFact.map((funfact, fitem) => (
                <div
                  className="w-[48%] float-left pt-[40px] pb-[40px] mr-[5px] bg-navbar/60 mb-[5px] text-center sm:flex-none col:w-full"
                  key={fitem}
                >
                  <div>
                    <h2 className=" text-[50px] sm:text-[30px] font-bold text-white ">
                      {funfact.title}
                      {funfact.Symbol}
                    </h2>
                  </div>
                  <p className=" text-[18px] fonts-normal pt-[10px] text-white">
                    {funfact.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFact;