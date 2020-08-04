import { gql } from '@apollo/client';

/* Can't find in API how to filter by USD that's why can't show pair column. Show assetSymbol instead
    also got 413 Payload too large when limit is 50 because api send to mucjh data instead of 50
*/

const GET_MARKET = gql`
    query searchByName($limit: Int, $name: String) {
        assets(
            sort: [{ marketCapRank: DESC }]
            page: { skip: 0, limit: $limit }
            filter: { assetName: { _like: $name } }
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

export default GET_MARKET;
