import type { Config } from "drizzle-kit";
import "dotenv/config";

export default {
  schema: "./src/lib/db/schema",
  out: "./src/lib/db/migrations",
  driver: "better-sqlite",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
} satisfies Config;