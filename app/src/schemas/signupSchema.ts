    import {z} from "zod"

    export const usernameValidation = z
    .string()
    .min(3, "Username must contain atleast 3 characters")
    .max(15, "Username must be shorter than 16 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username cannot contain special characters or spaces")

    export const signUpSchema = z.object({
        username:usernameValidation,
        email:z
        .string().email({message:"Email address is invalid"}),
        password:z.string().min(8,"Password must be atleast 8 characters")
    })

    