"use client";

import { ZoomParallax } from "@/components/ZoomParallax/zoom-parallax";
import { ZoomParallaxData } from "@/data/zoom-parallax";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <ZoomParallax
        data={ZoomParallaxData}
        title="United Kingdom"
        fontSize="100px"
      />
    </>
  );
}
