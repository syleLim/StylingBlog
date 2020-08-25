import React					from "react"
import { connect }				from "react-redux"
import { bindActionCreators }	from "redux"

import { Action }		from "../modules"
import { AppComponent } from "../components"

class AppContainer extends React.Component {
	
	loadData () {
        /*
            Load Data from Action(module)
            Example : 
                const { BindedModuleName } = this.props;
                BindModuleName.PromiseAction().then(res => {})
        */
	}

	componentDidMount() {
		this.loadData();	
	}

	render () {
		return (
			<AppComponent />
		)
	}
}

const mapStateToProps = (state) => ({
    /*
        Match props and data(redux state)
        Example
            user : state.ModuleName.get("key")
    */
})

const mapDispatchToProps = (dispatch) => ({
    /*
        Bind props to action(redux dispatch action)
        Example
            Action : bindActionCreators(ModuleName, dispatch)
    */
})

export default AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppContainer);