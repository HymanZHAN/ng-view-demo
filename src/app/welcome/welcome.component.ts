import { AsyncPipe, NgForOf } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { ExerciseItem, WelcomeService } from "./welcome.service";
import { FormsModule } from "@angular/forms";
import { first } from "rxjs";

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
      <div class="form-control" *ngFor="let item of exercises">
        <label class="cursor-pointer label">
          <span class="label-text">{{ item.name }}</span>
          <input
            type="checkbox"
            [(ngModel)]="item.checked"
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
  exercises: ExerciseItem[] = [];

  private service: WelcomeService;
  sub: any;

  constructor() {
    this.service = inject(WelcomeService);
    this.sub = this.service.exercises$.pipe(first()).subscribe((e) => (this.exercises = e));
  }

  toggleItem(item: ExerciseItem) {
    this.service.checkExercise.next(item.name);
  }
}
