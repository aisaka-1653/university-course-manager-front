import { loginFormSchema, LoginFormSchema } from "@/schema/loginFormSchema";
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
import { useAuth } from "@/hooks/useAuth";
import { LuLoader2 } from "react-icons/lu";
import { CardWrapper } from "../molecules/CardWrapper";

export const LoginForm = () => {
  const { login, isLoading } = useAuth();

  const form = useForm<LoginFormSchema>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (user: LoginFormSchema) => {
    login(user);
    form.reset();
  };

  return (
    <CardWrapper
      title="ログイン"
      description="Eメールとパスワードを入力してください"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Eメール</FormLabel>
                <FormControl>
                  <Input placeholder="university@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button
            type="submit"
            disabled={!form.formState.isValid || isLoading}
            className="w-full"
          >
            {isLoading ? (
              <>
                <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
                <span>Please Wait</span>
              </>
            ) : (
              "ログイン"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
