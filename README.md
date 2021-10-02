# tokenprices
A simple and easy library to fetch token prices on-chain.

Powered by Ethers.js.
```
npm install tokenprices
```

## Usage
Using tokenprices is quite simple:
```
<TokenPrices>.fetchPrice(<TOKEN ADDRESS> || <TokenPrices>.tokenlist.<TOKEN NAME>)
```

## Example
Here is an example of tokenprices in action:
```
import { TokenPrices } from 'tokenprices';
import { JsonRpcProvider } from '@ethersproject/providers';

const provider = new JsonRpcProvider(<RPC URL HERE>);

const getPrices = async () => {
    const tokenprices = new TokenPrices();
    await tokenprices.init(provider);

    const wmaticPrice = await tokenprices.fetchPrice(tokenprices.tokenlist.WMATIC);
    const belugaPrice = await tokenprices.fetchPrice(tokenprices.tokenlist.BELUGA);

    console.log("WMATIC price:", wmaticPrice / 1e18);
    console.log("BELUGA price:", belugaPrice / 1e18);
}

getPrices();
```

## Supported Networks
Tokenprices supports the following networks and price sources:
- Polygon Mainnet (Chainlink, Gravity, Sushiswap, Quickswap, and Apeswap)
- Fantom Opera (Chainlink, Spookyswap, Sushiswap, and Spiritswap)