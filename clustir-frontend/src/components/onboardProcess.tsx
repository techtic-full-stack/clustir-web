import { useState } from "react";
import BusinessContactInfo from "./BusinessContactInfo";
import BankingForm from "./BankingForm";

const OnboardProcess = () => {
  const [step, setStep] = useState(0);
  const [OnBoardData, setOnBoardData] = useState({});

  return (
    <>
      {step === 0 && (
        <BusinessContactInfo setOnBoardData={setOnBoardData} OnBoardData={OnBoardData} step={step} setStep={setStep} />
      )}
      {step === 1 && (
        <BankingForm setOnBoardData={setOnBoardData} OnBoardData={OnBoardData} step={step} setStep={setStep} />
      )}
    </>
  );
};
export default OnboardProcess;
