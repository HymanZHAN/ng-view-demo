import { NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "app-pic-card",
  standalone: true,
  imports: [NgClass],
  template: `
    <div
      class="card w-full shadow-xl m-4 cursor-pointer align-bottom h-128 md:h-64 md:card-side bg-base-100"
      [ngClass]="{ 'border-2 border-primary': selected }"
    >
      <figure>
        <img src="assets/photo.jpg" alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title ">Track No. {{ index }} released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        @apply w-1/2 m-4;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PicCardComponent {
  @Input() index = 0;
  @Input() selected = false;
}
