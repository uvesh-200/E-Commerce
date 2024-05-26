import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Toaster } from "react-hot-toast";

function layout({ children }) {
  return (
    <div>
      <Header></Header>
      <main style={{ minHeight: "90vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default layout;
