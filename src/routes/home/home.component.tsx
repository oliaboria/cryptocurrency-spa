import { useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';

import Card from '../../components/card';
import Header from '../../components/header';
import Pagination from '../../components/pagination';
import SomethingWentWrong from '../../components/something-went-wrong';
import Spinner from '../../components/spinner';
import { FetchCoinsByParamsType, FetchCoinsParamsType } from '../../types';

import CurrencyTable from './currency-table';
import GET_COINS from './home.queries';

const headers = ['Name', 'Symbol', 'Market Cap', 'Total Supply'];
const limits = {
    '10': 10,
    '15': 15,
    All: 20,
};

const Home: React.FC = () => {
    const [limit, setLimit] = useState(10);

    const [fetchCoins, { loading, data, error }] = useLazyQuery(GET_COINS);

    const fetchCoinsByParams: FetchCoinsByParamsType = (
        params?: FetchCoinsParamsType,
    ) => {
        const defultParams = {
            variables: { limit },
        };
        const resultParams = {
            variables: {
                ...defultParams.variables,
                ...params?.variables,
            },
        };

        fetchCoins(resultParams);
    };

    useEffect(() => {
        fetchCoinsByParams();
    }, [fetchCoins, limit]);

    return (
        <>
            <Header onSubmit={fetchCoinsByParams} />

            {loading && <Spinner />}

            {!loading && !error && (
                <Card>
                    <div className="scrollable table-wrapper">
                        <CurrencyTable
                            headers={headers}
                            currency={data?.assets}
                        />
                    </div>
                    <div className="pagination">
                        <Pagination
                            pages={limits}
                            currentLimit={limit}
                            changeLimit={setLimit}
                        />
                    </div>
                </Card>
            )}

            {error && <SomethingWentWrong />}
        </>
    );
};

export default Home;
