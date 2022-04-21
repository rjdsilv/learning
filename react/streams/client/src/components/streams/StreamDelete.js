import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import browserHistory from '../../browserHistory'
import { connect } from 'react-redux'
import { fetchStream, deleteStream } from '../../actions'

const StreamDelete = ({ match, stream, fetchStream: getStream, deleteStream: removeStream }) => {

  useEffect(() => {
    getStream(match.params.id)
  }, [])

  return (
    <Modal header="Delete Stream"
           content={`Are you sure you want to delete the "${stream ? stream.title : ''}" stream?`}
           actions={
             <React.Fragment>
               <button onClick={() => removeStream(stream.id)}
                       className="ui negative button"
               >
                 Delete
               </button>
               <Link to="/" className="ui button">
                 Cancel
               </Link>
             </React.Fragment>
           }
           onDismiss={() => browserHistory.push('/')}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  }
}

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream },
)(StreamDelete)
