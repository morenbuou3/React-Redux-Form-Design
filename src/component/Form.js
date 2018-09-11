import React from 'react';
import Header from "./ContainerHeader";
import DateTimePicker from 'react-bootstrap-date-time-picker';
import {Button, FormControl} from "react-bootstrap";

class Form extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { data, removeItem, style } = this.props;
        return (
            <div style={{padding:'10px'}}>
                <div>
                    <Header />
                </div>
                <div>
                    {data.map(n => <div>{n.text}<Button style={style} onClick={() => removeItem(n.id)}>❌</Button></div>)}
                </div>
            </div>
        );
    }
}

export default Form;