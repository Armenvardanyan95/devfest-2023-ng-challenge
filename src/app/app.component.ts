import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <a [routerLink]="['first']">First page</a>
    <a [routerLink]="['second']">Second page</a>
    <a [routerLink]="['third']">Third page</a>
    <router-outlet />
  `,
})
export class AppComponent {
  title = "angular-quiz";
}
