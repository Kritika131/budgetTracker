import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "budget-tracker", // Unique app ID
  name: "Budget Tracker",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});