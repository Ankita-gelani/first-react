const Conditionrendering = () => {
    let a =true
    return (
        <>
        {/* { a ? <h2>hi</h2> : <span>Hellow</span>}  */}
        {/* { a && <h2>Dynamic rendering</h2> }  */} 
    
        { Object.keys(a) ? <h2>hi</h2> : <span>Hellow</span>} 
        </>
    );
};


export default Conditionrendering ;