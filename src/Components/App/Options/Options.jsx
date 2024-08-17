export default function Options({updateFeedback, reset, good, neutral, bad}) {
    const shouldShowReset = good >= 1 || neutral >= 1 || bad >= 1;
  return (
    <>
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button> 
    {shouldShowReset && <button onClick={reset}>Reset</button>}
    </>
  )
}
