import * as z from "zod";

export const ThreadValidation = z.object({
  name: z.string().min(3, { message: "Minimum 3 Characters" }),
  accountId: z.string(),
});
export const CommentValidation = z.object({
  name: z.string().min(3, { message: "Minimum 3 Characters" }),
});
