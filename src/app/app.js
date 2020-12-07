import React from 'react';

import Example from 'src/components';

const App = () => {
  //? useState hook: [ stateVar, setState-function ] = useState(initial-state)
  const [hello, setHello] = React.useState('');
  const [world, setWorld] = React.useState('');

  //? useEffect hook: simulates lifecycle-methods
  React.useEffect(() => {
    const compDidMount = async () => {
      setTimeout(() => {
        setHello('Hello ');
      }, 5e3);
    };

    compDidMount();
  }, []);
  //? [] === componentDidMount

  React.useEffect(() => {
    const compDidUpdate = async () => {
      setTimeout(() => {
        setWorld('World!');
      }, 1e3);
    };

    if (hello) {
      compDidUpdate();
    }
  }, [hello]);
  //? [listener1, listener2, etc...] === componentDidUpdate
  //! will still run on mount, hence the 'if' statement!

  return (
    <>
      <h1 className="example">{hello + world}</h1>
      {world && <Example />}
    </>
  );
};

export default App;
