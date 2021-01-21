import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions'

const Counter = ({counter,inc,dec,cls}) =>{
    return(
        <div className="counter">
        <div className="showbox">
    <h1>{counter}</h1>
        </div>
        <div className="buttons">
          <button onClick={inc} className="btn" id="inc"/>
          <button onClick={dec} className="btn" id="dec"/>
          <button onClick={cls} className="btn" id="cls"/>
        </div>
        <div className="buttons uploads">
          <button className="btn" id="download"/>
          <button className="btn" id="upload"/>
        </div>
      </div>
    )
}
const mapStateToProps = (state) =>{
  return {
    counter: state
  }
}

export default connect(mapStateToProps, actions)(Counter)