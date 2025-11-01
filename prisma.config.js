import "dotenv/config";
import { defineConfig } from "@prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  client: {
    provider: "prisma-client-js",
    output: "./src/generated/prisma",
  },
});
