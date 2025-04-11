"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "../textarea";

const formSchema = z.object({
  name: z.string().min(1, "Namn krävs"),
  mail: z.string().email("Ogiltig e-post"),
  phone: z.string().min(1, "Telefon krävs"),
  message: z.string().min(1, "Meddelande krävs"),
  type: z.enum(["privat", "foretag", "brf"], {
    required_error: "Välj typ",
  }),
});

export function ContactForm({ settings }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mail: "",
      phone: "",
      message: "",
      type: "privat",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        form.reset();
        toast("Tack för ditt meddelande, vi återkommer snarast!");
      }
    } catch (error) {
      console.error("Error sending message.", error);
      toast("Tyvärr gick något snett!");
    }
  }

  return (
    <div className="container-section mx-auto">
      <Toaster closeButton={true} />
      <h3 className="tracking-[6px] text-center uppercase font-light mt-20 text-[20px]">
        {settings?.content?.form_title || "Kontakta oss"}
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 my-14 mx-auto lg:max-w-[45%]"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Namn</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-post</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col gap-2 py-10">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="privat"
                        checked={field.value === "privat"}
                        onChange={field.onChange}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">Privat</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="foretag"
                        checked={field.value === "foretag"}
                        onChange={field.onChange}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">Företag</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="brf"
                        checked={field.value === "brf"}
                        onChange={field.onChange}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">BRF</span>
                    </label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meddelande</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-[40%] lg:w-[20%] mx-auto">
            Skicka
          </Button>
        </form>
      </Form>
    </div>
  );
}
