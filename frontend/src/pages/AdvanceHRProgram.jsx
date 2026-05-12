import React from "react";
import HRHero from "../components/sections/hrTraining/HRHero";
import HRInfoStrip from "../components/sections/hrTraining/HRInfoStrip";
import ProgramHighlights from "../components/sections/hrTraining/ProgramHighlights";
import HRCurriculum from "../components/sections/hrTraining/HRCurriculum";
import CareerServices from "../components/sections/hrTraining/CareerServices";
import TalentHero from "../components/sections/hrTraining/TalentHero";
import EnquirySection from "../components/sections/hrTraining/EnquirySection";

const AdvanceHRProgram = () => {
  return (
    <>
       <HRHero/>
       <HRInfoStrip/>
       <ProgramHighlights/>
       <HRCurriculum/>
       <CareerServices/>
       <EnquirySection/>
       <TalentHero/>
    </>
  );
};

export default AdvanceHRProgram;