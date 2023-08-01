import PropTypes from 'prop-types';
import { AlertText } from './Alert.styled';

export function Alert({ type }) {
    return <AlertText
        type={type}>
        {type}
    </AlertText>
}

Alert.propTypes = {
    type: PropTypes.oneOf(['warning', 'error', 'success'])
}