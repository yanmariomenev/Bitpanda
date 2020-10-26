import { Component, OnInit } from '@angular/core';
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
  
  dataSource : DataEntity[];
  fiatData: FiatDataEntity[];
  calucaltedPrice: number;


  constructor(private currencyService: currencyDataService) { }

  ngOnInit(): void {
    this.getCryptoCurrencies()
    // Three of the fiats are not loading logo's returning 403. Replaced them with material icon for now.
    this.getFiats();
  }
  
  calculatePercentage = function(changedValue: number, avgValue: number){
    this.calucaltedPrice = ((changedValue / avgValue)* 100).toFixed(2);
    return this.calucaltedPrice;
   }
   //Can be split in separate components
   getCommodities(){
    this.currencyService.GetAllCommodities().subscribe((data: IDataFromCrypto) => 
    {this.dataSource  = data.data;});
    
   }
   getCryptoCurrencies(){
    this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
    { this.dataSource  = data.data;});
   }
   getIndexes(){
    this.currencyService.GetAllIndexes().subscribe((data: any) => 
    { this.dataSource  = data.data;});
   }
   getFiats(){
    this.currencyService.GetAllFiats().subscribe((data: IFiatData) => 
    {this.fiatData  = data.data;});
   }

}
