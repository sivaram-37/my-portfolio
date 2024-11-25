import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return (
		<input
			type={type}
			className={cn(
				"h-10 w-full px-2 text-sm md:text-base rounded-[8px] border border-gray-300 focus:outline focus:outline-primary placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Input.displayName = "Input";

export { Input };
