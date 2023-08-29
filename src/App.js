/**
 * Prop 컴포넌트의 입력값 -> 컴포넌트를 사용하는 외부자료를 위한 데이터
 * return 컴포넌트의 출력값 -> 새로운 UI를 구성
 * State 컴포넌트를 만드는 내부자료를 위한 데이터
 */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function Article(props)
{
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}
function Header(props) // 함수로 만들때는 무조건 대문자로 시작해야함
{
  // console.log('props', props, props.title);
  return <header>
    <h1><a href="/" onClick={(event)=> /* event 상황을 제어할 수 있는 여러가지 정보를 가지고있다. */
    {
      event.preventDefault();  /* 기본동작을 방지한다.(클릭해도 reload되지 않음) */
      props.onChangeMode();
    }}>{props.title}</a></h1>
  {/* <h1><a href='/'>{props.title}</a></h1> { }는 표현식으로 취급되기 때문에 해석되서 값이 웹에 반영된다. */}
  </header>
}
function Nav(props)
{
  const lis = []
  for(let i= 0 ;i<props.topics.length; i++) /* topics의 원소의 갯수만큼 반복 */
  {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id}/* id값을 얻어내기 위해 t.id */ href={'/read/'+t.id} onClick={event=>
      {
        event.preventDefault();
        props.onChangeMode(Number(event.target.id)); /* a태그의 id값을 얻어내기 위해서 event객체를 사용함 target으로 id를 받음 */
      }}>{t.title}</a>
      </li>)
  }
    return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function App() {
  // const _mode = useState('WELCOME'); // useState 상태로 업그레이드 초기값
  // const mode = _mode[0]; // 0번째는 mode의 상태값을 읽을 수 있다
  // const setmode = _mode[1]; // 1번째는 setmode를 통해서 값을 변경이 가능하다
  const [mode, setmode] = useState('WELCOME'); // 축약형
  const [id, setId] = useState(null);
  console.log('_mode', mode);
  const topics =
  [
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."}
  ]
  let content = null;
  if(mode === 'WELCOME')
  {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }
  else if(mode === 'READ')
  {
    let title, body = null;
    for(let i = 0; i<topics.length; i++)
    {
      console.log(topics[i].id, id);
      if(topics[i].id === id)
      {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title="Read" body={body}></Article>
  }
  return (
    <div>
      {/* Header 컴포넌트에 이벤트 기능을 넣는 방법 */}
      <Header title="WEB" onChangeMode={()=>
      {
        // alert('Header');
        // mode = 'WELCOME';
        setmode('WELCOME'); // 값을 바꿀땐 setmode
      }}></Header> {/* 리액트의 속성을 props라고 함 */}
      {/* Nav 컴포넌트에 id값을 아규먼트로 하는 이벤트 기능을 넣는 방법 */}
      <Nav topics={topics} onChangeMode={(_id)=>
        {
          // alert(id);
          // mode = 'READ';
          setmode('READ');
          setId(_id);
        }}></Nav>
      {content}
    </div>
  );
}
export default App;