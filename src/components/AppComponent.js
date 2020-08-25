import React				from "react"
import { Route }			from "react-router-dom"
import ImmutablePropTypes	from "react-immutable-proptypes"
import PropTypes 			from "prop-types"

import { Home } from "../pages"

class AppComponent extends React.Component {
    render () {
        return (
            <div>
                Main
                <Route exact path="/" component={Home} />
            </div>
        )
    };
}

AppComponent.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

AppComponent.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : "No data. please check user field"
	*/
}

export default AppComponent;