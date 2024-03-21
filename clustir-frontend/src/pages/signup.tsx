import Image from "next/image";
import { Inter } from "next/font/google";
import AuthLayout from "../components/auth/AuthLayout";
import CreateAccount from "@/components/createAccount";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AuthLayout>
        <CreateAccount />
      </AuthLayout>
    </>
  );
}
