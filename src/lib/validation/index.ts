import * as z from 'zod'; //for form validation

//This is the validation schema for the SignUp form
export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Too short'}),
  username: z.string().min(2, { message: 'Too short'}),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long'}),
});

//This is the validation schema for the SignIn form
export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long'}),
});

