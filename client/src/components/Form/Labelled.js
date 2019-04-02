import React from "react";

export const Labelled = (props) =>
  <div className="inputWrapper">
    <label htmlFor={props.id}><strong>{props.label}</strong></label>
    <input 
      className="form-control" 
      style={!props['data-valid']?{
        borderColor:'red',
        color: 'black',
        backgroundColor: 'rgba(200,0,0,0.05)'
      }:{}} 
      {...props} 
      onChange={props.onChange} />
  </div>;
