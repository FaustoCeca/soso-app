import { createClient } from "@/lib/supabase/client";

export const signInUser = async (email: string, password: string) => {
    const { data, error } = await createClient().auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        console.error(error);
        return error;
    }

    return data;
}