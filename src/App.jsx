import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthLayout from "./Layout/AuthLayout";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Categories from "./Pages/Categories";
import CategoryPdp from "./Pages/CategoryPdp";
import Contact from "./pages/Contact";
import EditProfilePage from "./Pages/EditProfilePage";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import PaymentPage from "./Pages/PaymentPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import Products from "./Pages/Products";
import ProfilePage from "./Pages/ProfilePage";
import CreateAccount from "./Pages/CreateAccountPage";
import DashboardPage from "./Pages/Dashboard";
import AddressPage from "./Pages/AddressPage";
import SettingsPage from "./Pages/SettingPage";
import ChangePasswordPage from "./Pages/ChangePasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/categoriespage/:slug",
        element: <CategoryPdp />,
      },
      {
        path: "product/:productID",
        element: <ProductDetailsPage />,
      },
      {
        path: "paymentpage",
        element: <PaymentPage />,
      },

      {
        path: "profilepage",
        element: <ProfilePage />,
      },

      {
        path: "editprofilepage",
        element: <EditProfilePage />,
      },

      {
        path: "dashboard",
        element: <DashboardPage />,
      },

      {
        path: "addresspage",
        element: <AddressPage />,
      },

       {
        path: "settingpage",
        element: <SettingsPage />,
      },

      {
        path: "changepasswordpage",
        element: <ChangePasswordPage />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/create-account",
        element: <CreateAccount />
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  );
}

export default App;
