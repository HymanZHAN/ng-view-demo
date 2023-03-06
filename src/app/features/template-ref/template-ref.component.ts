import { CommonModule } from "@angular/common";
import {
  Component,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import {
  PlusOutlineComponent,
  RefreshOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";

@Component({
  selector: "app-template-ref",
  standalone: true,
  imports: [CommonModule, PlusOutlineComponent, TrashOutlineComponent, RefreshOutlineComponent],
  templateUrl: "./template-ref.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
})
export default class TemplateRefComponent {
  @ViewChild("listItems", { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild("listItemTemplate", { read: TemplateRef }) listItemTemplate!: TemplateRef<unknown>;

  counter = 0;
  itemViewRefs: Map<string, EmbeddedViewRef<unknown>> = new Map();

  addItem() {
    const name = `Item ${++this.counter}`;
    const vr = this.container?.createEmbeddedView(this.listItemTemplate, { name });
    this.itemViewRefs.set(name, vr);
  }
}
