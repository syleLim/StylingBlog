import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

class PackListBox extends React.Component {
    render () {
        return (
            <div>
                PackListBox
            </div>
        )
    };
}

PackListBox.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

PackListBox.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default PackListBox;