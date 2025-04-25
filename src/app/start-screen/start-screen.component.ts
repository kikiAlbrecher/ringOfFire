import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})

export class StartScreenComponent {
  newGame() {
    window.location.href = "/game";
  }
}


