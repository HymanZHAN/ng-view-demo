import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CardComponent } from "src/app/components/card/card.component";

@Component({
  selector: "app-view-ref",
  standalone: true,
  imports: [RouterLink, CardComponent],
  template: `
    <app-card>
      <ng-container title>What is a view?</ng-container>
      <ng-container body>
        <p>
          The smallest grouping of display elements that can be
          <strong>created and destroyed together</strong>.
        </p>
        <p>A component class and its associated template define a view.</p>
      </ng-container>
    </app-card>

    <app-card>
      <ng-container title>What are some characteristics?</ng-container>
      <ng-container body>
        <p>
          Properties of elements in a view can change dynamically, in response to user actions; the
          structure (number and order) of elements in a view <strong class="bg-red-200">cannot</strong>.
        </p>
        <p>
          You can change the structure of elements by inserting, moving, or removing nested views
          within their
          <a routerLink="/view-container-ref" class="link-primary">view containers</a>.
        </p>
        <p>
          View hierarchies can be loaded and unloaded dynamically as the user navigates through the
          application, typically under the control of a router.
        </p>
      </ng-container>
    </app-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewRefComponent {}
