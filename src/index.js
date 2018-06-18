const TBinaryProtocol = require('./client/binary_protocol');
const TBufferedTransport = require('./client/buffered_transport');
const httpConnection = require('./client/http_connection');
const thrift = require('./client/gen');

function connectClient(host, port, path, genClient) {
    const connection = httpConnection.createHttpConnection(host, port, {
        transport: TBufferedTransport,
        protocol: TBinaryProtocol,
        path
    });
    return httpConnection.createHttpClient(genClient, connection);
}

module.exports = {
    connectClient: connectClient,
    thrift: thrift
};
