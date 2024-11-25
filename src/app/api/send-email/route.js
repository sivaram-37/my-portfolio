import nodemailer from "nodemailer";

export async function POST(req) {
	try {
		// Parse the JSON body of the request
		const { firstname, lastname, email, subject, message } = await req.json();

		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		// Send email to yourself
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: "sivaram3710@gmail.com",
			subject: `New Message from ${firstname} ${lastname} - ${subject}`,
			text: `You received a new message from ${firstname} ${lastname} (${email}):\n\n${message}`,
		});

		// Send a response email to the form submitter
		await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: email,
			subject: `Thank you for reaching out, ${firstname}!`,
			text: `Hi ${firstname},\n\nThank you for contacting us. We have received your message and will get back to you soon.\n\nBest regards,\nSivaram V`,
		});

		// Return success response
		return new Response(JSON.stringify({ message: "Emails sent successfully!" }), {
			status: 200,
		});
	} catch (error) {
		console.error("Error sending email:", error);
		return new Response(JSON.stringify({ error: "Error sending email." }), { status: 500 });
	}
}
