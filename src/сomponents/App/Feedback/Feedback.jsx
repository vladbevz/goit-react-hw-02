export default function Feedback({good, neutral, bad, total, percent}) {
    if(total > 0){
        return (
            <>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive:{percent}</p>
            </>
        )
    }
        

    }
    
