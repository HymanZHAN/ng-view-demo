import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3 class="text-sm mb-2">{{ title }}</h3>
    <div class="badge badge-lg badge-primary w-16">{{ count }}</div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnChanges {
  @Input() id?: number;
  @Input() count: number = 0;
  title: string = "";

  ngOnChanges(): void {
    this.title = this.id ? `Counter ${this.id}` : "";
    console.info(`Counter ${this.id} ngOnChanges called`);
  }
}
