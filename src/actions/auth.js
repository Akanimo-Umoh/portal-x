"use server";

import { RegisterFormSchema } from "@/lib/rules";

export async function register(state, formData) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  const validatedFields = RegisterFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      email: formData.get("email"),
    };
  }

  console.log(validatedFields);
  // const email = formData.get("email");
  // const password = formData.get("password");
  // const confirmPassword = formData.get("confirmPassword");

  // console.log(email);
  // console.log(password);
  // console.log(confirmPassword);
}
