const Count =()=>
{
    const [cont,setCount]=useState(0);
    const decrease =()=> setCount(count -1);
    const increase =()=> setCount(count+1);
    const reset =()=> setCount(0);
    return (
        <div id="counter">
            <h1>counter</h1>
            <div className="counter-container">
                <span>{count}</span>
                <button onCLick={increase}>+</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}
export default Count