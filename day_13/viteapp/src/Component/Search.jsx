const Search = ({searchHandler}) => {
  return (
    <div className="search">
        <input type="text" name="search" id="search" placeholder="Search for products, e.g. 'tent'" 
        onChange={(e)=>searchHandler(e.target.value)} />
        <button onClick={(e)=>{const input=document.getElementById('search'); if(input) input.value=''; searchHandler('')}}>Clear</button>
    </div>
  )
}

export default Search