export default function Options({updateFeedback, reset, total}) {
    const shouldShowReset = total >= 1;
  return (
    <>
    <button onClick={() => updateFeedback('good')}>Good</button>
    <button onClick={() => updateFeedback('neutral')}>Neutral</button>
    <button onClick={() => updateFeedback('bad')}>Bad</button> 
    {shouldShowReset && <button onClick={reset}>Reset</button>}
    </>
  )
}
