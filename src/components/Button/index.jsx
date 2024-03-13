import PropType from 'prop-types';
import { ButtonContainer } from './button.style';

export const Button = ({ type, variant, size, children }) => {
    return (
        <ButtonContainer type={type} variant={variant} size={size} disabled={variant === 'disabled' ? true : false}>
            {children}
        </ButtonContainer>
    )
}

Button.propTypes = {
    type: PropType.string.isRequired,
    variant: PropType.string.isRequired,
    size: PropType.string.isRequired,
    children: PropType.node.isRequired
}




