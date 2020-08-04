import { gql } from '@apollo/client';

const GET_MARKET = gql`
    query getMerket($symbol: String) {
        markets(filter: { baseSymbol: { _eq: $symbol } }) {
            marketSymbol
            baseSymbol
            exchangeSymbol
            ticker {
                lastPrice
                highPrice
                lowPrice
                percentChange
            }
        }
    }
`;

export default GET_MARKET;
