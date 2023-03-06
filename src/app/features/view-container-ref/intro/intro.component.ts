import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-intro",
  standalone: true,
  imports: [],
  templateUrl: "./intro.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IntroComponent {}
