import { Input } from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Typography } from "antd";

const { Paragraph } = Typography;

function CreateAccount() {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-[400px] m-[30px]">
        <div className="flex justify-center items-center font-[700] text-[25px]  text-[#000000]">
          Create an account
        </div>

        <div className="mt-[30px] ">
          <div className="mb-[20px]">
            <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
              Email
            </div>

            <Input
              placeholder="Basic usage"
              className="h-12 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
              Password
            </div>
            <Input.Password
              className="h-12 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 mb-[50px]"
              placeholder="input password"
              iconRender={(visible) =>
                visible ? (
                  <EyeTwoTone style={{ fontSize: "20px" }} />
                ) : (
                  <EyeInvisibleOutlined style={{ fontSize: "20px" }} />
                )
              }
            />
          </div>
          <button className="w-full h-12 bg-[#4C45EE]  font-[700] letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md">
            Primary Button
          </button>
          <div className="mt-[30px] w-[400px] ">
            <span className="text-[14px] font-[400] flex justify-center items-center">
              By creating an account you agree to the
            </span>
            <Paragraph className=" flex justify-center items-center">
              <span className="text-[#4C45EE] text-[14px] mr-[6px] font-[500]">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-[#4C45EE] text-[14px] ml-[6px] font-[500]">
                Privacy Policy Copy
              </span>
            </Paragraph>

            <div className="text-[14px] flex justify-center items-center  mt-[30px]">
              Have an account?{" "}
              <span className="text-[#000000] ml-[5px] font-[500] text-[14px]">
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
