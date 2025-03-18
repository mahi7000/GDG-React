import { useCallback, useMemo, useReducer } from 'react';
import './App.css'
import useCharacterCount from './Components/useCharacterCount';

const initialState = { text: '', limit: 258 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { text, count, handleTextChange } = useCharacterCount(state.text);

  const handleChange = useCallback((e) => {
    const {value} = e.target;
    if (value.length <= state.limit) {
      dispatch({ type: 'SET_TEXT', payload: value});
    }
  }, [dispatch, state.limit]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied!')
    });
  };

  return (
    <div className="app">
      <textarea
        value={text}
        onChange={handleTextChange}
        rows="10"
        columns="500"
        placeholder='Type Here ...'
      />
      <div>{count}/{state.limit}</div>
      <div>
        {count >= state.limit * 0.9 ? <p>You are at 90%</p> : ""}
      </div>
      <button onClick={copyToClipboard}>Copy</button>
    </div>
  );
}

export default App
