import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import SearchBar from "./SearchBar"
import PackGrid from './PackGrid'
import PackList from './PackList'

class PackDiv extends React.Component {
    render () {
        return (
            <div>
				<SearchBar/>
                <PackGrid/>
				<PackList/>
            </div>
        )
    };
}

PackDiv.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

PackDiv.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default PackDiv;