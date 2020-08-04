import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router';

import Header from '../../components/header';
import SomethingWentWrong from '../../components/something-went-wrong';
import Spinner from '../../components/spinner';

import GET_MARKET from './coin-overview.queries';
import MarketGroups from './market-groups';

const CoinOverview: React.FC = () => {
    const { symbol } = useParams();

    const { loading, data, error } = useQuery(GET_MARKET, {
        variables: { symbol },
    });

    return (
        <>
            <Header />

            {loading && <Spinner />}

            {!loading && !error && <MarketGroups market={data.markets} />}

            {error && <SomethingWentWrong />}
        </>
    );
};

export default CoinOverview;
