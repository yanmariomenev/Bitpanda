export interface data123 {
    data: Data;
  }
  export interface Data {
    type: string;
    attributes: Attributes;
  }
  export interface Attributes {
    // bfc?: (BfcEntity)[] | null;
    // aml?: (AmlEntity)[] | null;
    // best_rewards?: (BestRewardsEntity)[] | null;
    // payout_providers?: (PayoutProvidersEntity)[] | null;
    // asset_types?: (AssetTypesEntity)[] | null;
    // asset_groups?: (null)[] | null;
    commodities?: (CommoditiesEntity)[] | null;
    cryptocoins?: (CryptocoinsEntity)[] | null;
    // stocks?: (null)[] | null;
    indexes?: (IndexesEntity)[] | null;
    fiats?: (FiatsEntity)[] | null;
    // languages?: (LanguagesEntity)[] | null;
    // newsletters?: (NewslettersEntity)[] | null;
    // countries?: (CountriesEntity)[] | null;
    // profile_report_reasons?: (ProfileReportReasonsEntity)[] | null;
    // vip_levels_thresholds?: (VipLevelsThresholdsEntity)[] | null;
  }
  export interface BfcEntity {
    type: string;
    attributes: Attributes1;
  }
  export interface Attributes1 {
    bfc_deduction: string;
    bfc_min_value_eur: number;
    bfc_enabled: boolean;
    bfc_upselling_lower_limit: string;
    bfc_upselling_best_recommended_lower_factor: number;
    bfc_upselling_best_recommended_upper_factor: number;
  }
  export interface AmlEntity {
    type: string;
    attributes: Attributes2;
  }
  export interface Attributes2 {
    aml_active: boolean;
  }
  export interface BestRewardsEntity {
    type: string;
    attributes: Attributes3;
  }
  export interface Attributes3 {
    start_date: StartDateOrNextRewardAtOrEndDate;
    banner_text: string;
    show_banner: boolean;
    next_reward_at: StartDateOrNextRewardAtOrEndDate;
    banner_text_deu: string;
    banner_text_eng: string;
    banner_text_fra: string;
    banner_text_ita: string;
    banner_text_spa: string;
    banner_text_tur: string;
  }
  export interface StartDateOrNextRewardAtOrEndDate {
    date_iso8601: string;
    unix: string;
  }
  export interface PayoutProvidersEntity {
    type: string;
    attributes: Attributes4;
    id: string;
  }
  export interface Attributes4 {
    short_name: string;
    name: string;
    description: string;
    terms: string;
    fiat_provider_details?: (FiatProviderDetailsEntity | null)[] | null;
    fields?: (FieldsEntity | null)[] | null;
    sort: number;
    is_instant: boolean;
    logo: string;
    logo_dark: string;
    enabled: boolean;
    send_enabled: boolean;
    fa_required: boolean;
    name_deu: string;
    name_eng: string;
    name_fra: string;
    name_ita: string;
    name_spa: string;
    name_tur: string;
    description_deu: string;
    description_eng: string;
    description_fra: string;
    description_ita: string;
    description_spa: string;
    description_tur: string;
    terms_deu: string;
    terms_eng: string;
    terms_fra: string;
    terms_ita: string;
    terms_spa: string;
    terms_tur: string;
  }
  export interface FiatProviderDetailsEntity {
    type: string;
    attributes: Attributes5;
    id: string;
  }
  export interface Attributes5 {
    fee_fix: string;
    fee_percent: string;
    fee_max: string;
    fiat_id: string;
    allowed_payout_accounts?: number | null;
  }
  export interface FieldsEntity {
    type: string;
    attributes: Attributes6;
    id: string;
  }
  export interface Attributes6 {
    field_name: string;
    field_type: string;
    alias: string;
    is_primary: boolean;
    is_mandatory: boolean;
    sort: number;
  }
  export interface AssetTypesEntity {
    type: string;
    attributes: Attributes7;
    id: string;
  }
  export interface Attributes7 {
    asset_type_name: string;
    sort: number;
  }
  export interface CommoditiesEntity {
    type: string;
    attributes: Attributes8;
    id: string;
  }
  export interface Attributes8 {
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
    circulating_supply: string;
    allowed_unverified: boolean;
    allowed_documented: boolean;
    allowed_verified: boolean;
    measurement_unit: string;
    ieo_phases?: (null)[] | null;
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
  }
  export interface CryptocoinsEntity {
    type: string;
    attributes: Attributes9;
    id: string;
  }
  export interface Attributes9 {
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
    attributes: Attributes10;
    id: string;
  }
  export interface Attributes10 {
    name: string;
    phase_number: number;
    start_date: StartDateOrNextRewardAtOrEndDate;
    end_date: StartDateOrNextRewardAtOrEndDate;
    max_stock: string;
    price: string;
    active: boolean;
  }
  export interface IndexesEntity {
    type: string;
    attributes: Attributes11;
    id: string;
  }
  export interface Attributes11 {
    symbol: string;
    name: string;
    sort: number;
    asset_type_name: string;
    asset_group_name: string;
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
    avg_price: string;
    color: string;
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
    allowed_unverified: boolean;
    allowed_documented: boolean;
    allowed_verified: boolean;
    index_assets?: (IndexAssetsEntity)[] | null;
    index_provider: string;
    index_original_fiat_symbol: string;
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
  }
  export interface IndexAssetsEntity {
    attributes: Attributes12;
  }
  export interface Attributes12 {
    asset_id: string;
    allocation: string;
    allocation_percentage: string;
  }
  export interface FiatsEntity {
    type: string;
    attributes: Attributes13;
    id: string;
  }
  export interface Attributes13 {
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
  export interface LanguagesEntity {
    type: string;
    attributes: Attributes14;
    id: string;
  }
  export interface Attributes14 {
    fallback: string;
    name: string;
    enabled: boolean;
    iso_alpha_2: string;
    name_deu: string;
    name_eng: string;
    name_fra: string;
    name_ita: string;
    name_spa: string;
    name_tur: string;
  }
  export interface NewslettersEntity {
    type: string;
    attributes: Attributes15;
    id: string;
  }
  export interface Attributes15 {
    name: string;
    sort: number;
    name_deu: string;
    name_eng: string;
    name_fra: string;
    name_ita: string;
    name_spa: string;
    name_tur: string;
  }
  export interface CountriesEntity {
    type: string;
    attributes: Attributes16;
    id: string;
  }
  export interface Attributes16 {
    iso: string;
    name: string;
    phonecode: number;
    numcode?: number | null;
    fiat_id: string;
    usable: boolean;
  }
  export interface ProfileReportReasonsEntity {
    type: string;
    attributes: Attributes17;
    id: string;
  }
  export interface Attributes17 {
    reason: string;
    active: number;
  }
  export interface VipLevelsThresholdsEntity {
    type: string;
    attributes: Attributes18;
    id?: string | null;
  }
  export interface Attributes18 {
    level: number;
    name: string;
    cryptocoin_id: string;
    min_amount: string;
    perks?: (null)[] | null;
  }
  