import { createClient } from "@/lib/supabase/client";

export const signOut = async () => {
    const { error } = await createClient().auth.signOut();

    if (error) {
        console.error("Error signing out", error);
        return error;
    }
}