import { Component, ReactNode } from 'react';

import s from './ErrorBoundary.module.scss';
import { Link } from 'react-router-dom';

interface IErrorInfo {
  componentStack: string;
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: IErrorInfo | null;
}

interface IErrorBoundaryProps {
  children?: ReactNode;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: IErrorInfo) {
    this.setState({ hasError: true, error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className={s.boundary}>
          <div className={s.boundary__in}>
            <h2 className={s.boundary__title}>Something went wrong.</h2>
            <h3 className={s.boundary__caption}>
              {this.state.error && this.state.error.toString()}
            </h3>
            <details className={s.boundary__info}>
              <summary className={s.boundary__open}>Details</summary>
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </details>
            <div className={s.boundary__linkWrap}>
              <Link className={s.boundary__link} to="/">
                back to home
              </Link>
            </div>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
