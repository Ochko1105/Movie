"use client";

import { IoIosSearch } from "react-icons/io";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  input: z.string().min(2).max(30),
});

const SearchInput = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    router.push(`/Search/${values.input}`);
    form.reset();
  };
  return (
    <div className="flex items-center gap-2 h-[36px] w-[355px] border rounded-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center">
                    {" "}
                    <IoIosSearch className="ml-2" />
                    <Input
                      type="search"
                      placeholder="Search ..."
                      {...field}
                      className="w-[379px] h-[36px] border-0"
                    />
                    <Popover>
                      <PopoverTrigger>Open</PopoverTrigger>
                      <PopoverContent>
                        Place content for the popover here.
                      </PopoverContent>
                    </Popover>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default SearchInput;
