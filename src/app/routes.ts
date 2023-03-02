import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "element-ref",
    loadComponent: () => import("./element-ref/element-ref.component"),
  },
  {
    path: "view-ref",
    loadComponent: () => import("./view-ref/view-ref.component"),
  },
  {
    path: "template-ref",
    loadComponent: () => import("./template-ref/template-ref.component"),
  },
  {
    path: "view-container-ref",
    loadComponent: () => import("./view-container-ref/view-container-ref.component"),
  },
  {
    path: "",
    loadComponent: () => import("./welcome/welcome.component"),
  },
];
