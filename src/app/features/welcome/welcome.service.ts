import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, map, scan, Subject, tap } from "rxjs";

export interface ExerciseItem {
  name: string;
  checked: boolean;
}

@Injectable({
  providedIn: "root",
})
export class WelcomeService {
  // source
  private exercises = new BehaviorSubject<string[]>([
    "ElementRef",
    "ViewRef",
    "TemplateRef",
    "ViewContainerRef",
  ]);

  private checkedExercises = new BehaviorSubject<Set<string>>(new Set());

  readonly checkExercise = new Subject<string>();

  // presentation
  exercises$ = combineLatest([this.exercises, this.checkedExercises]).pipe(
    map(([a, b]) =>
      a.map((i) => ({ name: i, checked: b.has(i) } as ExerciseItem))
    )
  );

  constructor() {
    this.checkExercise
      .pipe(
        scan((a, b) => {
          a.has(b) ? a.delete(b) : a.add(b);
          return a;
        }, new Set<string>())
      )
      .subscribe(this.checkedExercises);
  }
}
