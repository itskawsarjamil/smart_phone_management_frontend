import { z } from "zod";

// Define the Zod validation schema
export const createUserValidationSchema = z.object({
  name: z.object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name cannot exceed 50 characters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name cannot exceed 50 characters"),
  }),
  userName: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username cannot exceed 30 characters"),
  password: z
    .string()
    .min(6, "passworrd must be at least 6 character long")
    .optional(),
  email: z.string().email("Please enter a valid email address"),
  bio: z.string().max(250, "Bio cannot exceed 250 characters").optional(),
  contactNo: z
    .string()
    .regex(
      /^0\d{10}$/,
      "Please provide a valid contact number (e.g., 01234567890)"
    ),
  emergencyContactNo: z
    .string()
    .regex(
      /^0\d{10}$/,
      "Please provide a valid emergency contact number (e.g., 01234567890)"
    ),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  presentAddress: z
    .string()
    .min(5, "Present address must be at least 5 characters long")
    .max(100, "Present address cannot exceed 100 characters"),
  permanentAddress: z
    .string()
    .min(5, "Permanent address must be at least 5 characters long")
    .max(100, "Permanent address cannot exceed 100 characters"),
  image: z.any().optional(),
});
