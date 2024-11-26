import PageHeader from "../page-header";
import { Button } from "../ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm({ form, isSubmitting, onSubmit }) {
	return (
		<section id="contact" className="mt-6 mb-6 md:mt-10 md:mb-10">
			<PageHeader title="Let's Talk" />

			{/* Form */}
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="p-4 md:p-6 w-[90%] md:w-5/6 lg:w-3/4 mx-auto text-sm lg:text-lg space-y-3 md:space-y-5 shadow-[0_0_12px] shadow-white rounded-md bg-white text-gray-500"
				>
					{/* Firstname and Lastname */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
						<FormField
							control={form.control}
							name="firstname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Firstname</FormLabel>
									<FormControl>
										<Input
											type="text"
											value={field.value}
											onChange={(value) => field.onChange(value)}
											disabled={field.disabled}
											name={field.name}
											ref={field.ref}
											onBlur={field.onBlur}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="lastname"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Lastname</FormLabel>
									<FormControl>
										<Input
											type="text"
											value={field.value}
											onChange={(value) => field.onChange(value)}
											disabled={field.disabled}
											name={field.name}
											ref={field.ref}
											onBlur={field.onBlur}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					{/* email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="text"
										value={field.value}
										onChange={(value) => field.onChange(value)}
										disabled={field.disabled}
										name={field.name}
										ref={field.ref}
										onBlur={field.onBlur}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* subject */}
					<FormField
						control={form.control}
						name="subject"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Subject</FormLabel>
								<FormControl>
									<div>
										<Input
											type="text"
											className="hidden md:block"
											value={field.value}
											onChange={(value) => field.onChange(value)}
											disabled={field.disabled}
											name={field.name}
											ref={field.ref}
											onBlur={field.onBlur}
										/>
										<Textarea
											type="textarea"
											className="block md:hidden min-h-[60px]"
											value={field.value}
											onChange={(value) => field.onChange(value)}
											disabled={field.disabled}
											name={field.name}
											ref={field.ref}
											onBlur={field.onBlur}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* message */}
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Message</FormLabel>
								<FormControl>
									<div>
										<Textarea
											type="textarea"
											className="block md:hidden min-h-[270px]"
											value={field.value}
											onChange={(value) => field.onChange(value)}
											disabled={field.disabled}
											name={field.name}
											ref={field.ref}
											onBlur={field.onBlur}
										/>
										<Textarea
											type="textarea"
											className="hidden md:block min-h-[140px]"
											value={field.value}
											onChange={(value) => field.onChange(value)}
											disabled={field.disabled}
											name={field.name}
											ref={field.ref}
											onBlur={field.onBlur}
										/>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{/* submit button */}
					<Button className="w-full text-base md:text-lg rounded-[8px]">
						{isSubmitting ? "Sending..." : "Send"}
					</Button>
				</form>
			</Form>
		</section>
	);
}
