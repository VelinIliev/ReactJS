import { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        console.log("error", error);
        return { hasError: true }
    };

    componentDidCatch(error, errorInfo) {
        console.log("error", error);
        console.log("errorInfo", errorInfo);
    };

    render() {
        if (this.state.hasError) {
            return <h1>404</h1>
        }
        return (
            <>
                {this.props.children}
            </>
        );
    }
}