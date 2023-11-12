import { Injectable, signal } from "@angular/core";

export interface ExerciseItem {
  name: string;
  checked: boolean;
}

@Injectable({
  providedIn: "root",
})
export class WelcomeService {
  // source
  exercises = [
    signal({ name: "ElementRef", checked: false }),
    signal({ name: "ViewRef", checked: false }),
    signal({ name: "TemplateRef", checked: false }),
    signal({ name: "ViewContainerRef", checked: false }),
  ];

  toggleItem(item: ExerciseItem) {
    this.exercises
      .find((i) => i().name === item.name)
      ?.update((i) => ({ ...i, checked: !i.checked }));
  }
}
