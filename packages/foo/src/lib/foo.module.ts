import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListenerService } from './listener.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    ListenerService
  ]
})
export class FooModule {}
