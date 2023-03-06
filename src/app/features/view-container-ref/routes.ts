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
        path: "move-views",
        loadComponent: () => import("./move-views/move-views.component"),
      },
      {
        path: "",
        loadComponent: () => import('./intro/intro.component')
      }
    ],
  },
];
