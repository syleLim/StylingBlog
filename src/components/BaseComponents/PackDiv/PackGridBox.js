import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import { PackGridBoxStyle } from "styles"

class PackGridBox extends React.Component {
    render () {
        return (
            <PackGridBoxStyle>
                PackGridBox
            </PackGridBoxStyle>
        )
    };
}

PackGridBox.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

PackGridBox.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default PackGridBox;