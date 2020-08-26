import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import PackGridBox from "./PackGridBox"

class PackGrid extends React.Component {
    render () {
        return (
            <div>
                <PackGridBox/>
            </div>
        )
    };
}

PackGrid.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

PackGrid.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default PackGrid;