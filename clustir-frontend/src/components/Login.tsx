import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Input } from "antd";
import { Typography } from "antd";

const { Paragraph, Text } = Typography;

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
});
const initialValues = {
    email: "",
    password: "",
};
const  Login=()=> {
    const [submitting, setSubmitting] = useState(true);
    const loginSubmit = (values: any) => {
        setSubmitting(true)
        setTimeout(() => {

            setSubmitting(false);
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center h-[70vh] m-[30px]">
         {submitting?
         <>
         <Text className="font-bold absolute top-40">Success! Hold tight</Text>
         </>
         :   <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={loginSubmit}>
                {({ isSubmitting, touched, errors }) => (
                    <Form>
                        <div className="w-[400px]">
                            <div className="flex justify-center items-center font-[700] text-[25px]  text-[#000000]">
                                Business Login
                            </div>
                            <div className="mt-[30px] ">
                                <div className="mb-[20px]">
                                    <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
                                        Email
                                    </div>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="yourname@company.com"
                                        as={Input}
                                        className={`h-12 px-4 py-2 rounded-md border w-full ${touched.email && errors.email ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none focus:border-blue-500`}
                                    />
                                    <ErrorMessage name="email" component="p" className="text-[#FD0000]" />
                                </div>

                                <div className="mb-[40px]">
                                    <div className="font-[700] text-[18px] font-brother text-[#000000] mb-[7px]">
                                        Password
                                    </div>
                                    <Field
                                        placeholder="Enter your password"
                                        type="password"
                                        name="password"
                                        as={Input.Password}
                                        className={`h-12 px-4 py-2 rounded-md border w-full ${touched.password && errors.password ? "border-red-500" : "border-gray-300"
                                            } focus:outline-none focus:border-blue-500`}
                                    />
                                    <ErrorMessage name="password" component="p" className="text-[#FD0000]" />
                                </div>

                                <Button

                                    htmlType="submit"
                                    className="w-full h-12 bg-[#4C45EE]  font-[700]  letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md"
                                    disabled={isSubmitting}
                                >
                                    Login
                                </Button>

                                <div className="mt-[30px] w-[400px] ">
                                    <span className=" text-[#4C45EE] text-[16px] font-[500] flex justify-center items-center">
                                        Forgot Password ?
                                    </span>

                                    <div className="text-[#000000] text-[14px] flex justify-center items-center  mt-[30px]">
                                        Don’t have an account?
                                        <span className="text-[#000000] cursor-pointer ml-[5px] font-[500] text-[14px]">
                                            Create One
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>}
        </div>
    );
}

export default Login;
