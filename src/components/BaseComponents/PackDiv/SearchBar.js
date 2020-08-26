import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

class SearchBar extends React.Component {
    render () {
        return (
            <div>
                SearchBar
            </div>
        )
    };
}

SearchBar.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

SearchBar.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default SearchBar;