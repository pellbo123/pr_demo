import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import {Nav} from 'react-bootstrap';

// let Box = styled.div`
//     padding : 20px;
//     color : grey;
// `;
// let YelloBtn = styled.button`
//     background : ${props=> props.bg};
//     color : black;
//     padding : 10px;
// `;
function Detail (props) {
    // useEffect(() => {
    //     console.log("hello")
    // });
    // let [count, setCount] = useState(0);

    let {id} = useParams();
    let myItem = props.shoes.find(function(x) {
        return x.id == id
    });
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="/shoe1.png"></img>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{myItem.title}</h4>
                    <p>{myItem.content}</p>
                    <p>{myItem.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
                <div>
                    {/* <Box>
                        <YelloBtn bg="red" onClick={()=> {setCount(count+1)}}>붉은</YelloBtn>
                        <YelloBtn bg="red">붉은색
                        </YelloBtn>
                    </Box> */}
                    <Nav variant="tabs" defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link eventKey="link0">버튼0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link1">버튼1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link2">버튼2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div>내용0</div>
                    <div>내용1</div>
                    <div>내용2</div>

                </div>
            </div>
        </div>
    )
}

export default Detail;