import { SecretNetworkClient, Wallet, coinsFromString } from "secretjs";
import dotenv from "dotenv";
dotenv.config();

const wallet = new Wallet(
  "desk pigeon hammer sleep only mistake stool december offer patrol once vacant"
);

const secretjs = new SecretNetworkClient({
  chainId: "pulsar-3",
  url: "https://api.pulsar3.scrttestnet.com",
  wallet: wallet,
  walletAddress: wallet.address,
});

let codeHash =
  "6c0281401b31d5af254bf9291ea1a2aa90da5cb5074c4eb06bf39447fdd66915";
let contractAddress = "secret1wl0srn0x8rkddf4grsfz7hfeapflchg62uw4x9";

let query_contract = async () => {
  let my_query = await secretjs.query.compute.queryContract({
    contract_address: contractAddress,
    code_hash: codeHash,
    query: { get_count: {} },
  });
  console.log("emlanis' starting count: ", my_query);
};
query_contract();
