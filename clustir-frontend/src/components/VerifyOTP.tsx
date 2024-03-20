import { RedoOutlined } from "@ant-design/icons"
import { useState } from "react"
import OTPInput from "react-otp-input"

const VerifyOTP = () => {

    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    return (<>
        <div className="flex justify-center items-center h-[70vh] m-[30px]">
            <div className="w-[400px]">
                <div className="flex justify-center items-center font-[700] text-[18px]  text-[#000000]">
                    Verify Your Account
                </div>

                <div className="flex justify-center items-center font-[500] text-[16px]  text-[#000000]">
                    We sent you a code to verify your account at {email} Edit
                </div>
                <div className="flex justify-center items-center mt-[80px]">
                    <OTPInput
                        value={otp}
                        onChange={setOtp}
                        onPaste={(e) => setOtp(e.clipboardData.getData("text"))} // Handle onPaste event
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        // containerStyle={"otp-container"}
                        renderInput={(props) => <input   {...props} />}
                        inputStyle={"otp-input"}
                    />
                </div>
                <div className="flex justify-center items-center">
                <RedoOutlined style={{ fontSize: "15px", color: "#000" }} />
            </div>
            </div>

        </div>
    </>)
}
export default VerifyOTP