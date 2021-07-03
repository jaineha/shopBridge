import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatDialogRef, MatFormFieldModule, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';

import { InventoryComponent } from './inventory.component';

describe('InventoryComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;
  const dialogMock = {​​​​
    close: () => {​​​​ }​​​​
   }​​​​;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule, FormsModule, MatCardModule, MatDialogModule, HttpClientModule
      ],
      declarations: [ InventoryComponent ],
      providers: [ {
        provide: MatDialogRef,
        useValue: dialogMock
      },
      { provide: MAT_DIALOG_DATA, useValue: [] },
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    component.data = {
      value: 'edit',
      data :{
      id: 1,
      name: "test",
      description: "demo",
      price: "1",
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onsubmit edit', () => {
    let event = 'edit';
    component.dataSource = {
      'tableData': [{
        id: 1,
        name: "test",
        description: "demo",
        price: "1",
      }]
    }
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onSubmit(event);
  expect(spy).toHaveBeenCalled();
  });

  it('onsubmit new', () => {
    let event = 'new';
    component.dataSource = {
      'tableData': [{
        id: 1,
        name: "test",
        description: "demo",
      }]
    }
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.onSubmit(event);
  expect(spy).toHaveBeenCalled();
  });

  it('unsubscribes when destoryed', () => {
    fixture.detectChanges();
    component.subscribe = new Subscription();
    let spy = spyOn(component.subscribe, 'unsubscribe');
    component.ngOnDestory();
    expect(spy).toHaveBeenCalled();
});

});
