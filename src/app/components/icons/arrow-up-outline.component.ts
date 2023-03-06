import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-arrow-up-outline",
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  `,
  styles: [],
})
export class ArrowUpOutlineComponent {}
