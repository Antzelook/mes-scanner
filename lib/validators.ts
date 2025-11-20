import { z } from "zod";

export const errorSchema = z.object({
  latitude: z.float32("Το πεδίο είναι υποχρεωτικό"),
  longtitude: z.float32("Το πεδίο είναι υποχρεωτικό"),
  serialNumber: z
    .string()
    .min(1, "Το πεδίο είναι υποχρεωτικό")
    .regex(/^[0-9 ]+$/, "Δεν επιτρέπονται ειδικοί χαρακτήρες"),
  deveui: z
    .string()
    .min(1, "Το πεδίο είναι υποχρεωτικό")
    .regex(/^[A-Fa-f0-9 ]+$/, "Δεν επιτρέπονται ειδικοί χαρακτήρες"),
});
