import { connect } from 'react-redux'
import { addItem, removeItem } from './Action'
import Form from './Form'
import {FormControl} from "react-bootstrap";
import React from "react";

const mapStateToProps = state => ({
    data: state.data,
    style: state.view,
})

const mapDispatchToProps = dispatch => ({
    removeItem: (id) => dispatch(removeItem(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)