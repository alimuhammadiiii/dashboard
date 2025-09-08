"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { LoaderCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { loginFormOptions, loginFormSchema } from "./shared-code";
import loginAction from "./action";

async function mockLoginApi() {
  await new Promise((res) => setTimeout(res, 1000));

  return {
    name: "علی محمدی",
    email: "alimuhammadi@gmail.com",
    image: "/icons/user.jpg",
  };
}

export default function Login() {
  const router = useRouter();

  const loginForm = useForm({
    ...loginFormOptions,
    validators: {
      onChange: loginFormSchema,
    },
    onSubmit: async ({ value }) => {
      const user = await mockLoginApi();

      // save mockLoginApi to localStorage
      localStorage.setItem("user", JSON.stringify(user));

      console.log(value);
      router.push("/dashboard");
    },
  });

  return (
    <div
      className="min-h-screen w-full flex flex-col  items-center justify-end xs:justify-center xs:p-4 font-sans"
      style={{ background: "hsl(0 0% 100%)" }}
    >
      <div className="w-full max-w-md mx-auto">
        <Card className="max-sm:rounded-none max-sm:border-0 py-6 max-sm:shadow-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl xs:text-3xl font-bold text-slate-800 py-4">
              ورود یا ثبت نام
            </CardTitle>
            <CardDescription className="text-center">
              برای شروع شماره تلفن خود را وارد کنید.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              action={loginAction as never}
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                loginForm.handleSubmit();
              }}
            >
              <div>
                <loginForm.Field name="phoneNumber">
                  {(field) => {
                    return (
                      <div className="flex flex-col gap-3">
                        <Label htmlFor={field.name}>شماره تلفن</Label>
                        <Input
                          id={field.name}
                          type="tel"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                        <div className="w-full h-7">
                          {!field.state.meta.isValid && (
                            <p role="alert">
                              {field.state.meta.errors
                                .map((err) => err?.message)
                                .join(",")}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  }}
                </loginForm.Field>
              </div>
              <loginForm.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
              >
                {([canSubmit, isSubmitting]) => (
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={!canSubmit}
                  >
                    {isSubmitting ? <LoaderCircleIcon /> : "ورود"}
                  </Button>
                )}
              </loginForm.Subscribe>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
