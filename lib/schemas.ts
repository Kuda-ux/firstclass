import { z } from "zod";

const zimbabwePhone = z
  .string()
  .min(1, "Phone number is required")
  .regex(
    /^(\+263|0)\s?7[1-9](\s?\d){7}$/,
    "Enter a valid Zimbabwean number, e.g. 0773 870 090 or +263 773 870 090"
  )
  .transform((v) => v.replace(/\s/g, ""));

const optionalPhone = z
  .string()
  .regex(
    /^(\+263|0)\s?7[1-9](\s?\d){7}$/,
    "Enter a valid Zimbabwean number, e.g. 0773 870 090 or +263 773 870 090"
  )
  .optional()
  .or(z.literal(""))
  .transform((v) => (v ? v.replace(/\s/g, "") : v));

const consent = z
  .boolean()
  .refine((v) => v === true, { message: "You must agree to continue" });

export const admissionSchema = z.object({
  learnerName: z.string().min(2, "Learner's full name is required"),
  dateOfBirth: z.string().optional().or(z.literal("")),
  gender: z.enum(["", "Male", "Female"]).optional(),
  gradeApplying: z.string().min(1, "Please indicate the grade or form"),
  curriculum: z
    .enum(["", "ZIMSEC", "Cambridge", "Undecided"])
    .refine((v) => v !== "", "Please choose a curriculum"),
  dayOrBoarding: z
    .enum(["", "Day", "Boarding"])
    .refine((v) => v !== "", "Please choose day or boarding"),
  previousSchool: z.string().optional().or(z.literal("")),
  intakeTerm: z.string().min(1, "Please indicate the proposed intake term"),
  parentName: z.string().min(2, "Parent or guardian name is required"),
  relationship: z.string().min(1, "Relationship to learner is required"),
  phone: zimbabwePhone,
  altPhone: optionalPhone,
  email: z
    .string()
    .email("Please enter a valid email")
    .optional()
    .or(z.literal("")),
  residentialArea: z.string().min(1, "Residential area is required"),
  preferredContact: z
    .enum(["", "Phone", "WhatsApp", "Email"])
    .refine((v) => v !== "", "Please choose a preferred contact method"),
  message: z.string().optional().or(z.literal("")),
  consent: consent,
  privacy: consent,
  website: z.literal("").optional(),
});

export type AdmissionInput = z.infer<typeof admissionSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, "Your name is required"),
  phone: optionalPhone,
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.literal("").optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const transportSchema = z.object({
  fullName: z.string().min(2, "Your full name is required"),
  organisation: z.string().optional().or(z.literal("")),
  phone: zimbabwePhone,
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  journeyType: z
    .enum(["", "Learner transport", "Educational trip", "Bus hire"])
    .refine((v) => v !== "", "Please select a journey type"),
  pickup: z.string().min(1, "Pickup location is required"),
  destination: z.string().min(1, "Destination is required"),
  travelDate: z.string().min(1, "Travel date is required"),
  passengers: z.coerce.number().min(1, "At least one passenger is required"),
  message: z.string().optional().or(z.literal("")),
  website: z.literal("").optional(),
});

export type TransportInput = z.infer<typeof transportSchema>;
