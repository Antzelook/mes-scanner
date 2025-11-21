import { z } from "zod";

export const recordedErrorSchema = z.object({
  latitude: z.number().min(1, "Το πεδίο είναι υποχρεωτικό"),
  longitude: z.number().min(1, "Το πεδίο είναι υποχρεωτικό"),
  serialNumber: z
    .string()
    .min(1, "Το πεδίο είναι υποχρεωτικό")
    .regex(/^[0-9 ]+$/, "Δεν επιτρέπονται ειδικοί χαρακτήρες"),
  deveui: z
    .string()
    .min(1, "Το πεδίο είναι υποχρεωτικό")
    .regex(/^[A-Fa-f0-9 ]+$/, "Δεν επιτρέπονται ειδικοί χαρακτήρες"),
});
