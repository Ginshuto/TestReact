import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimerOne from './components/TimerOne';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Couleur en fonction du nombre de secondes restantes', () =>{
  const div = document.createElement(TimerOne());
  ReactDOM.render(<App/>, div);
  const test = TimerOne();
  test.setSeconds(30);
  expect(this.state.Class).toBe("blue");
})