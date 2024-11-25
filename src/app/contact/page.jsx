"use client";

import ContactForm from "@/components/contact-form";
import { contactFormSchema } from "@/components/contact-form-schema";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm({
		mode: "all",
		reValidateMode: "onChange",
		defaultValues: {
			firstname: "",
			lastname: "",
			email: "",
			subject: "",
			message: "",
		},
		resolver: zodResolver(contactFormSchema),
	});

	const handleSubmit = async (data) => {
		setIsSubmitting(true);
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				alert("Email sent successfully!");
				form.reset();
			} else {
				const { error } = await response.json();
				alert(`Error: ${error}`);
			}
		} catch (error) {
			console.error("Error sending email:", error);
			alert("Failed to send email.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return <ContactForm form={form} isSubmitting={isSubmitting} onSubmit={handleSubmit} />;
}
