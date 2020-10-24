import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription, forkJoin   } from 'rxjs';
import { currencyDataService } from 'src/app/core/services/currencyData.service';
import { DataEntity, IData, IData1, IDataFromCrypto, test1 } from '../shared/models/ICryptoData.model';
import { Attributes, Attributes8, data123, Data, CommoditiesEntity } from '../shared/models/ITestData.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {

 
  
  displayedColumns: string[] = ['#','logo','name','price','marketCap', 'change','action'];
  
  posts: any;
  sub$: Subscription;
  testData: any;
  cryptoData : DataEntity[];
  commoditiesData :DataEntity[];
  bindCrypto : DataEntity[];
  commoArray: any;
  imagePath: string;
  weData : Data;
  atributeData : any;
  getAll : any;

  request1:any;
  request2:any;
  request3:any;
  request4:any;

  constructor(private currencyService: currencyDataService) { }

  ngOnInit(): void {
  
   this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
    {console.log(data.data); this.cryptoData  = data.data;});

    this.currencyService.GetAllCommodities().subscribe((data: IDataFromCrypto) => 
    {console.log(data.data); this.commoditiesData  = data.data;});

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

      console.log(result, ' from result')
      this.bindCrypto = this.request1;
      // this.bindCrypto.push(this.request2)

      console.log(this.bindCrypto, 'from fork');
  });

   
  }
  
  calculatePercentage = function(changedValue: number, avgValue: number){
    return ((changedValue / avgValue)* 100).toFixed(2);
   }
   
}
