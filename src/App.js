import { Header, Hero ,Main,About, Copyright} from './container';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className='h-[40vh] w-full'/>
      <Main/>
      <About/>
      <Copyright/>
    </div>
  );
}

export default App;
