# tokenprices
A simple and easy library to fetch token prices on-chain.

## Usage
Using tokenprices is quite simple:
```
<TokenPrices>.fetchPrice(<TOKEN ADDRESS> || <TokenPrices>.tokenlist.<TOKEN NAME>) // This will return the price of the token in a BigNumber. (1e18 format)
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

    console.log(`WMATIC price:`, wmaticPrice / 1e18);
    console.log(`BELUGA price:`, belugaPrice / 1e18);
}

getPrices();
```

## Supported Networks
Tokenprices supports the following networks and AMMs:
- Polygon Mainnet (Gravity, Sushiswap, and Quickswap)