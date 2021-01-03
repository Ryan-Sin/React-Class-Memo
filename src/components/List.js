import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

const style = {
    ListContainer:{
        overflow: "scroll",
        padding: "2px",
        height: "510px",
        borderTop: "1px solid #efefef",
    },
    ListItmes:{
        textAlign: "left",
    }
}

/**
 * @author Ryan
 * @description 등록한 메모 보여주는 Component
 */

class List extends Component {
    render() {
        return (
            <Card>
                <Card.Header>메모 목록</Card.Header>
                <ListGroup style={style.ListContainer}>
                    <ListGroup.Item style={style.ListItmes}>아이템 1</ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}

export default List;