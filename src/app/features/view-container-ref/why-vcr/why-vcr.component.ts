import { NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { PlusOutlineComponent } from "@components/icons";
import { MinusOutlineComponent } from "@components/icons/minus-outline.component";
import { CounterComponent } from "./counter.component";

@Component({
  selector: "app-why-vcr",
  standalone: true,
  imports: [
    NgTemplateOutlet,
    CounterComponent,
    MinusOutlineComponent,
    PlusOutlineComponent,
  ],
  templateUrl: "./why-vcr.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WhyVcrComponent {
  @ViewChild("counter1Container", { read: ViewContainerRef })
  counter1Container?: ViewContainerRef;

  count: number = 0;

  constructor() {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  removeCounterVCR() {
    if (this.counter1Container) {
      this.counter1Container.remove(0);
    }
  }

  removeCounterDom() {
    const container = document.querySelector("section#counter-container");
    if (container?.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
}
