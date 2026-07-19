"use server";

import {
  admissionSchema,
  contactSchema,
  transportSchema,
} from "@/lib/schemas";
import { supabaseAdmin } from "@/lib/supabase/admin";

function generateRef(prefix: string) {
  const ts = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `${prefix}-${ts}-${rand}`;
}

export async function submitAdmission(input: unknown) {
  const parsed = admissionSchema.safeParse(input);
  if (!parsed.success) {
    return {
      error: "Please correct the errors in the form.",
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;
  const reference = generateRef("ADM");

  if (supabaseAdmin) {
    const { error } = await supabaseAdmin
      .from("admission_applications")
      .insert({
        reference,
        learner_name: data.learnerName,
        date_of_birth: data.dateOfBirth || null,
        gender: data.gender || null,
        grade_applying: data.gradeApplying,
        curriculum: data.curriculum,
        day_or_boarding: data.dayOrBoarding,
        previous_school: data.previousSchool || null,
        intake_term: data.intakeTerm,
        parent_name: data.parentName,
        relationship: data.relationship,
        phone: data.phone,
        alt_phone: data.altPhone || null,
        email: data.email || null,
        residential_area: data.residentialArea,
        preferred_contact: data.preferredContact,
        message: data.message || null,
      });
    if (error) {
      console.error("Admission insert error", error);
      return { error: "There was a problem saving your application. Please try again." };
    }
  }

  return { success: true, reference };
}

export async function submitContact(input: unknown) {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      error: "Please correct the errors in the form.",
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  if (supabaseAdmin) {
    const { error } = await supabaseAdmin.from("general_enquiries").insert({
      name: data.name,
      phone: data.phone || null,
      email: data.email || null,
      subject: data.subject,
      message: data.message,
    });
    if (error) {
      console.error("Contact insert error", error);
      return { error: "There was a problem sending your message. Please try again." };
    }
  }

  return { success: true };
}

export async function submitTransport(input: unknown) {
  const parsed = transportSchema.safeParse(input);
  if (!parsed.success) {
    return {
      error: "Please correct the errors in the form.",
      issues: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  if (supabaseAdmin) {
    const { error } = await supabaseAdmin.from("transport_enquiries").insert({
      full_name: data.fullName,
      organisation: data.organisation || null,
      phone: data.phone,
      email: data.email || null,
      journey_type: data.journeyType,
      pickup: data.pickup,
      destination: data.destination,
      travel_date: data.travelDate,
      passengers: data.passengers,
      message: data.message || null,
    });
    if (error) {
      console.error("Transport insert error", error);
      return { error: "There was a problem sending your enquiry. Please try again." };
    }
  }

  return { success: true };
}
