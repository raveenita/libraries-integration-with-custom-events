import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmitterService } from './emitter.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    EmitterService
  ]
})
export class BarModule {
}
