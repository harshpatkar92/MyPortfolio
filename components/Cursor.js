"use client";

import { useEffect } from "react";

export default function Cursor() {

  useEffect(() => {

    const cursor = document.querySelector(".custom-cursor");
    const ring = document.querySelector(".cursor-ring");

    const moveCursor = (e) => {

      if (!cursor || !ring) return;

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {

      el.addEventListener("mouseenter", () => {

        cursor.style.transform =
          "translate(-50%, -50%) scale(2.5)";

        ring.style.transform =
          "translate(-50%, -50%) scale(1.8)";
      });

      el.addEventListener("mouseleave", () => {

        cursor.style.transform =
          "translate(-50%, -50%) scale(1)";

        ring.style.transform =
          "translate(-50%, -50%) scale(1)";
      });

    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="cursor-ring"></div>
    </>
  );
}