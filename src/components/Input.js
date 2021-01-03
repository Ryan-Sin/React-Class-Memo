import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const style = {
    Container: {
        display: "flex",
        flexDirection: "column",
    },
    RightContainer: {
        width: "100%",
        margin: "0 0 0 5px",
        fontSize: "14px",
        textAlign: "center",
        border: "1px solid gray",
    }
}

/**
 * @author Ryan
 * @description 메모를 등록하는 Component
 */
class Input extends Component {
    render() {
        return (
            <Card border="dark" style={style.RightContainer} >
                <Card.Header>메모 등록</Card.Header>
                <Card.Body>
              
                <InputGroup className="mb-3">
                <FormControl
                    placeholder="메모 내용"
                    aria-label="메모 내용"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="success" size="sm" style={style.Button}>등록</Button>
                </InputGroup.Append>
                </InputGroup>
                </Card.Body>
            </Card>
        );
    }
}

export default Input;