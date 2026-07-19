"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { transportSchema } from "@/lib/schemas";
import { submitTransport } from "@/lib/actions/enquiries";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function TransportForm() {
  const [status, setStatus] = useState<{ success?: string; error?: string }>({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(transportSchema),
    defaultValues: { fullName: "", organisation: "", phone: "", email: "", journeyType: "", pickup: "", destination: "", travelDate: "", passengers: 1, message: "", website: "" },
  });

  const onSubmit = async (data: unknown) => {
    const result = await submitTransport(data);
    if (result.error) {
      setStatus({ error: result.error });
      return;
    }
    setStatus({ success: "Your transport enquiry has been received. We will contact you to confirm availability and details." });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status.success && (
        <div className="rounded-sm border border-gold/30 bg-gold/10 p-4 text-charcoal">
          {status.success}
        </div>
      )}
      {status.error && (
        <div className="rounded-sm border border-burgundy/20 bg-burgundy/5 p-4 text-burgundy">
          {status.error}
        </div>
      )}

      <input type="text" {...register("website")} className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" {...register("fullName")} />
          {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
        </div>
        <div>
          <Label htmlFor="organisation">Organisation (optional)</Label>
          <Input id="organisation" {...register("organisation")} />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" {...register("phone")} placeholder="0773 870 090" />
          {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="journeyType">Type of journey</Label>
        <Select id="journeyType" {...register("journeyType")}>
          <option value="">Select journey type</option>
          <option value="Learner transport">Daily learner transport</option>
          <option value="Educational trip">Educational trip</option>
          <option value="Bus hire">General bus hire</option>
        </Select>
        {errors.journeyType && <p className="mt-1 text-xs text-red-600">{errors.journeyType.message}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="pickup">Pickup location</Label>
          <Input id="pickup" {...register("pickup")} />
          {errors.pickup && <p className="mt-1 text-xs text-red-600">{errors.pickup.message}</p>}
        </div>
        <div>
          <Label htmlFor="destination">Destination</Label>
          <Input id="destination" {...register("destination")} />
          {errors.destination && <p className="mt-1 text-xs text-red-600">{errors.destination.message}</p>}
        </div>
        <div>
          <Label htmlFor="travelDate">Travel date</Label>
          <Input id="travelDate" type="date" {...register("travelDate")} />
          {errors.travelDate && <p className="mt-1 text-xs text-red-600">{errors.travelDate.message}</p>}
        </div>
        <div>
          <Label htmlFor="passengers">Number of passengers</Label>
          <Input id="passengers" type="number" min={1} {...register("passengers")} />
          {errors.passengers && <p className="mt-1 text-xs text-red-600">{errors.passengers.message}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" {...register("message")} rows={4} />
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit enquiry"}
      </Button>
    </form>
  );
}
