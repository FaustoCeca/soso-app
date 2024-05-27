import { createClient } from "@/lib/supabase/client"

export const signUpUser = async (email: string, username: string, password: string) => {
    const { data, error } = await createClient().auth.signUp({
        email,
        password,
        options: {
            data: { username }
        }
    });

    if (error) {
        console.error(error);
        return error;
    }

    return data;
} 