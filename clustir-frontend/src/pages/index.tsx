import { useRouter } from "next/router";
import { use, useEffect } from "react";

export default function Home() {
 const router =useRouter();
  useEffect(() => {
  router.push('/login')
 },[])
  return (
    <>
      
    </>
  );
}
