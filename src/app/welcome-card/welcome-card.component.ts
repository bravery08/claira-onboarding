import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent {

  pages = [
    {
      text: 'Answer questions about yourself',
      imageName: 'question',
    },
    {
      text: 'Claira creates a profile of your talents and capabilities',
      imageName: 'ball',
    },
    {
      text: 'Your company uses your profile to understand where you fit best',
      imageName: 'lightbulb',
    },
    {
      text: 'Ready to let your talents shine?',
      imageName: 'fish',
    }
  ];
  activePageIndex = 0;
  activePage = this.pages[this.activePageIndex];

  nextButtonClicked() {
    this.activePageIndex++;
    this.activePage = this.pages[this.activePageIndex];
  }

  previousButtonClicked() {
    this.activePageIndex--;
    this.activePage = this.pages[this.activePageIndex];
  }

  arrowButtonClicked(pageIndex: number) {
    this.activePageIndex = pageIndex;
    this.activePage = this.pages[this.activePageIndex];
  }

  getStartedClicked() {
    // Logic for when Get Started button is clicked
  }
}