import { ClustirLogo } from "../assets/ClustirLogo";
import { ReactNode } from "react";

type LayoutWrapperType = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutWrapperType) => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F8F8F8]">
      <div className="flex flex-col justify-center items-center relative">
        <div className="mt-[30px] w-[600px] ">
          <div className="flex items-center justify-center">
            <ClustirLogo />
          </div>
          <div className="mt-[30px] bg-[#FFFFFF] rounded-md">{children}</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F4F4F4] py-4  text-sm h-[77px] flex items-center mt-[30px]">
        <div className="flex pl-[77px]">
          <div className="font-brother font-normal text-base leading-tight">
            ©2023 Clustir, Inc.
          </div>
          <a
            href="#"
            className="pl-[100px] text-base font-normal leading-tight text-[#4C45EE]"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="pl-[40px] text-base  font-normal leading-tight text-[#4C45EE]"
          >
            Terms of Service
          </a>

          <a
            href="#"
            className="pl-[40px] text-base  font-normal leading-tight text-[#4C45EE]"
          >
            Cookie Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
