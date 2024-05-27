"use client"

import { useGlobalContext } from "@/context/GlobalProvider";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

const Sidebar = () => {
    const { openSidebar } = useGlobalContext();
    return (
    <div
        className={`w-48 bg-gray-950 px-14 py-6 h-screen fixed top-0 
            transition-all duration-300
            ${openSidebar ? 'left-0' : '-left-48'}
        `}
    >
        <div
            className="flex items-center justify-center text-white text-2xl font-bold"
        >
            Sidebar
        </div>
    </div>
  )
}

export default Sidebar;