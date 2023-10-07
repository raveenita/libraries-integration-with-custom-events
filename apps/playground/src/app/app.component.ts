import { ListenerService } from 'foo';
import { EmitterService } from 'bar';
import { BarModule } from 'bar';
import { FooModule } from 'foo';
import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent,FooModule, BarModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground';

  constructor(private readonly emitterService: EmitterService, private readonly listenerService: ListenerService) {
    this.emitterService.emit();
    this.listenerService.receive();
  }
}
