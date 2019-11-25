const TBinaryProtocol = require('./client/binary_protocol');
const TBufferedTransport = require('./client/buffered_transport');
const httpConnection = require('./client/http_connection');

export default function connectClient(host, port, path, genClient, options = {}, errorCb) {
    const connection = httpConnection.createHttpConnection(host, port, Object.assign(options, {
        transport: TBufferedTransport,
        protocol: TBinaryProtocol,
        path
    }), errorCb);
    return httpConnection.createHttpClient(genClient, connection);
}
