import logo from './logo.svg';
import './App.css';
function Header(props) // 함수로 만들때는 무조건 대문자로 시작해야함
{
  console.log('props', props, props.title);
  return <header>
  <h1><a href='/'>{props.title}</a></h1> {/* { }는 표현식으로 취급되기 때문에 해석되서 값이 웹에 반영된다. */}
  </header>
}
function Nav(props)
{
  const lis = []
  for(let i= 0 ;i<props.topics.length; i++)
  {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
  }
  return <nav>
  <ol>
    {lis}
  </ol>
</nav>
}
function Article(props)
{
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
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
      <Header title="WEB"></Header> {/* 리액트의 속성을 props라고 함 */}
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
    </div>
  );
}

export default App;
