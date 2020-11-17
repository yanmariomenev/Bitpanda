import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { currencyDataService } from 'src/app/core/services/currencyData.service';
import { DataEntity,IDataFromCrypto} from '../shared/models/IDataFromService.model';
import { FiatDataEntity, IFiatData } from '../shared/models/IFiatData.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {

 //Simple data table made with Material and open for extension if needed.
  
  displayedColumns: string[] = ['#','logo','name','price','marketCap', 'change','action'];
  currencyData : DataEntity[];
  fiatData: FiatDataEntity[];
  calucaltedPrice: number;
  dataSource : MatTableDataSource<DataEntity>;

  constructor(private currencyService: currencyDataService) { }

  ngOnInit(): void {

    this.getCryptoCurrencies();
    // Three of the fiats are not loading logo's returning 403. Replaced them with material icon for now.
    this.getFiats();
  }
  
  calculatePercentage = function(changedValue: number, avgValue: number){
    this.calucaltedPrice = ((changedValue / avgValue)* 100).toFixed(2);
    return this.calucaltedPrice;
   }

   getColor(change , avgPrice){
    this.calculatePercentage(change , avgPrice)
     return this.calucaltedPrice > 0 ? 'green' : 'red';
   }
   //Can be split in separate components
   getCommodities(){
    this.currencyService.GetAllCommodities().subscribe((data: IDataFromCrypto) => 
    {
      this.dataSource = new MatTableDataSource(this.currencyData = data.data);
      // this.currencyData  = data.data;
    });
   }

   getCryptoCurrencies(){
    this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
    { 
      this.dataSource = new MatTableDataSource(this.currencyData = data.data);});
       // this.currencyData  = data.data;
   }

   getIndexes(){
    this.currencyService.GetAllIndexes().subscribe((data: any) => 
    { 
      this.dataSource = new MatTableDataSource(this.currencyData = data.data);});
      // this.currencyData  = data.data;
   }

   getFiats(){
    this.currencyService.GetAllFiats().subscribe((data: IFiatData) => 
    {this.fiatData  = data.data;});
   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();}
    
}
