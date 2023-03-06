import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import {
  ArrowDownOutlineComponent,
  ArrowUpOutlineComponent,
  PlusOutlineComponent,
  TrashOutlineComponent,
  RefreshOutlineComponent,
} from "@components/icons";

@Component({
  selector: "app-create-embedded-view",
  standalone: true,
  templateUrl: "./create-embedded-view.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    PlusOutlineComponent,
    TrashOutlineComponent,
    ArrowUpOutlineComponent,
    ArrowDownOutlineComponent,
    RefreshOutlineComponent,
  ],
})
export default class CreateEmbeddedViewComponent {
  @ViewChild("listItems", { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild("listItemTemplate", { read: TemplateRef }) listItemTemplate!: TemplateRef<unknown>;

  counter = 0;
  selectedItem: string = "";
  selectedItemView: EmbeddedViewRef<unknown> | undefined;
  itemViewRefs: Map<string, EmbeddedViewRef<unknown>> = new Map();

  selectItem(value: string) {
    this.selectedItem = value;
    this.selectedItemView = this.itemViewRefs.get(value);
  }

  addItem() {
    const name = `Item ${++this.counter}`;
    const vr = this.container?.createEmbeddedView(this.listItemTemplate, { name });
    this.itemViewRefs.set(name, vr);
  }

  removeItem() {
    if (this.selectedItemView) {
      const selectedIndex = this.container.indexOf(this.selectedItemView);
      this.container.remove(selectedIndex);
    }
  }

  moveItemUp() {
    if (this.selectedItemView) {
      const currentIndex = this.container.indexOf(this.selectedItemView);
      this.container.move(this.selectedItemView, currentIndex === 0 ? 0 : currentIndex - 1);
    }
  }

  moveItemDown() {
    if (this.selectedItemView) {
      const currentIndex = this.container.indexOf(this.selectedItemView);
      const totalLength = this.container.length;

      this.container.move(
        this.selectedItemView,
        currentIndex === totalLength - 1 ? totalLength - 1 : currentIndex + 1
      );
    }
  }

  reset() {
    this.container.clear();

    this.counter = 0;
    this.itemViewRefs = new Map();
    this.selectedItem = "";
    this.selectedItemView = undefined;
  }
}
