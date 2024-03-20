import { Col, Row, Input, Card, Button, Form } from "antd";
import { useState } from "react";
import { Formik, } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

interface FormValues {
  businessName: string;
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

const validationSchema = Yup.object({
  businessName: Yup.string().required("Required"),
  contactName: Yup.string().required("Required"),
  employerID: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  websiteURL: Yup.string().required("Required"),
  businessStreetAddress: Yup.string().required("Required"),
  aptSteBldg: Yup.string(),
  zipCode: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  mobile: Yup.string().required("Required"),
});
const BusinessContactInfo = ({
  OnBoardData,
  setOnBoardData,
}: {
  OnBoardData: any;
  setOnBoardData: any;
}) => {
  const onSubmit = (values: FormValues) => {

    try {
      console.log("values :>> ", values);
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
        {({ isSubmitting,errors }) => {
          console.log('errors :>> ',isSubmitting, errors);
          return (
            <Form>
              <Card className="flex flex-col bg-[#FFFFFF] p-[5px] rounded-lg w-[862px]">
                <div className="text-[18px]">CONTACT INFORMATION </div>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Business Name <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="businessName" name="businessName" />
                    <ErrorMessage name="businessName">
                      {(msg) => <div className="text-red-500">{msg}</div>}
                    </ErrorMessage>
                  </Col>
                </Row>


                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Contact Name <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="contactName" name="contactName" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Employee ID # <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="employerID" name="employerIDs" />
                  </Col>
                </Row>
                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Title <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="title" name="title" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Website URL <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="websiteURL" name="websiteURL" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      Business Street Address{" "}
                      <span className="text-[red]">*</span>
                    </div>
                    <Input
                      size="large"
                      id="businessStreetAddress"
                      name="businessStreetAddress"
                    />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>Apt. ste. bldg. (optional)</div>
                    <Input name="aptSteBldg" id="aptSteBldg" size="large" />
                  </Col>
                </Row>
                <Row className="my-[14]  sm:mb-5">
                  <Col span={12} className="pr-[5px] sm:mb-0">
                    <div>
                      Zip Code <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="zipCode" name="zipCode" />
                  </Col>
                  <Col span={12} className="sm:mb-0">
                    <div>
                      City <span className="text-[red]">*</span>
                    </div>
                    <Input size="large" name="city" id="city" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      State<span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="state" name="state" />
                  </Col>
                </Row>

                <Row className="my-[14] sm:mb-5">
                  <Col span={24} className="mb-5 sm:mb-0">
                    <div>
                      State<span className="text-[red]">*</span>
                    </div>
                    <Input size="large" id="state" name="state" />
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

export default BusinessContactInfo;
