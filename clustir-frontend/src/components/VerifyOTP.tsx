import { RedoOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

const { Text } = Typography;
const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout>;

    if (resendTimer > 0) {
      timerId = setTimeout(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [resendTimer]);

  const handleResendOTP = () => {
    // Simulate sending OTP and start the timer
    setResendTimer(15);
  };

  return (
    <>
      <div className="flex justify-center items-center h-[70vh] m-[30px]">
        <div className="w-[400px]">
          <div className="flex justify-center items-center font-[700] text-[18px]  text-[#000000]">
            Verify Your Account
          </div>

          <div className="flex justify-center items-center font-[500] text-[16px]  text-[#000000]">
            We sent you a code to verify your account at {email} Edit
          </div>
          <div className=" flex  flex-col justify-center items-center">
       
          <div className="mt-[80px]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              onPaste={(e) => setOtp(e.clipboardData.getData("text"))} // Handle onPaste event
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={"otp-input"}
            />
          </div>
          <div className="flex justify-center items-center mt-[50px] space-x-2 cursor-pointer">
            {resendTimer > 0 ? (
              <Text className="text-[#000]">
                Resend OTP in {resendTimer} sec
              </Text>
            ) : (
              <>
                <RedoOutlined style={{ fontSize: "14px", color: "#000" }} />
                <Text className="text-[#000]" onClick={handleResendOTP}>
                  Resend OTP
                </Text>
              </>
            )}{" "}

          </div>

            <Button size="large" className="bg-[#4C45EE] text-[white] w-[150px] mt-[30px]">
                Submit
            </Button>
            </div>
        </div>
      </div>
    </>
  );
};
export default VerifyOTP;
