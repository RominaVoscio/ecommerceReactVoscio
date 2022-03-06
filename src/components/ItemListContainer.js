import ItemCount from './ItemCount'
const ItemListContainer =(prop) =>{
    const miOnAdd=()=>{
    }
   
    return(
        <main className="container">
            <h2> {prop.greeting}! </h2>
            <ItemCount stock={5} inicial={1} OnAdd={miOnAdd}/>
        </main>
    );
}
export default ItemListContainer;