import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  resetPasswordFormSchema,
  ResetPasswordFormSchema,
} from "@/schema/resetPasswordFormSchema";
import { resetPassword } from "@/apis/auth";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";

export const ResetPasswordForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const form = useForm<ResetPasswordFormSchema>({
    mode: "onChange",
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const setHeader = (query: URLSearchParams) => {
    return {
      headers: {
        "Content-Type": "application/json",
        "access-token": query.get("access-token"),
        client: query.get("client"),
        uid: query.get("uid"),
      },
    };
  };

  const handleSubmit = async (data: ResetPasswordFormSchema) => {
    const query = new URLSearchParams(location.search);
    const resetPasswordToken = query.get("token");
    if (!resetPasswordToken) return;

    const resetPasswordData = {
      ...data,
      reset_password_token: resetPasswordToken,
    };

    const res = await resetPassword(resetPasswordData, setHeader(query));
    if (res.status !== 200) return;

    toast.success("パスワードを更新しました");
    navigate("/users/login");
  };

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">パスワードの設定</CardTitle>
        <CardDescription>
          新しく設定するパスワードを入力してください
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>パスワード</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>確認用パスワード</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={!form.formState.isValid}
              className="w-full"
            >
              送信
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
