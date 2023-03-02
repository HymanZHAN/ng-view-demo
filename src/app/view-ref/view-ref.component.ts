import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-view-ref",
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="card w-1/2 shadow m-4 align-bottom">
      <section class="card-body">
        <h2 class="card-title">What is a view?</h2>
        <p>
          The smallest grouping of display elements that can be
          <strong>created and destroyed together</strong>.
        </p>
        <p>A component class and its associated template define a view.</p>
      </section>
    </div>
    <div class="card  w-1/2  shadow m-4 align-bottom">
      <section class="card-body">
        <h2 class="card-title">What are some characteristics?</h2>
        <ul>
          <li class="list-item">
            <p>
              Properties of elements in a view can change dynamically, in response to user actions;
              the structure (number and order) of elements in a view <strong>cannot</strong>.
            </p>
          </li>
          <li>
            <p>
              You can change the structure of elements by inserting, moving, or removing nested
              views within their
              <a routerLink="/view-container-ref" class="link-primary">view containers</a>.
            </p>
          </li>
          <li>
            <p>
              View hierarchies can be loaded and unloaded dynamically as the user navigates through
              the application, typically under the control of a router.
            </p>
          </li>
        </ul>
      </section>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export default class ViewRefComponent {}
