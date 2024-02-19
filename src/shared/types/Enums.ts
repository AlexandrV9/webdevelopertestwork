export enum ClientMessageType {
    subscribeMarketData = 1,    // подписка на обновление данных
    unsubscribeMarketData,      // отмена подписки на данные
    placeOrder,                 // разместить заказ на покупку/продажу
    getAllRates,
    subscribeAssetData,
    subscribeRatesData
}

export enum ServerMessageType {
    success = 1,        // создание 
    error,              // ошибка создания
    executionReport,    // отчёт об статусе 
    marketDataUpdate,   // обновление данных
    getAllRates,
    assetDataUpdate     // обновление данных тикера
}

export enum OrderSide {
    BUY = 1,
    SELL,
}

export enum OrderStatus {
    ACTIVE = 1,
    FILLED,
    REJECTED,
    CANCELLED,
}

export enum Instrument {
    CNH_RUB = 1,
    EUR_RUB,
    EUR_USD, 
    USD_RUB,
    TRY_RUB,
    BYN_RUB
}
