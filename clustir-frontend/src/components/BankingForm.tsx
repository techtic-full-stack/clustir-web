import { Col, Row, Input, Card, Button } from "antd";
import { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

interface FormValues {
  bankName: string | undefined;
  routing: string;
  ein: string;
}

const initialValues = {
  bankName: "",
  routing: "",
  ein: "",
};

const validationSchema = Yup.object().shape({
  bankName: Yup.string().required("Banking account is required"),
  routing: Yup.string().required("Routing is required"),
  ein: Yup.string().required("EIN is required"),
});
const BankingForm = ({
    OnBoardData,
    setOnBoardData,step,setStep
  }: {
    OnBoardData: any;
    setOnBoardData: any;
    step: any,setStep: any;
  }) => {
  const onSubmit = (values: FormValues) => {
    try {
      setOnBoardData(...OnBoardData, values);
    } catch (error) {}
  };
  return (
    <>
      <h2 className="text-black mb-6 text-[25px]">Banking</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ isSubmitting, errors }) => {
          console.log("errors :>> ", errors);
          return (
            <Form>
              <Card className="flex flex-col bg-[#FFFFFF] p-[5px] rounded-lg w-[862px]">
                <div className="text-[18px]">Banking Info</div>
                <div className="text-[12px] ">
                  The banking information provided is used for Clustir Payouts
                  to make monthly subscription revenue ACH deposits into your
                  business bank account.. Clustir Payouts are made on 15th and
                  30th of every month via ACH to your selected business bank
                  account. We will send you a notification once an ACH has been
                  confirmed
                </div>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Bank Name <span className="text-[red]">*</span>
                    </div>
                    <Field
                      type="text"
                      size="large"
                      id="bankName"
                      name="bankName"
                      as={Input}
                    />
                    <ErrorMessage
                      name="bankName"
                      component="div"
                      className="text-red-500"
                    />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Routing #<span className="text-[red]">*</span>
                    </div>
                    <Field
                      type="text"
                      size="large"
                      id="routing"
                      name="routing"
                      as={Input}
                    />
                    <ErrorMessage
                      name="routing"
                      component="div"
                      className="text-red-500"
                    />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      EIN # <span className="text-[red]">*</span>
                    </div>
                    <Field
                      type="text"
                      size="large"
                      id="ein"
                      name="ein"
                      as={Input}
                    />
                    <ErrorMessage
                      name="ein"
                      component="div"
                      className="text-red-500"
                    />
                  </Col>
                </Row>
                
              </Card>
              <div className="flex justify-end py-[20px]">
                <Button
                  type="default"
                  className="text-[#4C45EE]  border-[#4C45EE] mr-[10px] w-[100px] h-[40px]"
                >
                  Go back
                </Button>
                <Button
                  loading={isSubmitting}
                  type="primary"
                  htmlType="submit"
                  className="bg-[#4C45EE] text-white w-[100px] h-[40px]"
                >
                  Next
                </Button>
              </div>{" "}
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default BankingForm;
