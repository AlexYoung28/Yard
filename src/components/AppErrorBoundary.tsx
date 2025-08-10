import React, { Component } from "react";
import type { ReactNode } from "react";

type Props = { children: ReactNode; fallback?: ReactNode };
type State = { err?: Error };

export class AppErrorBoundary extends Component<Props, State> {
  state: State = { err: undefined };

  static getDerivedStateFromError(err: Error): State {
    return { err };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.warn("AppErrorBoundary caught:", error, info);
  }

  render() {
    const { err } = this.state;
    if (err) {
      return (
        this.props.fallback ?? (
          <div role="alert" className="p-4 text-sm">
            <h1 className="text-lg font-semibold mb-2">
              Something went wrong.
            </h1>
            <p>
              Try refreshing the page. If the problem persists, contact support.
            </p>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
