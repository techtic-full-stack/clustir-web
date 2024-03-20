import { useState } from "react";
import BusinessContactInfo from "./BusinessContactInfo";

const OnboardProcess = () => {
  const [step, setStep] = useState(0);
  const [OnBoardData, setOnBoardData] = useState({});

  return (
    <>
      {step === 0 && (
        <BusinessContactInfo setOnBoardData={setOnBoardData} OnBoardData={OnBoardData} />
      )}
    </>
  );
};
export default OnboardProcess;
