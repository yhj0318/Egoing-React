import logo from './logo.svg';
import './App.css';
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
        props.onChangeMode(event.target.id); /* a태그의 id값을 얻어내기 위해서 event객체를 사용함 target으로 id를 받음 */
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
  const topics =
  [
    {id:1, title:"html", body:"htmp is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."}
  ]
  return (
    <div>
      {/* Header 컴포넌트에 이벤트 기능을 넣는 방법 */}
      <Header title="WEB" onChangeMode={()=>
      {
        alert('Header');
      }}></Header> {/* 리액트의 속성을 props라고 함 */}
      <Nav topics={topics} onChangeMode={(id)=>
        {
          alert(id);
        }}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}
export default App;