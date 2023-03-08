import {
  ChangeDetectionStrategy,
  Component,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  PlusOutlineComponent,
  TrashOutlineComponent,
  ArrowUpOutlineComponent,
  ArrowDownOutlineComponent,
  RefreshOutlineComponent,
} from "@components/icons";

@Component({
  selector: "app-manipulate-embedded-view",
  standalone: true,
  imports: [
    CommonModule,
    PlusOutlineComponent,
    TrashOutlineComponent,
    ArrowUpOutlineComponent,
    ArrowDownOutlineComponent,
    RefreshOutlineComponent,
  ],
  templateUrl: "./manipulate-embedded-view.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ManipulateEmbeddedViewComponent {
  selectedItem: string = "";

  @ViewChild("listItems", { read: ViewContainerRef }) private container!: ViewContainerRef;
  @ViewChild("listItemTemplate", { read: TemplateRef })
  private listItemTemplate!: TemplateRef<unknown>;

  private counter = 0;
  private selectedItemView: EmbeddedViewRef<unknown> | undefined;
  private itemViewRefs: Map<string, EmbeddedViewRef<unknown>> = new Map();

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
      this.itemViewRefs.delete(`Item ${selectedIndex + 1}`);
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
