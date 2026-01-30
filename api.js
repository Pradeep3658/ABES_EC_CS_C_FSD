const getData =>{
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error fetching data:", error))
}
export default getData;
    


