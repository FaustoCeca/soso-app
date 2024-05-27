"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { signInUser } from "@/utils/signInUser";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const SignInForm = () => {
  const [watchPassword, setWatchPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const handleWatchPassword = () => {
    setWatchPassword(!watchPassword);
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const loggedUser = await signInUser(values.email, values.password);

    if (loggedUser instanceof Error) {
      console
        .error("Error signing up user", loggedUser);
      return;
    }
    
    router.push("/home");

    form.reset();
  }

  return (
    <FormProvider {...form}>
      <form 
        onSubmit={form.handleSubmit(handleSubmit)} 
        className="flex flex-col gap-4 p-5 w-1/2 border border-gray-300 rounded-lg shadow-lg"
      >
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem
                  className="relative"
                >
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="password" 
                      type={watchPassword ? "text" : "password"}
                      {...field} 
                    />
                  </FormControl>
                    <button
                      className="absolute right-2 z-20 top-8 text-sm text-gray-500"
                      type="button"
                      onClick={handleWatchPassword}
                    >
                      {watchPassword ? "Hide" : "Show"}
                    </button>
                  <FormMessage />
                </FormItem>
              )}
            />
        <Button className="mt-4" type="submit">Submit</Button>
      </form>
  </FormProvider>
  )
}

export default SignInForm;