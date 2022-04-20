import React from 'react'
import PropTypes from 'prop-types'
import StreamForm from './StreamForm'
import { connect } from 'react-redux'
import { createStream } from '../../actions'


class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues)
  }

  render = () => {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

StreamCreate.propTypes = {
  handleSubmit: PropTypes.func,
  createStream: PropTypes.func,
}

export default connect(
  null,
  { createStream },
)(StreamCreate)
