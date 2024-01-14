
const Search = ({ONCLICK, ONCHANGE , VAL}) =>{

    return (
        <div>
            <input className="btn" type="text" value={VAL} onChange={ONCHANGE}/>
            <button className="btn" onClick={ONCLICK}>Search</button>
        </div>
    )
};

export default Search