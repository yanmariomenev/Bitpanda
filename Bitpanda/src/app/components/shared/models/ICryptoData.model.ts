import { TmplAstTextAttribute } from '@angular/compiler';

export interface ICryptoData {
    // type : string;
    // id : string;
    attributes : test1[];
    // attributes : [test1];
    // symbol : string;
    // name : string;
    // avg_price : number;
    // change_24h_amount : string;
    // logo : string;
    // circulating_supply : string;
}
export interface test1{
     symbol : string;
     name : string;
     avg_price : string;
     change_24h_amount : string;
     logo : string;
     circulating_supply : string;
}
export interface IData {
    data: IData1[];
}
export interface IData1 {
    type: string;
    attributes:  Iattribute[];

}
export interface Iattribute {
    cryptocoins: Icryptocoins[];

}
export interface Icryptocoins {
    type: string;
    attributes: Iattribute[];
    id: string;

}
export interface Iattribute {
    type: string;
    attributes: Iattributes;
    id: string;
  }
export interface Iattributes {
    symbol : string;
    name : string;
    avg_price : string;
    change_24h_amount : string;
    logo : string;
    circulating_supply : string;
}
export interface IDataFromCrypto {
    data?: (DataEntity)[] | null;
  }
  export interface DataEntity {
    symbol: string;
    name: string;
    sort: number;
    asset_type_name: string;
    asset_group_name: string;
    url_check_address: string;
    url_check_transaction: string;
    buy_active: boolean;
    sell_active: boolean;
    withdraw_active: boolean;
    deposit_active: boolean;
    transfer_active: boolean;
    available: boolean;
    maintenance_enabled: boolean;
    min_buy_eur: string;
    min_sell_eur: string;
    min_withdraw_eur: string;
    default_sell_amount: string;
    precision_for_fiat_price: number;
    precision_for_coins: number;
    precision_for_tx: number;
    precision_for_internal: number;
    wallet_min_deposit: string;
    wallet_small_deposit: string;
    wallet_small_deposit_fee: string;
    avg_price: string;
    color: string;
    wallet_withdraw_fee: string;
    change_24h: string;
    change_24h_amount: string;
    change_1w: string;
    change_1w_amount: string;
    change_1m: string;
    change_1m_amount: string;
    change_1y: string;
    change_1y_amount: string;
    logo: string;
    logo_dark: string;
    support_destination_tag: boolean;
    android_supported_version?: string | null;
    ios_supported_version?: string | null;
    circulating_supply: string;
    allowed_unverified: boolean;
    allowed_documented: boolean;
    allowed_verified: boolean;
    ieo_phases?: (IeoPhasesEntity | null)[] | null;
    index_only: boolean;
    info: string;
    unavailable_reason: string;
    maintenance_reason: string;
    wallet_info: string;
    extra_info: string;
    investment_info: string;
    info_integration: string;
    info_deu: string;
    info_eng: string;
    info_fra: string;
    info_ita: string;
    info_spa: string;
    info_tur: string;
    unavailable_reason_deu: string;
    unavailable_reason_eng: string;
    unavailable_reason_fra: string;
    unavailable_reason_ita: string;
    unavailable_reason_spa: string;
    unavailable_reason_tur: string;
    maintenance_reason_deu: string;
    maintenance_reason_eng: string;
    maintenance_reason_fra: string;
    maintenance_reason_ita: string;
    maintenance_reason_spa: string;
    maintenance_reason_tur: string;
    wallet_info_deu: string;
    wallet_info_eng: string;
    wallet_info_fra: string;
    wallet_info_ita: string;
    wallet_info_spa: string;
    wallet_info_tur: string;
    extra_info_deu: string;
    extra_info_eng: string;
    extra_info_fra: string;
    extra_info_ita: string;
    extra_info_spa: string;
    extra_info_tur: string;
    investment_info_deu: string;
    investment_info_eng: string;
    investment_info_fra: string;
    investment_info_ita: string;
    investment_info_spa: string;
    investment_info_tur: string;
    info_integration_deu: string;
    info_integration_eng: string;
    info_integration_fra: string;
    info_integration_ita: string;
    info_integration_spa: string;
    info_integration_tur: string;
    family?: string | null;
  }
  export interface IeoPhasesEntity {
    type: string;
    attributes: Attributes;
    id: string;
  }
  export interface Attributes {
    name: string;
    phase_number: number;
    start_date: StartDateOrEndDate;
    end_date: StartDateOrEndDate;
    max_stock: string;
    price: string;
    active: boolean;
  }
  export interface StartDateOrEndDate {
    date_iso8601: string;
    unix: string;
  }
  


