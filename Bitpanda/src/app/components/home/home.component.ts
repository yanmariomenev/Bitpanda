import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription  } from 'rxjs';
import { currencyDataService } from 'src/app/core/services/currencyData.service';
import { DataEntity, IData, IData1, IDataFromCrypto, test1 } from '../shared/models/ICryptoData.model';
import { Attributes, Attributes8, data123, Data, CommoditiesEntity } from '../shared/models/ITestData.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  posts: any;
  name1: any;
  datas: Data;
  sub$: Subscription;
  testData: any;
  cryptoArray: DataEntity[];

  commoArray: any;
  
  weData : Data;
  atributeData : any;
  getAll : any;

  constructor(private currencyService: currencyDataService) { }

  ngOnInit(): void {
    // this.currencyService.GetTestData().subscribe((data: Data) => 
    // {console.log(data); this.weData = data;});

   this.currencyService.GetAllCryptoCoins().subscribe((data: IDataFromCrypto) => 
    {console.log(data.data); this.cryptoArray = data.data;});


    this.currencyService.GetAllCommodities().subscribe((comoData: any) => 
    {console.log(comoData); comoData = comoData;});

    this.currencyService.GetAllAttributes().subscribe((data: any) => 
    {console.log(data); this.getAll = data;});


    // this.currencyService.GetAttributes().subscribe((data: any) => 
    // {console.log(data); this.atributeData = data;});

    // this.currencyService.GetTestData().subscribe((data: Data[]) => 
    // {console.log(data); this.weData = data;})

    // this.currencyService.GetTestData().subscribe((data: any[]) => 
    // {console.log(data); this.weData = data;})

    // this.currencyService.getCryptoData().subscribe(data =>{this.datas = data});
  //  this.currencyService.getCryptoData().subscribe((d) => this.datas = d);
    // console.log(this.datas);
    // this.sub$ = this.currencyService.GetTestData().subscribe((data) => {this.sub$ = data});
    // console.log(this.sub$)
    // this.sub$ = this.currencyService.GetTestData().subscribe((a) => {this.testData = a});
  }
  getData(){
    // this.currencyService.getCryptoData().subscribe(data =>{this.datas = data});
    // console.log(this.datas);
    // this.sub$ = this.currencyService.GetTestData().subscribe(a => this.testData = a);
    // console.log(this.testData)

    this.currencyService.GetTestData().subscribe((data: Data) => 
    {console.log(data); this.weData = data;})

    }
  getPosts(){
   this.posts = this.currencyService.getPosts();
   console.log(this.posts);
  }
}
