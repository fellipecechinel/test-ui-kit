import styled, { css } from "styled-components";
import { darken } from "polished";

import { Props } from "./index";

export const ButtonStyled = styled.a<Props>`
	text-decoration: none;
	box-shadow: none;
	display: inline-block;
	margin-bottom: 0;
	font-weight: normal;
	text-align: center;
	vertical-align: middle;
	touch-action: manipulation;
	cursor: pointer;
	background-image: none;
	border: 1px solid transparent;
	white-space: nowrap;
	padding: 8px 30px 8px;
	font-size: 16px;
	line-height: 1.375;
	border-radius: 3px;
	user-select: none;

	color: #668c98;
	background: linear-gradient(-180deg, #ffffff 0%, #eeeeee 100%);
	border: 1px solid #b3b2b3;

	:hover {
		background: #F0F0F0;
    border: 1px solid #BBBBBB;
	}

	${(props) =>
		!!props.block &&
		css`
			width: 100%;
		`}

	${(props) =>
		!!props.backgroundColor &&
		css`
			background: none;
			background-color: ${props.backgroundColor};
			border: 1px solid ${darken(0.02, props.backgroundColor)};

			&:hover {
				background: none;
				background-color: ${darken(0.05, props.backgroundColor)};
				border: 1px solid ${darken(0.03, props.backgroundColor)};
			}
		`}

	${(props) =>
		!!props.color &&
		css`
			color: ${props.color};
		`}

	${(props) =>
		!!props.disabled &&
		css`
			opacity: 0.65;
			pointer-events: none;
		`}

	${(props) =>
		props.size === "large" &&
		css`
			padding: 11px 30px 10px;
			font-size: 16px;
			line-height: 1.375;
		`}

	${(props) =>
		props.size === "small" &&
		css`
			padding: 8px 20px 7px;
			font-size: 14px;
			line-height: 1.28571429;
		`}

	${(props) =>
		props.type === "primary" &&
		css`
			color: #fff;
			background: linear-gradient(-180deg, #83db77 0%, #6ec962 96%);
			border: 1px solid #80c676;
			text-shadow: 0 1px 1px rgb(0 0 0 / 21%);
			font-weight: 500;

			&:hover {
				background: #75cf68;
				border: 1px solid #72bf68;
			}
		`}

	${(props) =>
		props.type === "success" &&
		css`
			color: #fff;
			background: none;
			background-color: #72bf68;
			border-color: #61b756;

			&:hover {
				background-color: #54ab49;
				border-color: #48923e;
			}
		`}

	${(props) =>
		props.type === "info" &&
		css`
			color: #fff;
			background: none;
			background-color: #00b8d1;
			border-color: #00a2b8;

			&:hover {
				background-color: #008b9e;
				border-color: #006c7a;
			}
		`}

	${(props) =>
		props.type === "warning" &&
		css`
			color: #fff;
			background: none;
			background-color: #ffc00b;
			border-color: #f1b200;

			&:hover {
				background-color: #d79f00;
    		border-color: #b38500;
			}
		`}

	${(props) =>
		props.type === "danger" &&
		css`
			color: #fff;
			background: linear-gradient(-180deg, #f5515f 0%, #d0011b 100%);
			border: 1px solid #d0011b;

			&:hover {
				background: #D60E26;
    		border-color: #AE0218;
			}
		`}

	${(props) =>
		props.type === "link" &&
		css`
			color: #275bff;
			border-color: transparent;
			background: none;
			background-color: transparent;
			box-shadow: none;
			border-radius: 0;

			&:hover {
				border-color: transparent;
				background: none;
				color: #668c98;
			}
		`}
`;
