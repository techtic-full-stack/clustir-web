import { useState } from "react";
import BusinessContactInfo from "./BusinessContactInfo";

const OnboardProcess = () => {
  const [step, setStep] = useState(0);

  return <>{step === 0 && <BusinessContactInfo />}</>;
};
export default OnboardProcess;
