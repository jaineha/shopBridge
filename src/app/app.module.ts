import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { InventoryComponent } from './inventory/inventory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule ,MatCardModule, MatFormFieldModule, MatTableModule, MatDialogRef, MAT_DIALOG_DATA, 
  MatDialogModule, MatTooltipModule, MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    HttpClientModule,
    NgxSpinnerModule,
    OrderModule
  ],
  providers: [ {
    provide: MatDialogRef,
    useValue: {}
  },
  { provide: MAT_DIALOG_DATA, useValue: [] },
  NgxSpinnerService],
  bootstrap: [AppComponent],
  entryComponents: [
    InventoryComponent
  ]
})      
export class AppModule { }
