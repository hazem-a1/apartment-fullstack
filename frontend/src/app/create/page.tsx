"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Apartment } from '@/types/apartment';
import { useRouter } from 'next/navigation';

const requiredMessage = {required_error: "this is a required field"}

const formSchema = z.object({
    title: z.string(requiredMessage).min(2).max(100),
    address: z.string(requiredMessage).min(2).max(100),
    description: z.string(requiredMessage).min(2).max(200),
    phone: z.string(requiredMessage).min(2).max(20),
    currency: z.enum(["EGP", "USD"]).default("EGP"),
    price: z.coerce.number(requiredMessage).int(),
    square: z.coerce.number(requiredMessage).int(),
    squareMeasure: z.enum(["m", "ft"]).default("m"),
    bedRooms: z.coerce.number(requiredMessage).int(),
    bathrooms: z.coerce.number(requiredMessage).int(),
})
export default function CreateApartmentPage() {
    const router = useRouter();
    
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        currency: "EGP",
        squareMeasure: "m"
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/apartments`, {      cache: "no-store", 
        headers: { "Content-Type": "application/json", },
        method: "POST",
        body: JSON.stringify(values),
        });
    const jsonResponse = await res.json() as Apartment
    router.push(`/${jsonResponse._id}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apartment Title</FormLabel>
              <FormControl>
                <Input placeholder="West Cost apartment" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                    <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Input placeholder="description" {...field} />
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                    <Input placeholder="01000000000" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                    <Input placeholder="1000" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Currency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
              <SelectTrigger>
                    <SelectValue placeholder="Select a preferred currency" />
                  </SelectTrigger>
              </FormControl>
              <SelectContent>
                  <SelectItem value="EGP">EGP</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="square"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Square</FormLabel>
                <FormControl>
                    <Input placeholder="100" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="squareMeasure"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Square Measure</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
              <SelectTrigger>
                    <SelectValue placeholder="Select a preferred square measure" />
                  </SelectTrigger>
              </FormControl>
              <SelectContent>
                  <SelectItem value="m">meter</SelectItem>
                  <SelectItem value="ft">feet</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bedRooms"
          render={({ field }) => (
            <FormItem>
                <FormLabel>Bed Rooms</FormLabel>
                <FormControl>
                    <Input placeholder="2" {...field} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
        />

        <FormField
          control={form.control}
            name="bathrooms"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Bathrooms</FormLabel>
                    <FormControl>
                        <Input placeholder='1' {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}