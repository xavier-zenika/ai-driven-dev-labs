import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: [],
    include: ["**/tests/**/*.test.ts", "**/tests/**/*.test.tsx"],
    // students generate their own tests in Lab 2 -- do not fail before any exist
    passWithNoTests: true,
  },
});
