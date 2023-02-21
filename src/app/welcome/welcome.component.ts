import { AsyncPipe, NgForOf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ExerciseItem, WelcomeService } from "./welcome.service";
import { FormsModule } from "@angular/forms";
import { first, Observable } from "rxjs";

@Component({
  selector: "app-welcome",
  standalone: true,
  imports: [NgForOf, AsyncPipe, FormsModule],
  template: `
    <div>
      <ng-content></ng-content>
      <img
        width="200"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
      <div class="form-control" *ngFor="let item of exercises$ | async; trackBy: itemTrackByName">
        <label class="cursor-pointer label">
          <span class="label-text">{{ item.name }}</span>
          <input
            type="checkbox"
            [checked]="item.checked"
            (change)="toggleItem(item)"
            class="checkbox checkbox-primary"
          />
        </label>
      </div>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WelcomeComponent {
  exercises$: Observable<ExerciseItem[]>;
  private service: WelcomeService;

  constructor() {
    this.service = inject(WelcomeService);
    this.exercises$ = this.service.exercises$;
  }

  toggleItem(item: ExerciseItem) {
    this.service.checkExercise.next(item.name);
  }

  itemTrackByName(index: number, item: ExerciseItem) {
    return item.name;
  }
}
