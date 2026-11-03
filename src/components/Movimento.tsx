"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user": desliga as animações para quem pediu menos movimento no aparelho
export default function Movimento({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
