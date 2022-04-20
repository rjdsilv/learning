import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'


class StreamForm extends React.Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render = () => {
    return (
      <form className="ui form error"
            onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field component={this.renderInput}
               label="Title"
               name="title"
        />
        <Field component={this.renderInput}
               label="Description"
               name="description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'Please, enter a title!'
  }

  if (!formValues.description) {
    errors.description = 'Please, enter a description!'
  }

  return errors
}

StreamForm.propTypes = {
  handleSubmit: PropTypes.func,
  createStream: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm)
