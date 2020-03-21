import React from 'react';
import { connect }  from 'react-redux';
import '../style/UserInformation.css'


const UserInformation = (props) => {
  const { user, error, loading } = props;
  return (
    <>
      {loading && (<h3 className="loading">Searching... </h3>)}
      {error && (<h3 className="error">{error.message}</h3>)}
      {user && (
        <div className="main">
          <img src={user.avatar_url} alt="avatar" />
          <DataField
            label="Github ID"
            value={user.id}
          />
          <DataField
            label="Github name"
            value={user.name}
          />
          <DataField
            label="Github URL"
            value={user.html_url}
            isURL
          />
        </div>
      )}
    </>
  )
}

const DataField = ({
  label,
  value,
  isURL
}) => {
  return (
    <div className="data">
      <label>{label}: </label>
      {isURL ? (<a href={value}>{value}</a>) : (<span>{value || "No name"}</span>)}
    </div>
  )
}

const mapState = state => ({
  user: state.user,
  error: state.error,
  loading: state.loading
});

export default connect(mapState, null)(UserInformation)