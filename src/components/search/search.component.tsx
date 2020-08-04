import { debounce } from 'lodash';
import React, { useRef, SyntheticEvent } from 'react';

import { FetchCoinsByParamsType } from '../../types';

type PtopTypes = {
    onSubmit: FetchCoinsByParamsType;
};

const Search: React.FC<PtopTypes> = (props: PtopTypes) => {
    const { onSubmit } = props;
    const formRef: React.MutableRefObject<any> = useRef();
    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault();
        const name = formRef.current?.value;
        const params = name && { variables: { name: `%${name}` } };
        onSubmit(params);
    };

    return (
        <form className="search" onSubmit={submitForm}>
            <label>
                <input
                    ref={formRef}
                    type="text"
                    className="input"
                    placeholder="Search cryptocurrency, rates and prices"
                    onBlur={debounce(submitForm, 300)}
                />
            </label>
        </form>
    );
};

export default Search;
