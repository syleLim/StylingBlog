if [ ! $1 ]; then
	echo "no arg"
	exit 2
fi

echo "import React				from 'react'
import { Route }			from 'react-router-dom'
import ImmutablePropTypes	from 'react-immutable-proptypes'
import PropTypes 			from 'prop-types'

class $1Component extends React.Component {
    render () {
        return (
            <div>
                $1
            </div>
        )
    };
}

$1Component.propTypes = {
	/*
		Set props type check
		Use ImmutalbePropTypes, PropTypes module
		Example :
			user : PropTyps.string
	*/
}

$1Component.defaultPros = {
	/*
		Set Default props if no props input
		Exampel
			user : 'No data. please check user field'
	*/
}

export default $1Component;" >> ./src/components/$1Component.js
echo "export { default as $1Component } from './$1Component.js'
" >> ./src/components/index.js

echo "import React					from 'react'
import { connect }				from 'react-redux'
import { bindActionCreators }	from 'redux'

import { Action }		from '../modules'
import { $1Component } from '../components'

class $1Container extends React.Component {
	
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
			<$1Component />
		)
	}
}

const mapStateToProps = (state) => ({
    /*
        Match props and data(redux state)
        Example
            user : state.ModuleName.get('key')
    */
})

const mapDispatchToProps = (dispatch) => ({
    /*
        Bind props to action(redux dispatch action)
        Example
            Action : bindActionCreators(ModuleName, dispatch)
    */
})

export default $1Container = connect(
	mapStateToProps,
	mapDispatchToProps
)($1Container);" >> ./src/containers/$1Container.js
echo "export { default as $1Container } from './$1Container.js'
" >> ./src/containers/index.js

echo "" >> ./src/styles/$1Style.js
echo "export { default as $1Style } from './$1Style.js'
" >> ./src/styles/index.js
 
