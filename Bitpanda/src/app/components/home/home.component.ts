import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { currencyDataService } from 'src/app/core/services/currencyData.service';
import { DataEntity, IData, IData1, IDataFromCrypto, test1 } from '../shared/models/ICryptoData.model';
import { Attributes, Attributes8, data123, Data, CommoditiesEntity } from '../shared/models/ITestData.model';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {

 
  
  displayedColumns: string[] = ['#','logo','name','price','marketCap', 'change'];
  
  posts: any;
  sub$: Subscription;
  testData: any;
  a : DataEntity[];
  commoArray: any;
  
  weData : Data;
  atributeData : any;
  getAll : any;

  constructor(private currencyService: currencyDataService) { }

  ngOnInit(): void {
  
   this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
    {console.log(data.data); this.a  = data.data;});


    // this.sub$ = this.currencyService.GetTestData().subscribe((data) => {this.sub$ = data});
    // console.log(this.sub$)
    // this.sub$ = this.currencyService.GetTestData().subscribe((a) => {this.testData = a});
  }
  getData(){
    // this.sub$ = this.currencyService.GetTestData().subscribe(a => this.testData = a);
    // console.log(this.testData)

    this.currencyService.GetTestData().subscribe((data: Data) => 
    {console.log(data); this.weData = data;})

    }
  getPosts(){
   this.posts = this.currencyService.getPosts();
   console.log(this.posts);
  }
  calculatePercentage = function(changedValue: number, avgValue: number){
    return ((changedValue / avgValue)* 100).toFixed(2);
   }
}
