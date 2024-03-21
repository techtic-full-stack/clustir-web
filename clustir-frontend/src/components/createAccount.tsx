import React, { useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Typography } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import axiosInstance from "@/interceptors/Axios";
import { apiName } from "@/interceptors/apiName";
const { Paragraph, Text } = Typography;
import Loader from "./Loader/Loader";
import { useNotification } from "./Notification";
import { createAccountSchema } from "@/utils/formik/schema";

function CreateAccount() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();
  const notificationContext = useNotification();
  const handleNotifications: any = notificationContext?.handleNotifications;
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values: any) => {
    try {
      setLoader(true);
      const register: any = await axiosInstance.post(
        apiName.signUp,
        JSON.stringify({ ...values })
      );
      if (register?.status_code !== 200) {
        handleNotifications("error", `${register?.message}`, ``, 3);
        setLoader(false);
        return false;
      } else {
        setSubmitting(true);
        setTimeout(() => {
          router.push("/verify");
          localStorage.setItem("email", values.email);
          handleNotifications("success", `${register?.message}`, ``, 3);
        }, 1000);
      }
    } catch (error: any) {
      console.log("error", error);
      setLoader(false);
      setSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className=" flex justify-center items-center p-[30px]">
      {submitting ? (
        <>
          <div className="bg-[#FFFFFF] h-[64vh]">
            <Text className="font-bold   top-40 text-[20px]">
              Success! Hold tight
            </Text>
            <Loader />
          </div>
        </>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={createAccountSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, touched, errors }) => (
            <Form>
              <div className="w-[400px] ">
                <div className="flex justify-center items-center font-[700] text-[25px]  text-[#000000]">
                  Create an account
                </div>
                <div className="mt-[30px] ">
                  <div className="mb-[20px]">
                    <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
                      Email
                    </div>
                    <Field
                      type="email"
                      name="email"
                      as={Input}
                      className={`h-12 px-4 py-2 rounded-md border w-full ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:border-blue-500`}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-[#FD0000] text-[14px] pt-[4px]"
                    />
                  </div>

                  <div className="mb-[40px]">
                    <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
                      Password
                    </div>
                    <div style={{ position: "relative" }}>
                      <Field
                        name="password"
                        as={Input.Password}
                        className={`rounded-md border w-full ${
                          touched.password && errors.password
                            ? "border-red-500"
                            : "border-gray-300"
                        }  focus:outline-none focus:border-blue-500`}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute top-4 bottom-0 right-0 pr-4 flex  focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeInvisibleOutlined />
                        ) : (
                          <EyeTwoTone />
                        )}
                      </button>
                      <ErrorMessage
                        name="password"
                        component="p"
                        className="text-[#FD0000] text-[14px] pt-[4px]"
                      />
                    </div>
                  </div>
                  <Button
                    htmlType="submit"
                    type="primary"
                    className="w-full h-12 !bg-[#4C45EE] hover:bg-[#4C45EE]  font-[700]  letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md"
                    loading={loader}
                  >
                    Create account
                  </Button>
                  <div className="mt-[30px] w-[400px] ">
                    <span className="text-[14px] font-[400] flex justify-center items-center">
                      By creating an account you agree to the
                    </span>
                    <Paragraph className=" flex justify-center items-center">
                      <span className="text-[#4C45EE] text-[14px] mr-[6px] font-[500] cursor-pointer">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-[#4C45EE] text-[14px] ml-[6px] font-[500] cursor-pointer">
                        Privacy Policy Copy
                      </span>
                    </Paragraph>

                    <div className="text-[#000000] text-[14px] flex justify-center items-center  mt-[30px]">
                      Have an business account?{" "}
                      <span
                        className="text-[#000000] ml-[5px] cursor-pointer font-[500] text-[14px]"
                        onClick={() => router.push("/login")}
                      >
                        Login
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}

export default CreateAccount;
