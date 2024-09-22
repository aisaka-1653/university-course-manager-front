import { z } from "zod";

export const forgotPasswordFormSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
});

export type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>;
