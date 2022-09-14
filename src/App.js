import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import styleCalc from './App.css';
import Calc from './components/Calculator';
import styleMenu from './components/Menu.css';
import styleHome from './components/Home.css';
import styleCalFrame from './components/Calc.css';
import styleQuote from './components/Quote.css';

const Home = () => {
  return (
    <div className="home_container" style={styleHome}>
      <h2>Welcome to our page!</h2>
      <article>
        <p className="para_one">
          Math has a certain logic to it. If you use it to accurately describe a situation,
          sometimes you can predict the inevitable — for instance, the moment an eclipse will take place — centuries in advance.
          To those unfamiliar with the math behind the prediction, this outcome might seem like magic. Indeed, the science fiction author Arthur C. Clarke famously wrote,
          “Any sufficiently advanced technology is indistinguishable from magic.”
        </p>
        <p className="para_two">
          In today&apos;s Insights puzzle we&apos;ll explore four examples of mathematical magic that can seem,
          at first glance, like mind reading. Just like stage magic,
          these examples can leave you wondering, “How did they know that?
        </p>
        <p className="para_three">
          Many of us have experienced this as children.
          We are asked by a friend to think of a certain number without revealing it.
          We are then asked to do a series of simple arithmetical operations on it. Finally,
          our friend astonishes us by telling us our secret number. So how is this done?
        </p>
      </article>
    </div>
  );
};

const Calculator = () => {
  return (
    <div className="calc_container" style={styleCalFrame}>
      <h2>Let&apos;s do some math!</h2>
      <div style={styleCalc}>
        <Calc />
      </div>
    </div>
  );
};

const Quote = () => {
  return (
    <div className="quote_container" style={styleQuote}>
      <h2>
        Mathematics is not about numbers, equations, computations, or
        algorithms: it is about understanding.
        <br />
        -William Paul Thurston
      </h2>
    </div>
  );
};

const Navegation = () => {
  return (
    <div className="container" style={styleMenu}>
      <h1>Math Magicians</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/Quote">Quote</NavLink>
      </nav>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
