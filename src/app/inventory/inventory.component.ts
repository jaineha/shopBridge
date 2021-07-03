import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public inventoryData;
  public inventoryId;
  public inventoryName;
  public description;
  public inventoryPrice;
  public dataSource; subscribe;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<InventoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appService: AppService
  ) { }

  ngOnInit() {
    this.inventoryData = Object.assign({}, this.data);
    if (this.inventoryData.value == "edit") {
      let indata = this.inventoryData.data;
      this.inventoryId = indata.id;
      this.inventoryName = indata.name;
      this.inventoryPrice = indata.price;
      this.description = indata.description;
    }
    this.subscribe = this.appService.allInventoryData.subscribe(data => {
      this.dataSource = data;
    });
  }

  onSubmit(formType) {
    if ((this.inventoryName && this.inventoryPrice && this.description) != null) {
      var indata = {
        id: this.dataSource.tableData.length + 1,
        name: this.inventoryName,
        description: this.description,
        price: this.inventoryPrice
      };
      if (formType === 'new') {
        this.dataSource.tableData.push(indata);
        this.appService.data(this.dataSource);
        this.dialogRef.close();
      }
      if (formType === 'edit') {
        for (let i = 0; i < this.dataSource.tableData.length; i++) {
          if (this.dataSource.tableData[i].id == this.inventoryId) {
            this.dataSource.tableData[i] = indata;
          }
        }
        this.appService.data(this.dataSource);
        this.dialogRef.close();
      }
    }
    else{
      alert("please add required fields");
    }
  }

  ngOnDestory() {
    this.subscribe.unsubscribe();
  }
}
