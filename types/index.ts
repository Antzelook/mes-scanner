import { z } from "zod";
import { adminSgnInSchema, errorFormSchema } from "@/lib/validators";

export type ErrorForm = {
  id: string;
  date: string;
  latitude: number;
  longitude: number;
  serialNumber: string;
  deveui: string;
  types: string[];
  actions: string[];
  comment?: string | null;
};

export type AdminSignInForm = {
  email: string;
  password: string;
};

export type ErrorFormType = z.infer<typeof errorFormSchema>;
export type AdminSignInFormType = z.infer<typeof adminSgnInSchema>;
