import {
  ChangeDetectionStrategy,
  Component,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ArrowDownOutlineComponent,
  PlusOutlineComponent,
  RefreshOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";
import { ArchiveBoxArrowDownOutlineComponent } from "@components/icons/archive-box-arrow-down-outline.component";
import { ArrowUturnLeftOutlineComponent } from "@components/icons/arrow-uturn-left-outline.component";

@Component({
  selector: "app-reuse-views",
  standalone: true,
  imports: [
    CommonModule,
    PlusOutlineComponent,
    TrashOutlineComponent,
    ArchiveBoxArrowDownOutlineComponent,
    ArrowUturnLeftOutlineComponent,
    ArrowDownOutlineComponent,
    RefreshOutlineComponent,
  ],
  templateUrl: "./reuse-views.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReuseViewsComponent {
  selectedItem: string = "";

  @ViewChild("listItems", { read: ViewContainerRef }) private container!: ViewContainerRef;
  @ViewChild("listItemTemplate", { read: TemplateRef })
  private listItemTemplate!: TemplateRef<unknown>;

  private counter = 0;
  private selectedItemView: EmbeddedViewRef<unknown> | undefined;
  private detachedItemView: ViewRef | undefined;
  private viewRefMap: Map<string, EmbeddedViewRef<unknown>> = new Map();

  selectItem(value: string) {
    this.selectedItem = value;
    this.selectedItemView = this.viewRefMap.get(value);
  }

  addItem() {
    const name = `Item ${++this.counter}`;
    const evr = this.container?.createEmbeddedView(this.listItemTemplate, { name });

    this.viewRefMap.set(name, evr);
  }

  removeItem() {
    if (this.selectedItemView) {
      const selectedIndex = this.container.indexOf(this.selectedItemView);
      this.viewRefMap.delete(`Item ${selectedIndex + 1}`);
      this.container.remove(selectedIndex);
    }
  }

  insertItemBefore() {
    if (this.selectedItemView && this.detachedItemView) {
      const currentIndex = this.container.indexOf(this.selectedItemView);
      this.container.insert(this.detachedItemView, currentIndex);
      this.detachedItemView = undefined;
    }
  }

  detachItem() {
    if (this.selectedItemView) {
      const currentIndex = this.container.indexOf(this.selectedItemView);
      this.detachedItemView = this.container.detach(currentIndex) || undefined;
    }
  }

  reset() {
    this.container.clear();

    this.counter = 0;
    this.viewRefMap = new Map();
    this.selectedItem = "";
    this.selectedItemView = undefined;
  }
}
