import { NgModule } from '@angular/core';
import { ThemeModule } from '../@theme/theme.module';
import { ChartsModule } from 'ng2-charts';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../@core/core.module';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
PieChartModule
//import { ThemeModule } from '../@theme/theme.module';

import { NgxChartsModule, PieChartModule } from '@swimlane/ngx-charts';
import {
  NbAccordionModule,
  NbButtonModule,
 
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';


@NgModule({

  imports: [
    NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,
    NgxChartsModule,
    PieChartModule,
   CoreModule.forRoot(),
   ChartsModule,
   Ng2SmartTableModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    NbAccordionModule,
    NbButtonModule,
   
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule, NbUserModule,
   /// BrowserAnimationsModule,
    ThemeModule.forRoot(),
   // HttpClientModule,
  ],
  exports:[
    CoreModule,
   // CommonModule,
   ChartsModule,
   NgxChartsModule,
   PieChartModule,
   NbAccordionModule,
   NbButtonModule,
   NbListModule,
   NbRouteTabsetModule,
   NbStepperModule,
   NbTabsetModule, NbUserModule,
   NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule,
   Ng2SmartTableModule,
    NbSidebarModule,
    NbMenuModule,
    NbDatepickerModule,
    NbDialogModule,
    NbWindowModule,
    NbToastrModule,
    NbChatModule,
    ThemeModule,
   //  BrowserAnimationsModule,
  //  HttpClientModule

  ]
})
export class SharedModule { }
