import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <label htmlFor={props.id}><strong>{props.label}</strong></label>
    <br/>
    <label htmlFor={props.id}><strong>Max Length: {props['data-max']}  Current Length: {props['data-length']}</strong></label>
    <textarea className="form-control" rows="4" {...props}       
      style={!props['data-valid']?{
        borderColor:'red',
        color: 'black',
        backgroundColor: 'rgba(200,0,0,0.05)'
      }:{}} />
  </div>;
