"use client"

import { useGlobalContext } from "@/context/GlobalProvider";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const ValidateRoutes = (
    { children }: { children: React.ReactNode }
) => {
    const { isLogged } = useGlobalContext();
    const router = useRouter();
    const pathname = usePathname();

    const publicsRoutes = ["/", "/login", "/sign-up"];
    const protectedRoutes = ["/home"];

    if (!isLogged && protectedRoutes.includes(pathname)) {
        router.push("/");
    }

    if (isLogged && publicsRoutes.includes(pathname)) {
        router.push("/home");
    }
    return (
    <>
        {children}
    </>
  )
}

export default ValidateRoutes;