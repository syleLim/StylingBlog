import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import { TitleStyle }	from "styles";

class Title extends React.Component {
    render () {
		const { title } = this.props;

        return (
            <TitleStyle>
                {title}
            </TitleStyle>
        )
    };
}

Title.propTypes = {
	title	: PropTypes.string,
}

Title.defaultProps = {
	title	: "No Title in Title"
}

export default Title;
