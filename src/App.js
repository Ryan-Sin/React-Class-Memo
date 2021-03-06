import React, { Component } from 'react';
import List from './components/List';
import Input from './components/Input';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const style = {

  MainContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: '30px',
    overflow: 'hidden',
    minHeight: "100vh",
  },

  BodyContainer: {
    width:"80%",
  },

  Title: {
    textAlign: "center",
    border: "1px solid gray",
  },

  Body: {
    display: "flex",
    height: "100%"
  },

}

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
        itemList: [], //메모 아이템을 담을 배열
        contents: "", // 메모 내용
    }
    //이벤트 함수 등록
    this.contentChange = this.contentChange.bind(this)    
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  /**
   * @author Ryan
   * @description Component 최초 랜더링 시 데이터 불러와 적용
   */
  componentDidMount(){
    try {
      const items = localStorage.getItem("item")
      
      // items가 있다면 itemList state 업데이트
      if(items){
        this.setState({itemList: JSON.parse(items)})
      }     
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * @author Ryan
   * @description 최종 state 값 localStorage 저장
   */  
  componentDidUpdate(nextProps, nextState, snapshot){

    //기존 state 값과 변경된 state 값이 다르면 변경 state 값 저장
    if(nextState.itemList.length !== this.state.itemList.length){
      localStorage.setItem("item", JSON.stringify(this.state.itemList))
    }
  }

  /**
   * @author Ryan
   * @descirption Input 입력 값을 받는 함수
   */
  contentChange = (e) =>{
    this.setState({
      contents : e.target.value
    })
  }

  /**
   * @author Ryan
   * @descirption 등록 버튼 클릭 함수
   */
  addItem = (e) => {
    e.preventDefault();

    this.setState( state => {
      return {
       itemList: state.itemList.concat(state.contents) // 배열에 데이터를 추가한다.
      }
    })
  }

  /**
   * @author Ryan
   * @description 메모 아이템 클릭시 삭제 함수
   */
  removeItem = (data) =>{
    this.setState(state => {
      return {
       itemList: state.itemList.filter(item => item !== data) //특정 아이템을 제외한 나머지 아이템을 새로운 배열을 만들어 반환 한다.
      }
    })
  }

  render() {
    return (
         <Container style={{marginTop: '30px'}}>
           <Row className="justify-content-center">
            <div style={style.BodyContainer}>
              <h1 style={style.Title}>React Class Memo Project</h1>
                <div style={style.Body}>
                    <List itemList={this.state.itemList} removeItem={this.removeItem}/>
                    <Input contentChange={this.contentChange} addItem={this.addItem} />
                </div>
            </div>
          </Row>
         </Container>
    );
  }
}

export default App;