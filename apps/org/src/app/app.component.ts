import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiModule } from '@org/ui';
import { SharedModule } from 'asdggsdlib';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,UiModule,SharedModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'org';
}
