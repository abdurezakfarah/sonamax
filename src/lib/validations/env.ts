import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().min(1000),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().min(1),
  NEXT_PUBLIC_SANITY_DATASET: z.string().min(1),
  GMAIL: z.string().min(1),
  GMAIL_APP_PASSWORD: z.string().min(1),
  NODE_ENV: z
    .union([
      z.literal("development"),
      z.literal("testing"),
      z.literal("production"),
    ])
    .default("development"),
});

// Validate `process.env` against our schema
// and return the result
const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;

// Export the result so we can use it in the project
export default env;
