import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Contacts from "../components/Contacts/Contacts";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Contacts />
      <Footer />
    </>
  );
}
