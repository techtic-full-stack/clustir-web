import { useCallback, useState } from "react";
import BusinessContactInfo from "./BusinessContactInfo";
import BankingForm from "./BankingForm";
import axiosInstance from "@/interceptors/Axios";
import { apiName } from "@/interceptors/apiName";

const OnboardProcess = () => {
  const [step, setStep] = useState(1);
  const [OnBoardData, setOnBoardData] = useState({});
  console.log('step :>> ', step);
  
  const handleStep = useCallback(async () => {
    try {
      console.log('OnBoardData :>> ', OnBoardData);
      // const register: any = await axiosInstance.post(
      //   apiName.addBusiness,
      //   JSON.stringify({ ...OnBoardData })
      // );
      // console.log('register :>> ', register);
      setStep(step + 1);
    } catch (error) {
      
    }
  }, [OnBoardData, setStep, step]);
  return (
    <>
      {step === 1 && (
        <BusinessContactInfo setOnBoardData={setOnBoardData} OnBoardData={OnBoardData} step={step} setStep={()=>handleStep()} />
      )}
      {step === 2 && (
        <BankingForm setOnBoardData={setOnBoardData} OnBoardData={OnBoardData} step={step} setStep={handleStep} />
      )}
    </>
  );
};
export default OnboardProcess;
