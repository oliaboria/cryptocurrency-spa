import { gql } from '@apollo/client';

/* Can't find in API how to filter by $
    also got 413 Payload ti large when limit is 50
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
            markets {
                baseSymbol
                ticker {
                    lastPrice
                }
            }
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
