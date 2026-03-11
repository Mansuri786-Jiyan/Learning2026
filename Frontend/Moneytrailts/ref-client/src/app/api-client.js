import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Mocking the baseQuery to return static data instead of making real requests
const mockBaseQuery = (args) => {
  console.log("Mock API Call:", args);

  // Simple router based on URL
  const url = typeof args === 'string' ? args : args.url;

  let data = {};

  if (url.includes("/auth/login") || url.includes("/auth/register")) {
    data = {
      accessToken: "mock-token-" + Date.now(),
      expiresAt: Date.now() + 3600000,
      user: {
        id: 1,
        name: "Test User",
        email: "test@example.com",
        profilePicture: "https://github.com/nutlope.png",
      },
      reportSetting: { isEnabled: true }
    };
  } else if (url.includes("/transactions")) {
    data = [
      { id: 1, amount: 50, category: "Food", date: new Date().toISOString(), type: "expense", title: "Lunch" },
      { id: 2, amount: 200, category: "Salary", date: new Date().toISOString(), type: "income", title: "Freelance" },
    ];
  } else if (url.includes("/analytics")) {
    data = {
      totalIncome: 1500,
      totalExpense: 800,
      savings: 700,
      categoryBreakdown: [
        { name: "Food", value: 300 },
        { name: "Transport", value: 200 },
        { name: "Rent", value: 300 },
      ]
    };
  }

  return { data };
};

export const apiClient = createApi({
  reducerPath: "api",
  baseQuery: mockBaseQuery, // Swapped real fetchBaseQuery for mock
  refetchOnMountOrArgChange: true,
  tagTypes: ["transactions", "analytics", "billingSubscription"],
  endpoints: () => ({}),
});
