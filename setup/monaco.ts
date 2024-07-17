import { defineMonacoSetup } from "@slidev/types";
import type { MonacoSetup } from "@slidev/types";

export default defineMonacoSetup((() => {
  return {
    theme: {
      dark: "vs-dark",
      light: "vs",
    },
  };
}) as MonacoSetup);
