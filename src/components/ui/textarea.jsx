import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return (
		<textarea
			className={cn(
				"h-10 w-full p-2 text-sm md:text-base rounded-[8px] border border-gray-300 focus:outline focus:outline-primary placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
				className
			)}
			ref={ref}
			{...props}
		/>
	);
});
Textarea.displayName = "Textarea";

export { Textarea };
