import { useQuery } from '@apollo/client';
import classnames from 'classnames';
import React, { useState } from 'react';

import './_home.scss';

import Card from '../../components/card';
import SomethingWentWrong from '../../components/something-went-wrong';
import Spinner from '../../components/spinner';

import CurrencyTable from './currency-table';
import { GET_MARKET } from './home.queries';

const headers = ['Name', 'Pair', 'Market Cap', 'Average Last Price'];
const limits = {
    '10': 10,
    '15': 15,
    All: 20,
};

const Home: React.FC = () => {
    const [limit, setLimit] = useState(25);
    const { loading, data, error } = useQuery(GET_MARKET, {
        variables: { limit },
    });

    const changeLimit = (newLimit: number) => {
        setLimit(newLimit);
    };

    return (
        <>
            {loading && <Spinner />}

            {!loading && !error && (
                <Card>
                    <div className="scrollable table-wrapper">
                        <CurrencyTable
                            headers={headers}
                            currency={data.assets}
                        />
                    </div>
                    <div className="pagination">
                        <div>View</div>
                        {Object.keys(limits).map((keyStr) => {
                            const currentLimit = limits[keyStr];
                            return (
                                <div
                                    key={keyStr}
                                    className={classnames('clickable', {
                                        underline: limit === currentLimit,
                                    })}
                                    onClick={() => changeLimit(currentLimit)}>
                                    {keyStr}
                                </div>
                            );
                        })}
                    </div>
                </Card>
            )}

            {error && <SomethingWentWrong />}
        </>
    );
};

export default Home;
