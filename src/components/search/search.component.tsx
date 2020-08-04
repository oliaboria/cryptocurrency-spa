import { debounce } from 'lodash';
import React, { useRef } from 'react';

type Params = {
    [key: string]: any;
};

type PtopTypes = {
    onSubmit?: (params: Params) => void;
};

const Search: React.FC<PtopTypes> = (props: PtopTypes) => {
    const { onSubmit } = props;
    const formRef: React.MutableRefObject<any> = useRef();
    const submitForm = () => {
        const name = formRef.current?.value;
        if (name && onSubmit) {
            onSubmit({ variables: { name: `%${name}` } });
        }
    };

    return (
        <form className="search">
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
