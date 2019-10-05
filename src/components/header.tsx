import * as React from "react";

import { DefaultProps } from "@martin_hotell/rex-tils";

export type HeaderProps = {
  
} & DefaultProps<typeof defaultHeaderProps>;

export const defaultHeaderProps = DefaultProps({});

export default class Header extends React.Component<HeaderProps, {}> {
	public static readonly defaultProps = defaultHeaderProps;

	public render() {
		return <header className="header">Header</header>;
	}
}
