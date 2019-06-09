import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TablegeneratorComponent } from './tablegenerator/tablegenerator.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablegeneratorComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, MatCheckboxModule, MatMenuModule,BrowserAnimationsModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
