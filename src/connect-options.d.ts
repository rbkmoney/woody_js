interface KeyValue {
    [key: string]: any;
}

type UnitOfTime = (
    'year' | 'years' | 'y' |
    'month' | 'months' | 'M' |
    'week' | 'weeks' | 'w' |
    'day' | 'days' | 'd' |
    'hour' | 'hours' | 'h' |
    'minute' | 'minutes' | 'm' |
    'second' | 'seconds' | 's' |
    'millisecond' | 'milliseconds' | 'ms'
  );

interface DeadlineConfig {
    amount: number;
    unitOfTime: UnitOfTime;
}

export interface ConnectOptions {
    transport?: string;
    protocol?: string;
    path?: string;
    headers?: KeyValue;
    https?: boolean;
    nodeOptions?: object;
    deadlineConfig?: DeadlineConfig
}