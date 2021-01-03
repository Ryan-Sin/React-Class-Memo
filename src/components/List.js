import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'

const style = {
    LeftContainer: {
        width: "100%",
        margin: "0 5px 0 0",
        fontSize: "14px",
        textAlign: "center",
        border: "1px solid gray",
    },

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
            <Card style={style.LeftContainer}>
                <Card.Header>메모 목록</Card.Header>
                <ListGroup style={style.ListContainer}>
                    {this.props.itemList.map(data => 
                        <ListGroup.Item key={data} style={style.ListItmes} onClick={e => this.props.removeItem(data)}>
                            {data}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card>
        );
    }
}

export default List;