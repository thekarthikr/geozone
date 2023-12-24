"use client";

import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { ContactFormSchema } from "@/lib/scheme";
import { sendEmail } from "@/app/_actions";
import { toast } from "sonner";
import { Loader2 } from "lucide-react"
import { Button } from "../../ui/button";
import {Label} from '../../ui/label'
import { Input } from "../../ui/input";


export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      toast.success("Your message has been sent!");
      reset();
      return;
    }

    toast.error("Something went wrong!");
  };

  return (
    <form onSubmit={handleSubmit(processForm)} className="mt-12">
      <div className="-mx-2 md:items-center md:flex">
        <div className="flex-1 px-2">
          <Label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Full Name
          </Label>
          <Input
            type="text"
            placeholder="Your name"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-background dark:border-opacity-40 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("name")}
          />
          {errors.name?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="flex-1 px-2 mt-4 md:mt-0">
          <Label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Email address
          </Label>
          <Input
            type="email"
            placeholder="name@example.com"
            className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-background dark:border-opacity-40 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            {...register("email")}
          />
          {errors.email?.message && (
            <p className="ml-1 mt-1 text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="w-full mt-4">
        <Label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
          Message
        </Label>
        <textarea
          className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-background dark:border-opacity-40 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Message"
          {...register("message")}
        ></textarea>
        {errors.message?.message && (
          <p className="ml-1 mt-1 text-sm text-red-400">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button 
     
        disabled={isSubmitting}
        className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide  "
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2 text-center">
            Submitting    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
          </span>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
