import { Col, Row, Input, Card, Button } from "antd";
import { useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

interface FormValues {
  businessName: string | undefined;
  contactName: string;
  employerID: string;
  title: string;
  websiteURL: string;
  businessStreetAddress: string;
  aptSteBldg?: string; // optional field
  zipCode: string;
  city: string;
  state: string;
  mobile: string;
}

const initialValues = {
  businessName: "",
  contactName: "",
  employerID: "",
  title: "",
  websiteURL: "",
  businessStreetAddress: "",
  aptSteBldg: "",
  zipCode: "",
  city: "",
  state: "",
  mobile: "",
};

const validationSchema = Yup.object().shape({
  businessName: Yup.string().required("Business Name is required"),
  contactName: Yup.string().required("Contact Name is required"),
  employerID: Yup.string().required("Employee ID is required"),
  title: Yup.string().required("Title is required"),
  websiteURL: Yup.string().required("Website URL is required"),
  businessStreetAddress: Yup.string().required("Business Street Address is required"),
  aptSteBldg: Yup.string(),
  zipCode: Yup.string().required("Zip Code is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  mobile: Yup.string().required("Mobile is required"),
});
const BusinessContactInfo = ({
  OnBoardData,
  setOnBoardData,step,setStep
}: {
  OnBoardData: any;
  setOnBoardData: any;
  step: any,setStep: any;
}) => {
  const onSubmit = (values: FormValues) => {

    try {
      setStep(step + 1);
      setOnBoardData(...OnBoardData, values);
    } catch (error) { }
  };
  return (
    <>
      <h2 className="text-black mb-6 text-[25px]">Business Contact Info</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ isSubmitting, errors }) => {
          console.log('errors :>> ', errors);
          return (
            <Form>
              <Card className="flex flex-col bg-[#FFFFFF] p-[5px] rounded-lg w-[862px]">
                <div className="text-[18px]">CONTACT INFORMATION </div>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Business Name <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="businessName" name="businessName" as={Input} />
                    <ErrorMessage name="businessName" component="div" className="text-red-500" />
                  </Col>
                </Row>


                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Contact Name <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="contactName" name="contactName" as={Input} />
                    <ErrorMessage name="contactName" component="div" className="text-red-500" />

                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Employee ID # <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="employerID" name="employerID" as={Input} />
                    <ErrorMessage name="employerID" component="div" className="text-red-500" />

                  </Col>
                </Row>
                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Title <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="title" name="title" as={Input} />
                    <ErrorMessage name="title" component="div" className="text-red-500" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Website URL <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="websiteURL" name="websiteURL" as={Input} />
                    <ErrorMessage name="websiteURL" component="div" className="text-red-500" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Business Street Address{" "}
                      <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="businessStreetAddress" name="businessStreetAddress" as={Input} />
                    <ErrorMessage name="businessStreetAddress" component="div" className="text-red-500" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>Apt. ste. bldg. (optional)</div>
                    <Field type="text" size="large" id="aptSteBldg" name="aptSteBldg" as={Input} />
                    <ErrorMessage name="aptSteBldg" component="div" className="text-red-500" />
                  </Col>
                </Row>
                <Row className="my-[14]  sm:mb-5">
                  <Col span={12} className="pr-[5px] sm:mb-0">
                    <div>
                      Zip Code <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="zipCode" name="zipCode" as={Input} />
                    <ErrorMessage name="zipCode" component="div" className="text-red-500" />
                  </Col>
                  <Col span={12} className="sm:mb-0">
                    <div>
                      City <span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="city" name="city" as={Input} />
                    <ErrorMessage name="city" component="div" className="text-red-500" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      State<span className="text-[red]">*</span>
                    </div>
                    <Field type="text" size="large" id="state" name="state" as={Input} />
                    <ErrorMessage name="state" component="div" className="text-red-500" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Mobile<span className="text-[red]">*</span>
                    </div>
                    <div className="flex">
                    <Input
                      size="large"
                      style={{ width: '80px' }} // Adjust width as needed
                      value="+1"
                      disabled
                    />
                    <Field type="text" size="large" id="mobile" name="mobile" as={Input} />
                  </div>
                    <ErrorMessage name="mobile" component="div" className="text-red-500" />
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
                <Button loading={isSubmitting} type="primary" htmlType="submit" className="bg-[#4C45EE] text-white w-[100px] h-[40px]">
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

export default BusinessContactInfo;
