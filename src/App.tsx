import React from "react";
import "./App.css";
import { gql, useQuery } from "@apollo/client";
const GET_MARKET = gql`
  query PageAssets {
    assets(sort: [{ marketCapRank: ASC }], page: { limit: 25 }) {
      id
      assetName
      assetSymbol
      marketCap
      markets {
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
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_MARKET);
  return loading ? <p>Loading...</p> : <div>{JSON.stringify(data)}</div>;
}

export default App;
