import { Route } from "@angular/router";
import ViewContainerRefComponent from "./view-container-ref.component";

export const routes: Route[] = [
  {
    path: "",
    component: ViewContainerRefComponent,
    children: [
      {
        path: "create-component",
        loadComponent: () => import("./create-component/create-component.component"),
      },
      {
        path: "manipulate-embedded-view",
        loadComponent: () =>
          import("./manipulate-embedded-view/manipulate-embedded-view.component"),
      },
      {
        path: "why-vcr",
        loadComponent: () => import("./why-vcr/why-vcr.component"),
      },
      {
        path: "reuse-views",
        loadComponent: () => import("./reuse-views/reuse-views.component"),
      },
      {
        path: "",
        loadComponent: () => import("./intro/intro.component"),
      },
    ],
  },
];
