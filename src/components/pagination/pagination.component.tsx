import classnames from 'classnames';
import React, { SetStateAction, Dispatch } from 'react';

type PropTypes = {
    pages: {
        [key: string]: number;
    };
    currentLimit: number;
    changeLimit: Dispatch<SetStateAction<number>>;
};

const Pagination: React.FC<PropTypes> = (props: PropTypes) => {
    const { pages, currentLimit, changeLimit } = props;

    return (
        <>
            <div>View</div>
            {Object.keys(pages).map((keyStr: string) => {
                const limit = pages[keyStr];

                return (
                    <div
                        key={keyStr}
                        className={classnames('clickable', {
                            underline: limit === currentLimit,
                        })}
                        onClick={() => changeLimit(limit)}>
                        {keyStr}
                    </div>
                );
            })}
        </>
    );
};

export default Pagination;
