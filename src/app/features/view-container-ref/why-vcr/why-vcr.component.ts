import { NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EmbeddedViewRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from "@angular/core";
import { PlusOutlineComponent } from "@components/icons";
import { MinusOutlineComponent } from "@components/icons/minus-outline.component";
import { CounterComponent } from "./counter.component";

@Component({
  selector: "app-why-vcr",
  standalone: true,
  imports: [NgTemplateOutlet, CounterComponent, MinusOutlineComponent, PlusOutlineComponent],
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
  @ViewChild("counter1", { read: ElementRef }) counter1El?: ElementRef;
  @ViewChild("counterContainer", { read: ViewContainerRef }) counter1Container?: ViewContainerRef;

  count: number = 0;

  constructor() {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  removeCounterVCR() {
    this.counter1Container?.remove(0);
  }

  removeCounterDom() {
    if (this.counter1El) {
      this.counter1El.nativeElement.remove();
    }
  }
}
