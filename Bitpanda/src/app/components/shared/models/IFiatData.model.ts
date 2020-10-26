export interface IFiatData {
    data?: (FiatDataEntity)[] | null;
  }
  export interface FiatDataEntity {


    default_sell_amount: string;
    has_wallets: boolean;
    logo: string;
    logo_color: string;
    logo_dark: string;
    logo_white: string;
    name: string;
    numeric_character_reference: string;
    min_withdraw_euro: string;
    precision: number;
    symbol: string;
    symbol_character: string;
    to_eur_rate: string;
    wallet_min_withdrawal: string;
    name_deu: string;
    name_eng: string;
    name_fra: string;
    name_ita: string;
    name_spa: string;
    name_tur: string;
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
  


