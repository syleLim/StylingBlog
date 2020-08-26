import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import { HeaderStyle }	from "styles"

class Header extends React.Component {
    render () {
		const { logo } = this.props

        return (
            <HeaderStyle>
                {logo}
            </HeaderStyle>
        )
    };
}

Header.propTypes = {
	logo : PropTypes.string
}

Header.defaultProps = {
	logo : "No logo"	
}

export default Header;
