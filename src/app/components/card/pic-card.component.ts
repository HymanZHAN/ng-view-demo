import { Component } from "@angular/core";

@Component({
  selector: "app-pic-card",
  standalone: true,
  imports: [],
  template: `
    <figure>
      <img src="assets/photo.jpg" alt="Movie" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Listen</button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        @apply card  w-1/2 h-64 m-4 align-bottom lg:card-side bg-base-100 shadow-xl;
      }
    `,
  ],
})
export class PicCardComponent {}
