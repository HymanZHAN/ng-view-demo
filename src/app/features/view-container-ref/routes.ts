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
        path: "create-embedded-view",
        loadComponent: () => import("./create-embedded-view/create-embedded-view.component"),
      },
      {
        path: "why-vcr",
        loadComponent: () => import("./why-vcr/why-vcr.component"),
      },
      {
        path: "",
        loadComponent: () => import("./intro/intro.component"),
      },
    ],
  },
];
