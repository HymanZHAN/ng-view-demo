import { isPlatformBrowser } from "@angular/common";
import { Component, inject, Inject, OnInit, PLATFORM_ID } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = "view-demo";
  platformId: Object;
  storageKey = "selectedTab";

  private _selectedIndex = 0;
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value: number) {
    this._selectedIndex = value;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, value.toString());
    }
  }

  constructor() {
    this.platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(this.platformId)) {
      this.selectedIndex = Number(localStorage.getItem(this.storageKey));
    }
  }
}
