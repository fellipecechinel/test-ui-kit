import React, {ReactNode, MouseEvent} from 'react';
import {ButtonStyled} from './styles';

export interface Props /*extends React.HTMLProps<HTMLButtonElement>*/ {
	children?: ReactNode

	/** Option to fit button width to its parent width **/
	block: boolean;

	/** Set the type of button **/
	type: 'default'|'primary'|'success'|'info'|'warning'|'danger'|'link';

	/** Set the size of button **/
	size: 'small'|'middle'|'large';

	/** Disabled state of button **/
  disabled: boolean;

	/** Set the background color of button **/
  backgroundColor?: string;

	/** Set the text color of button **/
  color?: string;

	/** Redirect url of link button **/
	href?: string;

	/** Same as target attribute of a, works when href is specified **/
	target?: string;

	/** Set the handler to handle click event **/
  onClick?: (event: MouseEvent) => void;
}

export function Button({children, block=false, disabled=false, type='default', size='middle', onClick, ...props}: Props) {
  return (
    <ButtonStyled block={block} disabled={disabled} type={type} size={size} onClick={onClick} {...props} >
			{children}
		</ButtonStyled>
  )
}
