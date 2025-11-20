import { z } from "zod";

export const errorSchema = z.object({
  latitude: z.float32().min(-90).max(90, "Το πεδίο είναι υποχρεωτικό"),
  longtitude: z.float32().min(-100).max(100, "Το πεδίο είναι υποχρεωτικό"),
  serialNumber: z
    .string()
    .min(1, "Το πεδίο είναι υποχρεωτικό")
    .regex(/^[A-Za-z0-9 ]+$/, "Δεν επιτρέπονται ειδικοί χαρακτήρες"),
  deveui: z
    .string()
    .min(1, "Το πεδίο είναι υποχρεωτικό")
    .regex(/^[A-Za-z0-9 ]+$/, "Δεν επιτρέπονται ειδικοί χαρακτήρες"),
});
