"use client"
import { signOut } from "@/utils/signOut";
import { Button } from "./ui/button";
import { useGlobalContext } from "@/context/GlobalProvider";
import { SheetTrigger } from "./ui/sheet";

const Navbar = () => {
    const { openSidebar, setOpenSidebar } = useGlobalContext();

  return (
    <div
        className={`bg-gray-950 px-14 py-6 transition-all duration-300
            ${openSidebar ? 'ml-48' : 'ml-0'}
        `}
    >
        <div
            className="flex items-center justify-between"
        >
            <div
                className="flex items-center gap-4"
            >
                <button
                    onClick={() => setOpenSidebar(!openSidebar)}
                >
                    {
                        !openSidebar ?
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                    />
                            </svg> 
                        :
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    }
                </button>
                <h1
                    className="text-white text-2xl font-bold"
                >
                    Soso
                </h1>
            </div>
            <div
                className="flex items-center gap-4"
            >
                <a
                    href="#"
                    className="text-white"
                >
                    Home
                </a>
                <a
                    href="#"
                    className="text-white"
                >
                    About
                </a>
                <a
                    href="#"
                    className="text-white"
                >
                    Contact
                </a>
            </div>
            <div>
                <Button
                    variant={'destructive'}
                    onClick={signOut}
                >
                    Sign Out
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;