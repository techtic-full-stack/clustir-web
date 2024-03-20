  import Image from "next/image";
  import { ClustirLogo } from "./assets/ClustirLogo";
  import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
  const lock = require("./assets/lock.png");
  type LayoutWrapperType = {
    children?: ReactNode;
  };
  const Layout = ({ children }: LayoutWrapperType) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      }
    }, [router]);
    return (
      <div className="min-h-screen flex flex-col">
        <div className="bg-[#FFFFFF]">
          <div className="flex justify-between px-[106px] py-[20px]">
            <div className="flex">
              <ClustirLogo />
              <div className="pl-[60px] flex justify-center items-center ">
                <Image src={lock} alt={"Lock"} width={15} height={15} />
                <h2 className="text-[#00000080]">Secure Checkout</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Child */}

        <div className="flex justify-center items-center flex-grow bg-[#F8F8F8] ">
          {children}
        </div>

        {/* Footer */}
      </div>
    );
  };
  export default Layout;
