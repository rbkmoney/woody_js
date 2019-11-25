interface KeyValue {
    [key: string]: any;
}

export interface ConnectOptions {
    transport?: string;
    protocol?: string;
    path?: string;
    headers?: KeyValue;
    https?: boolean;
    nodeOptions?: object;
}