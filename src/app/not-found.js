"use client";
import img from "/public/static/images/illustration/404.svg";
import Image from "next/image";
import Link from "next/link";
import bgDark from "/public/static/images/background/404-dark.jpg";
import bgLight from "/public/static/images/background/404-bg.png";
import { useContext } from "react";
import { ThemeContext } from "./layout";

function Error() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className="bg-notfound bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url('${
          theme === "dark" ? bgDark.src : bgLight.src
        }')`,
      }}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="max-w-2xl mx-auto">
          <Image
            priority={true}
            height={img.height}
            width={img.width}
            src={img.src}
            alt=""
          />

          <div className="flex justify-center mt-10">
            <Link
              href="/"
              className="bg-success-300 text-sm font-bold text-white rounded-lg px-10 py-3 docs-creator"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;
