import React from 'react';
import {Button, FormGroup, Modal, Radio} from "react-bootstrap";

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            type: 'INPUT',
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.changeType = this.changeType.bind(this);
        this.add = this.add.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    };

    handleShow() {
        this.setState({ show: true });
    };

    changeType(e) {
        this.setState({ type: e.currentTarget.value });
    };

    add() {
        let text = (this.state.type === 'INPUT' ? <input /> : <input type='date'/>);
        this.props.addItem(text);
        this.handleClose();
    }

    render() {
        return (
            <div>
                {this.props.style.display === '' ?
                    <Button bsStyle="primary" onClick={this.props.showEdit}>Preview</Button>
                        : <Button bsStyle="primary" onClick={this.props.showPreview}>Edit</Button>}

                <Button style={this.props.style} onClick={this.handleShow}>➕</Button>
                <div className="static-modal">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header>
                            <Modal.Title>Select Field Type</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <FormGroup>
                                <Radio name="radioGroup" defaultChecked onClick={this.changeType} value='INPUT'>
                                    Text Input
                                </Radio>
                                <Radio name="radioGroup" onClick={this.changeType} value='DATE'>
                                    Date Picker
                                </Radio>
                            </FormGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button bsStyle="primary" onClick={this.add}>Add</Button>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Header;