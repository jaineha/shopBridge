import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';
import { InventoryComponent } from '../inventory/inventory.component';
import { OrderPipe } from 'ngx-order-pipe';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  public id = "ID";
  public name = "Name";
  public description = "Description";
  public price = "Price";
  public dataSourceTable = [];
  public subscribe; subscribe2;
  public pageIndex = 0;
  totalElements: any;
  displayedColumns: string[] = [
    'ID',
    'Name',
    'Description',
    'Price',
    'ACTION'
  ];

  sort = {
    column: 'ID',
    descending: true
  };

  constructor(public dialogRef: MatDialogRef<LandingViewComponent>,
    public dialog: MatDialog,
    public appService: AppService,
    public spinner: NgxSpinnerService,
    private orderPipe: OrderPipe
    ) {
      this.dataSourceTable = orderPipe.transform(this.dataSourceTable, 'Id', true);}

  ngOnInit() {
    this.subscribe = this.appService.tableData().subscribe(data => {
      this.dataSourceTable = data.tableData;
      this.appService.data(data);
    });
    this.selectedCls('Id')
    this.changeSorting('Id');
  }

  selectedCls(column) {
    return column == this.sort.column && 'sort-' + this.sort.descending;
  };

  changeSorting(column) {
    if (this.sort.column == column) {
      this.sort.descending = !this.sort.descending;
    }
    this.sort.column = column;
  };

  newInventory(value, element) {
    this.dataSourceTable = [];
    let dialogRef = this.dialog.open(InventoryComponent, {
      data: {
        value: value,
        data: element
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.spinner.show();
      this.subscribe2 = this.appService.allInventoryData.subscribe(data => {
        this.dataSourceTable = data['tableData'];
        this.spinner.hide();
      });
    });
  }

  deleteInventory( data ){
    this.dataSourceTable= this.dataSourceTable.filter((element) => {
      return element.id !== data.id;
    });
  }

  ngOnDestory() {
    this.subscribe.unsubscribe();
    this.subscribe2.unsubscribe();
  }

}
