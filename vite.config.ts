import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: false,
        renderTimeout: 10000,
      },
      pages: [
        { path: "/" },
        { path: "/about" },
        { path: "/contact" },
        { path: "/donate" },
        { path: "/get-help" },
        { path: "/volunteer" },
        { path: "/partners" },
        { path: "/programs" },
        { path: "/programs/assessment" },
        { path: "/programs/therapy" },
        { path: "/programs/education" },
        { path: "/programs/family-support" },
        { path: "/programs/advocacy" },
        { path: "/programs/scholarships" },
        { path: "/events" },
        { path: "/events/autism-awareness-week-2026" },
        { path: "/events/parent-training-march" },
        { path: "/events/inclusive-teachers-workshop" },
        { path: "/events/community-walk" },
        { path: "/stories" },
        { path: "/stories/couldnt-afford-therapy" },
        { path: "/stories/completed-and-thriving" },
        { path: "/stories/started-but-stopped" },
        { path: "/resources" },
        { path: "/resources/what-is-autism" },
        { path: "/resources/early-signs-checklist" },
        { path: "/resources/school-advocacy" },
        { path: "/resources/sensory-strategies" },
        { path: "/resources/communication-cards" },
        { path: "/resources/caregiver-wellbeing" },
        { path: "/blog" },
        { path: "/blog/barrier-to-dreams" },
        { path: "/blog/three-ways-to-support" },
        { path: "/blog/and-were-just-getting-started" },
      ],
    }),
    viteReact(),
  ],
});
