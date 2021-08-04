import {ConnectOptions} from "./connect-options";

declare module '@rbkmoney/woody_js' {
    export default function connectClient(host: string, port: string, path: string, genClient: object, connectOptions: ConnectOptions, errorCb: Function): object;
}
