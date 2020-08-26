import React				from "react"
import { Route }			from "react-router-dom"
import ImmutablePropTypes	from "react-immutable-proptypes"
import PropTypes 			from "prop-types"

import { HomePage }	from "pages"
import { Header
		,Footer }	from "components"

class AppComponent extends React.Component {
    render () {
        return (
            <div>
				<Header/>
                <Route exact path="/" component={HomePage} />
				<Footer/>
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