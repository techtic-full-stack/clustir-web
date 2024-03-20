import { Input } from "antd";
import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Typography } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const { Paragraph } = Typography;
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
function CreateAccount() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values: any, { setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }


  return (
    <div className=" flex justify-center items-center h-[70vh] m-[30px]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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
                    className={`h-12 px-4 py-2 rounded-md border w-full ${
                      touched.email && errors.email
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-[#FD0000]"
                  />
                </div>

                <div className="mb-[40px]">
                  <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
                    Password
                  </div>
                  <Field
                    type="password"
                    name="password"
                    className={`h-12 px-4 py-2 rounded-md border w-full ${
                      touched.password && errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:border-blue-500`}
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-[#FD0000]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-12 bg-[#4C45EE]  font-[700]  letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md"
                  disabled={isSubmitting}
                >
                  Create account
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
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateAccount;
