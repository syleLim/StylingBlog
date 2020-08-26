import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

import { Title
		,PackDiv }	from "components"

class HomeComponent extends React.Component {
    render () {
        return (
            <div style={{textAlign:"center"}}>
                <Title/>
				<PackDiv/>
            </div>
        )
    };
}

HomeComponent.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

HomeComponent.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default HomeComponent;
