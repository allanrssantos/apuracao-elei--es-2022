import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

import { CardCandidatosComponent } from './card-candidatos.component';
import { IConfig, NgxMaskModule } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [CardCandidatosComponent],
  exports: [CardCandidatosComponent],
  imports: [
  CommonModule,
  MatCardModule,
  MatProgressBarModule,
  MatGridListModule,
  MatTooltipModule,
  MatDividerModule,
  NgxMaskModule.forRoot(maskConfig),
  ],
})
export class CardCandidatosModule { }
