import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class Employee extends Component {
	state = {
		email: null
	}
	static propTypes = {
		id: PropTypes.string.isRequired
	}

	static contextTypes = {
		router: PropTypes.object,
		style: PropTypes.object
	}

	render() {
		if (!this.props.loaded) return null
		const employee = this.props.employees.filter( person => person.id == this.props.id )[0]
		if(!employee) this.context.router.push('/employees')
		return(
			<div>
				<p>{employee.email}</p>
			</div>
		)
	}
}

export default connect(state => {
	const { employees } = state

	return { employees: employees.entities, loaded: employees.loaded }
} )(Employee)