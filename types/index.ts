import { z } from "zod";
import { recordErrorSchema } from "@/lib/validators";

export type ErrorForm = {
  id: number;
  date: Date;
  latitude: number;
  longitude: number;
  serialNumber: string;
  deveui: string;
  types: string[];  
  actions: string[];
  comment?: string | null;
};

export type ErrorFormType = z.infer<typeof recordErrorSchema>;
