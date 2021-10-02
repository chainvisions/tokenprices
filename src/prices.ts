import { BaseProvider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'
import { BigNumber } from '@ethersproject/bignumber'

import { oracleByChainId, tokenlistByChainId } from './constants'
import oracleABI from './abi/Oracle.json'

export class TokenPrices {
    ethersProvider?: BaseProvider
    oracleContract: Contract

    tokenlist?: any

    constructor() {
        // Create an empty, provider-less contract.
        this.oracleContract = new Contract(oracleByChainId[137], oracleABI)
    }

    async init(provider: BaseProvider) {
        this.ethersProvider = provider
        let network = await this.ethersProvider.getNetwork()
        this.oracleContract = new Contract(oracleByChainId[network.chainId], oracleABI, provider)
        this.tokenlist = tokenlistByChainId[network.chainId]
    }

    // Interactions

    /**
     * Fetches the price of a specified token.
     * @param token Token to fetch the price of.
     * @returns The price of the token as a BigNumber. (In 1e18 format)
     */
    async fetchPrice(token: string): Promise<BigNumber> {
        let price
        try {
            price = await this.oracleContract.calculateAssetPrice(token)
        } catch(e) {
            console.error(`Error whilst fetching price for ${token}:`, e)
            price = BigNumber.from(0)
        }
        return price
    }
}