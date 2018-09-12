import { connect } from 'react-redux'
import {addItem, hide, show} from '../Action/Action'
import Header from '../Header'
import {FormControl} from "react-bootstrap";
import React from "react";

const mapStateToProps = state => ({
    data: state.data,
    style: state.view,
})

const mapDispatchToProps = dispatch => ({
    addItem: (text) => dispatch(addItem(text)),
    showEdit: () => dispatch(hide()),
    showPreview: () => dispatch(show()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)