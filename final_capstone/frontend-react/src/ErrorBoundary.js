import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: '', info: '', stack: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        this.setState( {error, info: errorInfo, stack: error.stack} );
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div>
                    <h1>An error occurred: {this.state.error.status} {this.state.error.statusText}</h1>
                    <div>stack: {this.state.info}</div>
                    <div>stack: {this.state.stack}</div>
                </div>
            );
        }

        return this.props.children;
    }
}
export default ErrorBoundary;