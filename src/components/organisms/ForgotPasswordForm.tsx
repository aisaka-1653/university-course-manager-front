import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  forgotPasswordFormSchema,
  ForgotPasswordFormSchema,
} from "@/schema/forgotPasswordFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { requestPasswordReset } from "@/apis/auth";

export const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordFormSchema>({
    mode: "onChange",
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleSubmit = (data: ForgotPasswordFormSchema) => {
    requestPasswordReset(data);
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="bare">
          パスワードを忘れましたか?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>アカウントを探す</DialogTitle>
          <DialogDescription>
            パスワードを変更するにはアカウントに登録されたメールアドレスを入力してください｡
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex items-center space-x-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="grid flex-1 gap-2">
                  <FormControl>
                    <Input placeholder="university@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit" size="sm" className="px-3">
                <Send className="h-4 w-4" />
              </Button>
            </DialogClose>
          </form>
        </Form>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
