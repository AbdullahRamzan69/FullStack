import {z} from "zod"

export const verifySchema = z.object({
code:z.string().length(6,"Verify codre must be 6 digits")
})