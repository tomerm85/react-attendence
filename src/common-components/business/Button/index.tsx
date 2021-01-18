import * as React from 'react';
import './style.scss';

interface Props {
	buttonClass: string;
	buttonText: string;
	onButtonClickHandler: () => void;
}

const Button: React.FC<Props> = (props: Props) => {
	const { buttonClass, buttonText, onButtonClickHandler } = props;

	return (
		<button type="button" className={buttonClass} onClick={onButtonClickHandler}>
			{buttonText}
		</button>
	);
};

export default Button;
