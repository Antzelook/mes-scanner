import { z } from "zod";
import { errorFormSchema } from "@/lib/validators";

export type ErrorForm = {
  id: string,
  date: string;
  latitude: number;
  longitude: number;
  serialNumber: string;
  deveui: string;
  types: string[];  
  actions: string[];
  comment?: string | null;
};

export type ErrorFormType = z.infer<typeof errorFormSchema>
