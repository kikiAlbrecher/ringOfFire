import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-description',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-description.component.html',
  styleUrl: './game-description.component.scss'
})
export class GameDescriptionComponent implements OnChanges {
  @Input() card: string = '';

  title: string = '';
  description: string = '';

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one.' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Thumbmaster', description: 'Turn around quickly and stretch your left arm horizontally (with flat hand). The person, you point at, when you stop, has to drink.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Quizmaster', description: 'Choose a rule by your own / repeat the last action.' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.' },
  ];

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}