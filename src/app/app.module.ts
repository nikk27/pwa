import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { DocsComponent } from './docs/docs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const MATERIAL_IMPORTED_LIST = [
  //Several module import
  MatStepperModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule,
  MatProgressBarModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    DocsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    FormsModule,
    MATERIAL_IMPORTED_LIST
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
