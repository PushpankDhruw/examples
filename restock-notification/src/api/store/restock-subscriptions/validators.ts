import { z } from "zod"

export const PostStoreCreateRestockSubscription = z.object({
  variant_id: z.string(),
  email: z.string().optional(),
})