"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { admissionSchema } from "@/lib/schemas";
import { submitAdmission } from "@/lib/actions/enquiries";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

export function AdmissionForm() {
  const [status, setStatus] = useState<{
    success?: string;
    error?: string;
  }>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      learnerName: "",
      dateOfBirth: "",
      gender: "",
      gradeApplying: "",
      curriculum: "",
      dayOrBoarding: "",
      previousSchool: "",
      intakeTerm: "",
      parentName: "",
      relationship: "",
      phone: "",
      altPhone: "",
      email: "",
      residentialArea: "",
      preferredContact: "",
      message: "",
      website: "",
      consent: false,
      privacy: false,
    },
  });

  const onSubmit = async (data: unknown) => {
    const result = await submitAdmission(data);
    if (result.error) {
      setStatus({ error: result.error });
      return;
    }
    setStatus({
      success: `Your application has been received. Reference number: ${result.reference}`,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

      <div className="rounded-sm border border-soft bg-cream p-6">
        <h2 className="mb-4 font-serif text-xl text-charcoal">Learner information</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="learnerName">Full name</Label>
            <Input id="learnerName" {...register("learnerName")} />
            {errors.learnerName && (
              <p className="mt-1 text-xs text-red-600">{errors.learnerName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of birth</Label>
            <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
            {errors.dateOfBirth && (
              <p className="mt-1 text-xs text-red-600">{errors.dateOfBirth.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select id="gender" {...register("gender")}>
              <option value="">Prefer not to say</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="gradeApplying">Grade / form applying for</Label>
            <Input id="gradeApplying" {...register("gradeApplying")} placeholder="e.g. Form 1" />
            {errors.gradeApplying && (
              <p className="mt-1 text-xs text-red-600">{errors.gradeApplying.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="curriculum">Proposed curriculum</Label>
            <Select id="curriculum" {...register("curriculum")}>
              <option value="">Select curriculum</option>
              <option value="ZIMSEC">ZIMSEC</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Undecided">Undecided</option>
            </Select>
            {errors.curriculum && (
              <p className="mt-1 text-xs text-red-600">{errors.curriculum.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="dayOrBoarding">Day or boarding</Label>
            <Select id="dayOrBoarding" {...register("dayOrBoarding")}>
              <option value="">Select option</option>
              <option value="Day">Day</option>
              <option value="Boarding">Boarding</option>
            </Select>
            {errors.dayOrBoarding && (
              <p className="mt-1 text-xs text-red-600">{errors.dayOrBoarding.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="previousSchool">Previous school</Label>
            <Input id="previousSchool" {...register("previousSchool")} />
          </div>
          <div>
            <Label htmlFor="intakeTerm">Proposed intake term</Label>
            <Input id="intakeTerm" {...register("intakeTerm")} placeholder="e.g. Third Term 2026" />
            {errors.intakeTerm && (
              <p className="mt-1 text-xs text-red-600">{errors.intakeTerm.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-sm border border-soft bg-cream p-6">
        <h2 className="mb-4 font-serif text-xl text-charcoal">Parent or guardian information</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="parentName">Full name</Label>
            <Input id="parentName" {...register("parentName")} />
            {errors.parentName && (
              <p className="mt-1 text-xs text-red-600">{errors.parentName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="relationship">Relationship to learner</Label>
            <Input id="relationship" {...register("relationship")} placeholder="e.g. Mother" />
            {errors.relationship && (
              <p className="mt-1 text-xs text-red-600">{errors.relationship.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Primary phone</Label>
            <Input id="phone" type="tel" {...register("phone")} placeholder="0773 870 090" />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="altPhone">Alternative phone</Label>
            <Input id="altPhone" type="tel" {...register("altPhone")} placeholder="0713 687 669" />
            {errors.altPhone && (
              <p className="mt-1 text-xs text-red-600">{errors.altPhone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="residentialArea">Residential area</Label>
            <Input id="residentialArea" {...register("residentialArea")} placeholder="e.g. Mbizo" />
            {errors.residentialArea && (
              <p className="mt-1 text-xs text-red-600">{errors.residentialArea.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="preferredContact">Preferred contact method</Label>
            <Select id="preferredContact" {...register("preferredContact")}>
              <option value="">Select</option>
              <option value="Phone">Phone</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
            </Select>
            {errors.preferredContact && (
              <p className="mt-1 text-xs text-red-600">{errors.preferredContact.message}</p>
            )}
          </div>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message or special considerations</Label>
        <Textarea id="message" {...register("message")} rows={4} />
      </div>

      <div className="space-y-3 rounded-sm border border-soft bg-cream p-5">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            {...register("consent")}
            className="mt-1 h-4 w-4 accent-burgundy"
          />
          <Label htmlFor="consent" className="mb-0 text-sm font-normal text-muted">
            I confirm that the information provided is accurate and I consent to the school contacting me about this application.
          </Label>
        </div>
        {errors.consent && (
          <p className="text-xs text-red-600">{errors.consent.message}</p>
        )}
        <div className="flex items-start gap-3">
          <input
            id="privacy"
            type="checkbox"
            {...register("privacy")}
            className="mt-1 h-4 w-4 accent-burgundy"
          />
          <Label htmlFor="privacy" className="mb-0 text-sm font-normal text-muted">
            I have read and agree to the{" "}
            <a href="/privacy" className="text-burgundy underline">
              Privacy Policy
            </a>
            .
          </Label>
        </div>
        {errors.privacy && (
          <p className="text-xs text-red-600">{errors.privacy.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit application"}
      </Button>
    </form>
  );
}
