"use client";
import "./globals.css";
import "/public/static/css/style.css";
import "/public/static/css/font-awesome-all.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { createContext } from "react";
import ServiceWorker from "@/component/sw/sw";

export const ThemeContext = createContext(null);

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState();
  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") === "" || localStorage.getItem("theme")
        ? localStorage.getItem("theme")
        : ""
    );
  }, []);
  useEffect(() => {
    if (
      localStorage.getItem("theme") !== "" &&
      localStorage.getItem("theme") !== "dark"
    ) {
      localStorage.setItem("theme", "");
    }
    document.querySelector("html").classList = localStorage.getItem("theme");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ServiceWorker />
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeContext.Provider>
  );
}
