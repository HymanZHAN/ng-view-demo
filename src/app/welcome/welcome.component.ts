import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-welcome",
  template: `
    <div style="text-align:center">
      <img
        width="200"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
      <div style="display: flex; justify-content: center;">
        <mat-selection-list>
          <mat-list-option
            *ngFor="let item of exercises"
            [(selected)]="item.checked"
            [checkboxPosition]="'before'"
          >
            <code>{{ item.name }}</code>
          </mat-list-option>
        </mat-selection-list>
      </div>
    </div>
  `,
  styles: [],
})
export default class WelcomeComponent {
  exercises = [
    { name: "ElementRef", checked: false },
    { name: "ViewRef", checked: false },
    { name: "ViewContainerRef", checked: false },
    { name: "TemplateRef", checked: false },
  ];
}
