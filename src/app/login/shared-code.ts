import { formOptions } from "@tanstack/react-form";
import z from "zod";

export const loginFormOptions = formOptions({
  defaultValues: {
    phoneNumber: "",
  },
});

export const loginFormSchema = z.object({
  phoneNumber: z
    .string()
    .regex(/^(09\d{9}|\+989\d{9}|00989\d{9})$/, "شماره تلفن نامعتبر است"),
});
