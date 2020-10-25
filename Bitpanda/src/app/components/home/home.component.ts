import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription, forkJoin   } from 'rxjs';
import { currencyDataService } from 'src/app/core/services/currencyData.service';
import { DataEntity, IData, IData1, IDataFromCrypto, test1 } from '../shared/models/ICryptoData.model';
import { Attributes, Attributes8, data123, Data, CommoditiesEntity, Attributes11 } from '../shared/models/ITestData.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {

 
  
  displayedColumns: string[] = ['#','logo','name','price','marketCap', 'change','action'];
  
  dataSource : DataEntity[];
  commoditiesData :DataEntity[];
  bindCrypto : DataEntity[];
  fiatData: DataEntity[];


  request1:any;
  request2:any;
  request3:any;
  request4:any;

  constructor(private currencyService: currencyDataService) { }

  ngOnInit(): void {
  
  //  this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
  //   {console.log(data.data); this.dataSource  = data.data;});
    this.getCryptoCurrencies()

    this.currencyService.GetAllFiats().subscribe((data: any) => 
    {this.fiatData  = data.data;});

    forkJoin(
      [this.currencyService.GetAllCryptoCoins(),
         this.currencyService.GetAllCommodities(),
          this.currencyService.GetAllFiats(),
          this.currencyService.GetAllIndexes(),])
    .subscribe(result => {
      this.request1 = result[0].data;
      this.request2 = result[1].data;
      this.request3 = result[2].data;
      this.request4 = result[3].data;

      this.bindCrypto = this.request1;
      // this.bindCrypto.push(this.request2)

  });

   
  }
  
  calculatePercentage = function(changedValue: number, avgValue: number){
    return ((changedValue / avgValue)* 100).toFixed(2);
   }

   getCommodities(){
    this.currencyService.GetAllCommodities().subscribe((data: IDataFromCrypto) => 
    {this.dataSource  = data.data;});
   }
   getCryptoCurrencies(){
    this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
    { this.dataSource  = data.data;});
   }
   getIndexes(){
    // Create interface
    this.currencyService.GetAllIndexes().subscribe((data: any) => 
    { this.dataSource  = data.data;});
   }
  //  getFiats(){
  //   this.dataSource = [];
  //    // Create interface
  //   this.currencyService.GetAllFiats().subscribe((data: any) => 
  //   {console.log(this.dataSource, 'from fiat'); this.dataSource  = data.data;});
  //  }
   
}
