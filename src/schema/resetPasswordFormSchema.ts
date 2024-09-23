import { z } from "zod";

export const resetPasswordFormSchema = z.object({
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
  password_confirmation: z
    .string()
    .min(6, "パスワードは6文字以上で入力してください"),
});

export type ResetPasswordFormSchema = z.infer<typeof resetPasswordFormSchema>;
