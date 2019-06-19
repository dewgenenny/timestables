import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {BREAKPOINTS, DEFAULT_BREAKPOINTS, FlexLayoutModule} from '@angular/flex-layout';

import {CustomBreakPointsProvider} from './breakpoints/custom-breakpoints';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TablegeneratorComponent } from './tablegenerator/tablegenerator.component';
import { FooterComponent } from './footer/footer.component';
import { QuizComponent } from './quiz/quiz.component';

export const BreakPointsProvider = {
  provide: BREAKPOINTS,
  useValue: DEFAULT_BREAKPOINTS,
  multi: true
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablegeneratorComponent,
    FooterComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatSliderModule,
    FormsModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [CustomBreakPointsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
