import React from 'react';

import './_card.scss';

type PropTypes = {
    children?: React.ReactNode;
};

const Card: React.FC<PropTypes> = (props: PropTypes) => {
    const { children } = props;
    return <div className="card">{children}</div>;
};

export default Card;
