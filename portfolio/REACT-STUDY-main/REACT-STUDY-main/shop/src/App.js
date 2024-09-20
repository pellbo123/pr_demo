import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Navbar, Container, Nav, Form } from 'react-bootstrap';
import data from './data.js';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './Routes/Detail.js';
import axios from 'axios';


function App() {
  let [shoes, setShoes] = useState(data)
  let navigate = useNavigate();

  return (
    <div className='Main'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
          <Nav ClassName='me-auto'>
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=> {
                console.log(결과.data);
                let copy = [...shoes,...결과.data]
                setShoes(copy)
              })
              .catch(()=>{console.log('시발')});
            }}>가져오기</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">디테일</Link> */}

      <Routes>
        <Route path='/' element={
        <>
        <div className='main-bg'></div>
        <div className='container'>
          <div className='row'>
          {shoes.map((a,i) => {
            return (<Card shoes={shoes[i]} i={i} key={i}></Card>)
          })}
          </div>
        </div>
        </>
        }></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}/>}></Route>
        <Route path='*' element={<div>없는 페이지 입니다. 404 Error</div>}></Route>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버 입니다.</div>}></Route>
          <Route path='location' element={<About/>}></Route>
        </Route>
        <Route path='/event' element={<EventPage></EventPage>}>
          <Route path='one' element={<p>첫 주문시 공산당 1+1 이벤트</p>}></Route>
          <Route path='two' element={<p>입당 기념 선거권 발급받기</p>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
function EventPage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}
function Card(props) {
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + '/shoe'+props.i+'.png'} width="70%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}
export default App;
