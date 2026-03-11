import { AUTH_ROUTES, PROTECTED_ROUTES } from "./routePath.jsx";
import SignIn from "../../pages/auth/sign-in.jsx";
import SignUp from "../../pages/auth/sign-up.jsx";
import Dashboard from "../../pages/dashboard/index.jsx";
import Transactions from "../../pages/transactions/index.jsx";
import Reports from "../../pages/reports/index.jsx";
import Settings from "../../pages/settings/index.jsx";
import Account from "../../pages/settings/account.jsx";
import Appearance from "../../pages/settings/appearance.jsx";
import Billing from "../../pages/settings/billing.jsx";

export const authenticationRoutePaths = [
  { path: AUTH_ROUTES.SIGN_IN, element: <SignIn /> },
  { path: AUTH_ROUTES.SIGN_UP, element: <SignUp /> },
];

export const protectedRoutePaths = [
  { path: PROTECTED_ROUTES.OVERVIEW, element: <Dashboard /> },
  { path: PROTECTED_ROUTES.TRANSACTIONS, element: <Transactions /> },
  { path: PROTECTED_ROUTES.REPORTS, element: <Reports /> },
  {
    path: PROTECTED_ROUTES.SETTINGS,
    element: <Settings />,
    children: [
      { index: true, element: <Account /> },
      { path: PROTECTED_ROUTES.SETTINGS, element: <Account /> },
      { path: PROTECTED_ROUTES.SETTINGS_APPEARANCE, element: <Appearance /> },
      { path: PROTECTED_ROUTES.SETTINGS_BILLING, element: <Billing /> },
    ]
  },
];
