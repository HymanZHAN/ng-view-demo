import { Injectable, WritableSignal, signal } from "@angular/core";
import { BehaviorSubject, combineLatest, map, scan, Subject } from "rxjs";

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

  // private checkedExercises = new BehaviorSubject<Set<string>>(new Set());

  // readonly checkExercise = new Subject<string>();

  // // presentation
  // exercises$ = combineLatest([this.exercises, this.checkedExercises]).pipe(
  //   map(([a, b]) =>
  //     a.map((i) => ({ name: i, checked: b.has(i) } as ExerciseItem))
  //   )
  // );

  constructor() {
    // this.checkExercise
    //   .pipe(
    //     scan((a, b) => {
    //       a.has(b) ? a.delete(b) : a.add(b);
    //       return a;
    //     }, new Set<string>())
    //   )
    //   .subscribe(this.checkedExercises);
  }

  toggleItem(item: ExerciseItem) {
    this.exercises
      .find((item) => item().name === item.name)
      ?.set({ ...item, checked: !item.checked });
  }
}
