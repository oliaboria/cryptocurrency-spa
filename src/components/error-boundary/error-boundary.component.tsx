import React, { PureComponent } from 'react';

import logger from '../../utils/logger';
import SomethingWentWrong from '../something-went-wrong';

type ErrorType = {
    hasError: boolean;
};

class ErrorBoundary extends PureComponent<any, ErrorType> {
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorType {
        return { hasError: true };
    }

    componentDidCatch(error: any): void {
        logger.error('Error Boundary: ', error);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        return hasError ? <SomethingWentWrong /> : children;
    }
}

export default ErrorBoundary;
