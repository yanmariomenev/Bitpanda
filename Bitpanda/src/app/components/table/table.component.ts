import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { currencyDataService } from 'src/app/core/services/currencyData.service';
import { Data } from '../shared/models/ITestData.model';
import { TableDataSource, TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<TableItem>;
  datas: Data;

  dataSource: TableDataSource;
  newData: any;
  /**
   *
   */

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id','name'];
  /**
   *
   */
  constructor(private currencyService: currencyDataService) {
  }

  ngOnInit() {
    
  // this.cryptoService.getCryptoData().subscribe(data =>{this.datas = data});
  this.currencyService.GetAllCryptoCoins().subscribe((data: any) => 
  {console.log(data); this.newData = data;});
     this.dataSource = new TableDataSource();
    // console.log(this.datas)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
