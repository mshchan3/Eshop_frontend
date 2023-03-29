export interface TransactionData {
    tid:       number;
    datetime:  string;
    status:    string;
    total:     number;
    buyer_uid: number;
    items:     TransactionItem[];
}

export interface TransactionItem {
    tpid:     number;
    product:  TransactionProduct;
    quantity: number;
    subTotal: number;
}

export interface TransactionProduct {
    pid:      number;
    name:     string;
    imageUrl: string;
    price:    number;
    stock:    number;
    category: string;
    brand:    string;
}