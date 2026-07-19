export interface ApplicationRecord {
  id: string;
  reference: string;
  learner_name: string;
  grade_applying: string;
  phone: string;
  status: string;
  created_at: string;
}

export interface GeneralEnquiry {
  id: string;
  name: string;
  email: string | null;
  phone: string | null;
  subject: string;
  message: string;
  created_at: string;
}

export interface TransportEnquiry {
  id: string;
  full_name: string;
  journey_type: string;
  pickup: string;
  destination: string;
  travel_date: string;
  passengers: number;
  created_at: string;
}
