// src/App.js
import React from 'react';

import UseReducerExample from './components/UseReducerExample';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseContextExample from './components/UseContextExample';
import UseEffectExample from './components/UseEffectExample';
import UncontrolledForm from './components/UncontrolledForm'; // Assuming you also created this for 8b

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hook Examples</h1>
      </header>
      <div>
        <h2>useReducer Example</h2>
        <UseReducerExample />
        <h2>useMemo Example</h2>
        <UseMemoExample />
        <h2>useCallback Example</h2>
        <UseCallbackExample />
        <h2>useContext Example</h2>
        <UseContextExample />
        <h2>useEffect Example</h2>
        <UseEffectExample />
        <h2>Uncontrolled Form Example (useRef)</h2>
        <UncontrolledForm />
      </div>
    </div>
  );
}

export default App;
