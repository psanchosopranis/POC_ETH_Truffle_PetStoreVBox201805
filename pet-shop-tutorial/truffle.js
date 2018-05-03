module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
  // optional config values:
   // gas (Gas limit used for deploys. Default is 4712388)
   // gasPrice (Gas price used for deploys. Default is 100000000000 (100 Shannon).)
   // from (From address used during migrations. Defaults to the first available account provided by your Ethereum client.) 
      from: "0x76727BDe041Ba20D8129AFD5A1B6F89c7d8F9ABe" // PRIMERA CUENTA DE GANACHE SI NO SE INDICA ES LA DE POR DEFECTO
   // from: "0x8E1e49f5d9b6Deb602c01254A68d9367E6821c10" // SEGUNDA CUENTA DE GANACHE
   // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
   //          - function that returns a web3 provider instance (see below.)
   //          - if specified, host and port are ignored.
    }
  }
};
