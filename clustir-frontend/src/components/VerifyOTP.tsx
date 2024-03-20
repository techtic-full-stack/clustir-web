import { RedoOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

const { Text } = Typography;
const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [otp, setOtp] = useState("");

  const sendOtp = () => {
    setConfirm(true);
  };

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
      <div className="flex justify-center items-center p-[50px]">
        <div className="w-[400px]">
          <div className="flex justify-center items-center font-[700] text-[25px]  text-[#000000]">
            Verify Your Account
          </div>

          <div className="flex justify-center items-center font-[400] pt-[20px] text-[16px]  text-[#000000]">
            We sent you a code to verify your account at
          </div>
          <div className="text-[#000000] font-[700] flex justify-center items-center">
            janedoe@gmail.com{" "}
            <span className="text-[#4C45EE] ml-[10px]">Edit</span>
          </div>
          <div className="flex justify-center items-center mt-[50px] verify-input ">
            <OTPInput
              value={otp}
              onChange={setOtp}
              onPaste={(e) => setOtp(e.clipboardData.getData("text"))} // Handle onPaste event
              numInputs={6}
              renderInput={(props) => <input {...props} />}
              inputStyle={"otp-input"}
            />
          </div>
          <div className="flex justify-center items-center mt-[30px] cursor-pointer ">
            {resendTimer > 0 ? (
              <Text className="text-[#000] text-[16px]">
                Resend OTP in {resendTimer} sec
              </Text>
            ) : (
              <>
                <RedoOutlined style={{ fontSize: "15px", color: "#4C45EE" }} />
                <Typography
                  className="text-[16px] ml-[10px] "
                  onClick={handleResendOTP}
                >
                  Resend OTP
                </Typography>
              </>
            )}{" "}
          </div>
          <button
            onClick={sendOtp}
            type="submit"
            className="w-full h-12 bg-[#4C45EE] mt-[55px] font-[700]  letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
export default VerifyOTP;
