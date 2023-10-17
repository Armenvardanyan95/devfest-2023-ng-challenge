import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="header">
      <a [routerLink]="['first']" routerLinkActive="active">First page</a>
      <a [routerLink]="['second']" routerLinkActive="active">Second page</a>
      <a [routerLink]="['third']" routerLinkActive="active">Third page</a>
    </div>
    <router-outlet />
  `,
})
export class AppComponent {
  title = "angular-quiz";
}
