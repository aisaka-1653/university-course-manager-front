import { z } from "zod"

export const loginFormSchema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
})

export type LoginFormSchema = z.infer<typeof loginFormSchema>
