import { z } from "zod";

export const contactFormSchema = z.object({
	firstname: z.string().min(3, { message: "This field is required." }),
	lastname: z.string().min(1, { message: "This field is required." }),
	email: z.string().email().min(5, { message: "This field is required." }),
	subject: z.string().min(3, { message: "This field is required." }),
	message: z.string().min(3, { message: "This field is required." }),
});
