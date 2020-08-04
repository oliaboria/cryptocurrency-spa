import { useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';

import './_home.scss';

import Card from '../../components/card';
import Header from '../../components/header';
import Pagination from '../../components/pagination';
import SomethingWentWrong from '../../components/something-went-wrong';
import Spinner from '../../components/spinner';

import CurrencyTable from './currency-table';
import GET_MARKET from './home.queries';

const headers = ['Name', 'Symbol', 'Market Cap', 'Total Supply'];
const limits = {
    '10': 10,
    '15': 15,
    All: 20,
};

const Home: React.FC = () => {
    const [limit, setLimit] = useState(10);

    const [fetchMarket, { loading, data, error }] = useLazyQuery(GET_MARKET, {
        variables: { limit },
    });

    useEffect(() => {
        fetchMarket();
    }, []);

    return (
        <>
            <Header onSubmit={fetchMarket} />

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
