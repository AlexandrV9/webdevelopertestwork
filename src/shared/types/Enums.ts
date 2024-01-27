export enum ClientMessageType {
    subscribeMarketData = 1,
    unsubscribeMarketData,
    placeOrder,
}

export enum ServerMessageType {
    placeOrder = 1,
}

// export enum ServerMessageType {
//     success = 1,
//     error,
//     executionReport,
//     marketDataUpdate,
// }

export enum OrderSide {
    BUY = 1,
    SELL,
}

export enum OrderStatus {
    active = 1,
    filled,
    rejected,
    cancelled,
}

export enum Instrument {
    eur_usd = 1,
    eur_rub,
    usd_rub,
}
