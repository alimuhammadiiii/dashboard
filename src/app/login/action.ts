"use server";

import {
  ServerValidateError,
  createServerValidate,
} from "@tanstack/react-form/nextjs";
import { loginFormOptions, loginFormSchema } from "./shared-code";

const serverValidate = createServerValidate({
  ...loginFormOptions,
  onServerValidate: loginFormSchema,
});

export default async function loginAction(_prev: unknown, formData: FormData) {
  try {
    await serverValidate(formData);
    await new Promise((res) => setTimeout(res, 500));

    return {
      name: "علی محمدی",
      email: "alimuhammadi@gmail.com",
      image: "/icons/user.jpg",
    };
  } catch (e) {
    if (e instanceof ServerValidateError) {
      return e.formState;
    }
    throw e;
  }
}
