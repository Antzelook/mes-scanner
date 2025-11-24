import { z } from "zod";

export const recordErrorSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  serialNumber: z.string().min(1, "Το πεδίο είναι υποχρεωτικό"),
  deveui: z.string().min(1, "Το πεδίο είναι υποχρεωτικό"),
});
