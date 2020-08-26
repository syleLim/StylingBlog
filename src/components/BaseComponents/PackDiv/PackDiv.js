import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import SearchBar from "./SearchBar"
import PackGrid from './PackGrid'
import PackList from './PackList'

import { PackDivStyle } from 'styles'

class PackDiv extends React.Component {
    render () {
		const { isGrid } = this.props

        return (
            <PackDivStyle>
				<SearchBar/>
                {isGrid ? <PackGrid/> : <PackList/>}
            </PackDivStyle>
        )
    };
}

PackDiv.propTypes = {
	isGrid : PropTypes.bool,
}

PackDiv.defaultProps = {
	isGrid : true,
}

export default PackDiv;