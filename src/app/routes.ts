import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "element-ref",
    loadComponent: () => import("./features/element-ref/element-ref.component"),
  },
  {
    path: "view-ref",
    loadComponent: () => import("./features/view-ref/view-ref.component"),
  },
  {
    path: "template-ref",
    loadComponent: () => import("./features/template-ref/template-ref.component"),
  },
  {
    path: "view-container-ref",
    loadComponent: () => import("./features/view-container-ref/view-container-ref.component"),
  },
  {
    path: "",
    loadComponent: () => import("./features/welcome/welcome.component"),
  },
];
