"use client"

import CatTitle from "@/components/CatTitle";
import { useGlobalContext } from "@/context/GlobalProvider";
import { createClient } from "@/lib/supabase/client";
import { Category } from "@/types/types";

interface CategoriesSectionProps {
    categories: Category[] | null;
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
    console.log(categories);
    const { openSidebar } = useGlobalContext();
    return (
    <div
        className={`flex w-full overflow-hidden flex-col items-start px-24 transition duration-300
            ${openSidebar ? 
                'ml-48' :
                'ml-0'
            }
        `}
    >
        {
            categories?.length === 0 ? (
                <p
                    className="text-white"
                >
                    No categories found
                </p>
            ) : (
                categories?.map((category) => (
                    <CatTitle
                        key={category.id}
                        title={category.title}
                    />
                ))
            )
        }
    </div>
  )
}

export default CategoriesSection;