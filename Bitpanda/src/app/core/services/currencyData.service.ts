import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable, range } from 'rxjs';
import {map , filter} from 'rxjs/operators';
import { IData, IData1, test1 } from 'src/app/components/shared/models/ICryptoData.model';
import { Attributes, Attributes8, Data, data123, CryptocoinsEntity, CommoditiesEntity } from 'src/app/components/shared/models/ITestData.model';

const apiDataUrl : string = 'https://api.bitpanda.com/v1/masterdata';

@Injectable({
    providedIn: 'root'
  })

export class currencyDataService{

    constructor(private http: HttpClient){}
    
    getCryptoData(){
        return this.http.get<Data>('https://api.bitpanda.com/v1/masterdata');
    }
    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
    GetTestData(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
    }
    GetAttributes(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : any) => {return{data: data.data.attributes.cryptocoins}})
            );
    }
    // data.data.attributes.cryptocoins.map((data)=> data['attributes']);
    GetAllCryptoCoins(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : data123) => {return{data : data.data.attributes.cryptocoins.map(( data:CryptocoinsEntity)=>data.attributes)}})
            );
    }
    // map((data : data123) => {return{data : data.data.attributes.cryptocoins.map(( data:any)=>data['attributes'])}})
    GetAllCommodities(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((comoData : data123) => {return{comoData: comoData.data.attributes.commodities.map(( comoData:any)=>comoData['attributes'])}})
            );
    }
    GetAllIndexes(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : any) => {return{data: data.data.attributes.indexes}})
            );
    }
    GetAllFiats(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : any) => {return{data: data.data.attributes.fiats}})
            );
    }
    GetAllAttributes(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : data123) => {return{data: data.data.attributes}})
            );
    }
}

