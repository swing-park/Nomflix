import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
	${reset};
	a{
		text-decoration : none;
		color:inherit;
		cursor:pointer;
	}
	*{
		box-sizing:border-box;
	}
	body{
		color:white;
		font-size : 12px;
		background-color : rgba(20,20,20,1);
		padding-top:100px;
	}
`;

export default GlobalStyles