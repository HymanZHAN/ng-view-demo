import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-view-container-ref",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./view-container-ref.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col items-center w-full mx-8;
      }
    `,
  ],
})
export default class ViewContainerRefComponent {}
