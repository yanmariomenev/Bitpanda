import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AssetsDataSource, AssetsItem } from './assets-datasource';
import data from '../../core/data/masterdata/masterdata.json';
import { ICryptoData, test1 } from '../shared/models/ICryptoData.model';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<AssetsItem>;
  dataSource: AssetsDataSource;
  test: test1;
  dataPath : any;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['#','img','name','price','marketCap', 'change'];
  ngOnInit() {
     this.dataPath = data.data.attributes.cryptocoins.map((data)=> data['attributes']);

     const fake : any = data.data.attributes.cryptocoins.map((data)=> data['attributes']);
  
    this.dataSource = new AssetsDataSource();
    console.log(this.dataPath);
    console.log(this.test);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
