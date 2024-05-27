
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/server";
import CategoriesSection from "@/sections/home/CategoriesSection";
import { signOut } from "@/utils/signOut";

const HomePage = async () => {
  const supabase = createClient();
  const { data } = await supabase.from('categories').select();

  return (
    <div
      className="text-white bg-gray-800 shadow-lg flex items-center pt-12 h-full flex-col"
    >
      <CategoriesSection 
        categories={data}
      />
    </div>
  )
}

export default HomePage;