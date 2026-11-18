
import "dotenv/config";
import { defineConfig, env } from "prisma/config";
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    // Явно указываем fall-back на process.env, если env() из prisma/config капризничает
    url: (env("DATABASE_URL") || process.env.DATABASE_URL)!,
  },
});