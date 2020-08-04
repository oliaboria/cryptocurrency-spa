import classnames from 'classnames';
import React from 'react';

import './_card.scss';

type PropTypes = {
    children?: React.ReactNode;
    preview?: boolean;
    additionalClasses?: string;
};

const Card: React.FC<PropTypes> = (props: PropTypes) => {
    const { children, preview, additionalClasses } = props;
    return (
        <div className={classnames('card', { preview }, additionalClasses)}>
            {children}
        </div>
    );
};

export default Card;
