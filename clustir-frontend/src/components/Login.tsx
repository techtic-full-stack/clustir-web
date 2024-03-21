import axiosInstance from "@/interceptors/Axios";
import { apiName } from "@/interceptors/apiName";
import { Button, Input, Typography } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const { Text } = Typography;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
const initialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let checkOnBoard = JSON.parse(
        localStorage.getItem("userData") ?? ""
      )?.is_onBoard;
      if (checkOnBoard === false) {
        router.push("/onboard");
      } else {
        router.push("/dashboard");
      }
    }
  }, [router]);
  const loginSubmit = async (values: any) => {
    try {
      const login: any = await axiosInstance.post(
        apiName.login,
        JSON.stringify({ ...values })
      );
      if (login?.status_code !== 200) {
        setError(login?.message);
        setLoader(false);
        return false;
      } else {
        localStorage.setItem("token", login.token);
        localStorage.setItem("userData", JSON.stringify(login.response));
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
        }, 2000);
        if (login?.response?.is_onBoard === false) {
          router.push("/onboard");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (error: any) {
      // setError(error?.message);
      setLoader(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-[30px]">
      {submitting ? (
        <>
          <div className="bg-[#FFFFFF] h-[64vh]">
            <Text className="font-bold   top-40 text-[20px]">
              Success! Hold tight
            </Text>
          </div>
        </>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={loginSubmit}
        >
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
                      className={`h-12 px-4 py-2 rounded-md border w-full ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:border-blue-500 input`}
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
                      placeholder="Enter your password"
                      type="password"
                      name="password"
                      as={Input.Password}
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
                  {error && (
                    <p className="text-red-500 my-[20px] font-500">{error}</p>
                  )}
                  <Button
                    htmlType="submit"
                    className="w-full h-12 bg-[#4C45EE]  font-[700]  letter-spacing-normal text-[15px] text-white py-2 px-4 rounded-md"
                    disabled={isSubmitting || loader}
                    loading={loader}
                  >
                    Login
                  </Button>

                  <div className="mt-[30px] w-[400px] ">
                    <span className=" text-[#4C45EE] text-[16px] font-[500] flex justify-center items-center">
                      Forgot Password ?
                    </span>

                    <div className="text-[#000000] text-[14px] flex justify-center items-center  mt-[30px]">
                      Don’t have an account?
                      <span
                        className="text-[#000000] cursor-pointer ml-[5px] font-[500] text-[14px]"
                        onClick={() => router.push("/signup")}
                      >
                        Create One
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
};

export default Login;
