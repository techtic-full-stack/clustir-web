import Login from "@/components/Login";
import { Inter } from "next/font/google";
import AuthLayout from "../components/auth/AuthLayout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </>
  );
}
