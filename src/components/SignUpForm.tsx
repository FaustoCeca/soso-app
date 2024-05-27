"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signUpUser } from "@/utils/signUpUser";

const formSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

const SignUpForm = () => {
  const [watchPassword, setWatchPassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  });

  const handleWatchPassword = () => {
    setWatchPassword(!watchPassword);
  }

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match"
      });
      return;
    }

    const newUser = await signUpUser(values.email, values.username, values.password);

    if (newUser instanceof Error) {
      console
        .error("Error signing up user", newUser);
      return;
    }

    console.log("User signed up", newUser);

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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div
          className="flex justify-center gap-4 w-full"
        >
          <div
            className="flex flex-col w-full"
          >
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
          </div>
          <div
            className="flex flex-col w-full"
          >
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input placeholder="confirm password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button className="mt-4" type="submit">Submit</Button>
      </form>
  </FormProvider>
  )
}

export default SignUpForm;