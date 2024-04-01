"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@client/components/ui/form";
import { Button } from "@client/components/ui/button";
import { Input } from "@client/components/ui/input";
import { Backend_URL } from "@client/lib/constants";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "이름은 최소 2글자 이상이어야 합니다.",
  }),
  email: z.string().email({
    message: "이메일 형식이 올바르지 않습니다.",
  }),
  password: z.string().min(8, {
    message: "비밀번호는 최소 8글자 이상이어야 합니다.",
  }),
});

function SignUpForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      alert(res.statusText);
      return;
    }

    const response = await res.json();
    alert("회원가입이 완료되었습니다.");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="wontory" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input placeholder="devwontory@gmail.com" {...field} />
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
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="비밀번호" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">회원가입</Button>
      </form>
    </Form>
  );
}

export { SignUpForm };
