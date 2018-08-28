import { h } from 'preact';
import style from './style';

const Header = ({ children }) => (
	<header class={style.header}>
		<h1>{children}</h1>
	</header>
);

export default Header;