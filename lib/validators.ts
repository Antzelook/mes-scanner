import { z } from "zod";

export const recordErrorSchema = z.object({
  date: z.string(),
  latitude: z.coerce.number(),
  longitude: z.coerce.number(),
  serialNumber: z.string().min(1, "Απαιτείται serial number"),
  deveui: z.string().min(1, "Απαιτείται deveui"),
  types: z.array(z.string()).optional(),
  actions: z.array(z.string()).optional(),
  comment: z.string().optional(),
});
