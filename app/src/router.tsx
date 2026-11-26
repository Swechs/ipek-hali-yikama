import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Site veri sorgusu kullanmadığı için React Query sağlayıcısı paketten çıkarıldı.
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
