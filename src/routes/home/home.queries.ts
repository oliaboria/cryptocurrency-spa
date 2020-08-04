import { gql } from '@apollo/client';

/* Can't find in API how to filter by USD that's why can't show pair column. Show assetSymbol instead
    also got 413 Payload too large when limit is 50 because api send to mucjh data instead of 50
*/
export const GET_MARKET = gql`
    query getMarket($limit: Int) {
        assets(
            sort: [{ marketCapRank: DESC }]
            page: { skip: 0, limit: $limit }
        ) {
            id
            assetName
            marketCap
            totalSupply
            assetType
            assetSymbol
        }
    }
`;

export const SEARCH_BY_NAME = gql`
    query searchByName($name: String) {
        assets(
            sort: [{ marketCapRank: DESC }]
            page: { skip: 0, limit: $limit }
            filter: { assetName: { _like: $name } }
        ) {
            id
            assetName
            assetSymbol
            marketCap
            markets {
                marketSymbol
                baseSymbol
                exchangeSymbol
                # ticker {
                #     lastPrice
                #     highPrice
                #     lowPrice
                #     percentChange
                # }
            }
        }
    }
`;
