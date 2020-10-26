import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import {map} from 'rxjs/operators';
import {Data, ICurrencyData, CryptocoinsEntity, CommoditiesEntity, IndexesEntity, FiatsEntity } from 'src/app/components/shared/models/ICurrencyData.model';

const apiDataUrl : string = 'https://api.bitpanda.com/v1/masterdata';

@Injectable({
    providedIn: 'root'
  })

export class currencyDataService{

    constructor(private http: HttpClient){}
    
    GetAllCryptoCoins(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : ICurrencyData) => {return{data : data.data.attributes.cryptocoins.map(( data:CryptocoinsEntity)=>data.attributes)}})
            );
    }

    GetAllCommodities(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : ICurrencyData) => {return{data: data.data.attributes.commodities.map(( data:CommoditiesEntity)=>data.attributes)}})
            );
    }

    GetAllIndexes(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : ICurrencyData) => {return{data: data.data.attributes.indexes.map((data: IndexesEntity)=> data.attributes)}})
            );
    }

    GetAllFiats(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : ICurrencyData) => {return{data: data.data.attributes.fiats.map((data: FiatsEntity) => data.attributes)}})
            );
    }
    
    GetAllAttributes(){
        return this.http.get('https://api.bitpanda.com/v1/masterdata')
        .pipe(
            map((data : ICurrencyData) => {return{data: data.data.attributes}})
            );
    }
}

