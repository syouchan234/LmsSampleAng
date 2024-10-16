import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginformComponent } from "./component/loginform/loginform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lmsangpro';
}
