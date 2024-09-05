import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useRouter } from "next/router";
import Footer from "../../components/footer/Footer";
import Cases from "../../api/case";
import Sidebar from "./Sidebar";
import RecentCase from "./Recent";
import Navbar from "../../components/Navbar/Navbar";
import Image from "next/image";

const CaseSinglePage = (props) => {
  const router = useRouter();
  const caseDetails = Cases.find((item) => item.slug === router.query.slug);
  const actual = caseDetails?.cTitle;

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={caseDetails?.cTitle} pagesub={caseDetails?.slug} />
      <div className="pt-[50px] md:py-[30px]">
        <div className="wraper">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-8 md:col-span-12 order-1">
              <Image
                className="w-full max-h-[400px] object-cover"
                src={caseDetails?.cImg}
                alt=""
              />
              <div className="pt-[50px]">
                <h2 className="text-[36px]  text-[#282e3f] mt-3">
                  {caseDetails?.cTitle}
                </h2>
                <h6 className="text-[18px] font-base-font leading-[40px] text-[#282e3f] mt-3">
                  {caseDetails?.par1}
                </h6>
                <div className="ml-8">
                  <h5 className="text-[22px] font-base-font leading-[40px] text-[#282e3f] mt-3">
                    {caseDetails?.par1_1}
                  </h5>
                  <p className="text-[16px] leading-[30px] mt-3 mb-[16px]">
                    {caseDetails?.par2}{" "}
                  </p>
                  <h5 className="text-[22px] font-base-font leading-[40px] text-[#282e3f] mt-3">
                    {caseDetails?.par3_1}
                  </h5>
                  <p className="text-[16px] leading-[30px] mt-3">
                    {caseDetails?.par4}{" "}
                  </p>
                  <h5 className="text-[22px] font-base-font leading-[40px] text-[#282e3f] mt-3">
                    {caseDetails?.par5_1}
                  </h5>
                  <p className="text-[16px] leading-[30px] mt-3">
                    {caseDetails?.par6}{" "}
                  </p>
                  <h5 className="text-[22px] font-base-font leading-[40px] text-[#282e3f] mt-3">
                    {caseDetails?.par7_1}
                  </h5>
                  <p className="text-[16px] leading-[30px] mt-3">
                    {caseDetails?.par8}{" "}
                  </p>
                </div>
              </div>
            </div>
            <Sidebar actual={actual} />
          </div>
          <RecentCase actual={actual} />
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default CaseSinglePage;
