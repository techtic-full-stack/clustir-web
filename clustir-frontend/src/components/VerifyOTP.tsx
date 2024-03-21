import { RedoOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import VerifySuccessModal from "./VerifyModal";
import axiosInstance from "@/interceptors/Axios";
import { apiName } from "@/interceptors/apiName";
import { useNotification } from "./Notification";
import maskedEmail from "../../helper/MaskedEmail";

const { Text } = Typography;
const VerifyOTP = () => {
  const [email, setEmail] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const [otp, setOtp] = useState("");
  const [verifySuccess, setVerifySuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const notificationContext = useNotification();
  const handleNotifications: any = notificationContext?.handleNotifications;

  useEffect(() => {
    const storedEmail = localStorage?.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const sendOtp = async () => {
    try {
      setLoader(true);
      const verifyOtp: any = await axiosInstance.patch(
        apiName.verifyUser,
        JSON.stringify({ email, otp })
      );
      if (verifyOtp?.status_code !== 200) {
        handleNotifications("error", `${verifyOtp?.message}`, ``, 3);
        setLoader(false);
        return false;
      } else {
        handleNotifications("success", `${verifyOtp?.message}`, ``, 3);
        setLoader(false);
        setVerifySuccess(true);
      }
    } catch (error: any) {
      console.log("error", error);
      setLoader(false);
    }
  };

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

  const handleResendOTP = async () => {
    try {
      const sendOTP: any = await axiosInstance.patch(
        apiName.resendOTP,
        JSON.stringify({ email: email })
      );
      if (sendOTP?.status_code == 200) {
        handleNotifications(
          "success",
          `${maskedEmail(email)} ${sendOTP?.message}`,
          ``,
          3
        );
        setOtp("");
      } else {
        handleNotifications("error", sendOTP.message, ``, 3);
      }
      setResendTimer(15);
    } catch (error: any) {
      console.log("error", error);
      handleNotifications("error", `${error?.message}`, ``, 3);
    }
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
            {email}
            <span className="text-[#4C45EE] ml-[10px] cursor-pointer">
              Edit
            </span>
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
                  Resend code
                </Typography>
              </>
            )}{" "}
          </div>
          <Button
            onClick={sendOtp}
            htmlType="submit"
            type="primary"
            className="w-full h-12 !bg-[#4C45EE] hover:bg-[#4C45EE] mt-[55px]  font-[700]  letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md"
            loading={loader}
          >
            Submit
          </Button>
        </div>
      </div>
      <VerifySuccessModal
        onClose={() => setVerifySuccess(!verifySuccess)}
        visible={verifySuccess}
        key={1}
        redirect={"/login"}
      />
    </>
  );
};
export default VerifyOTP;
