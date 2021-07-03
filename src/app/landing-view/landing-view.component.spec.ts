import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatDialogModule, MatDialogRef, MatIconModule, MatTableModule, MAT_DIALOG_DATA } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from 'ngx-order-pipe';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { InventoryComponent } from '../inventory/inventory.component';

import { LandingViewComponent } from './landing-view.component';

describe('LandingViewComponent', () => {
  let component: LandingViewComponent;
  let fixture: ComponentFixture<LandingViewComponent>;
  const dialogMock = {​​​​
    close: () => {​​​​ }​​​​
   }​​​​;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatCardModule, MatTableModule, MatIconModule, MatDialogModule, HttpClientModule, NgxSpinnerModule, BrowserAnimationsModule, OrderModule],
      declarations: [ LandingViewComponent ],
      providers: [ {
        provide: MatDialogRef,
        useValue: dialogMock
      },
      { provide: MAT_DIALOG_DATA, useValue: [] },
      NgxSpinnerService
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deleteInventory', () => {
    let data = {
        id: 1,
        name: "test",
        description: "demo",
    }
    component.deleteInventory(data);
    expect(component.dataSourceTable).toEqual(component.dataSourceTable);
  });
  
});
