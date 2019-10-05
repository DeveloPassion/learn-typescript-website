import * as React from "react";

import Footer from "./footer";
import Header from "./header";

import "../assets/scss/main.scss";

export interface LayoutProps extends React.ClassAttributes<Layout> {}

export interface LayoutState {}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
	constructor(props: LayoutProps) {
		super(props);
		this.state = {};
	}

	public componentDidMount() {}

	public render() {
		const { children } = this.props;

		return (
			<div className={`body`}>
				<div className="wrapper">
					<Header />
					{children}
					<Footer />
				</div>
			</div>
		);
	}
}
