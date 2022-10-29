import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApuracaoService } from '../services/apuracao.service';
import { CardCandidatosModule } from '../components/card-candidatos/card-candidatos.module';
import { HomepageComponent } from './homepage.component';
import { HeaderModule } from '../components/header/header.module';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CardCandidatosModule,
    HeaderModule,
    MatCardModule,
    NgxChartsModule,
    MatIconModule,
    FormsModule
  ],
  declarations: [HomepageComponent],
  exports: [HomepageComponent],
  providers: [ApuracaoService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageModule { }
