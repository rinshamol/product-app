import { useState } from "react";
import ListProducts from "./ListProducts";

export default function Products () {
const [products, setProducts] = useState([
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 },
  { id: 4, name: "Keyboard", price: 1500 }
]);
const [error, setError] = useState("")
const [item, setItem] = useState({id :"", name : "" , price : ""})
const [isEditing, setIsEditing] = useState(false)
const [editId, setEditId] = useState()
const [search, setSearch] = useState("")
const filteredItem = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
)

function AddItem(e){
       e.preventDefault();
      
    if(item.id === ""){
        setError("ID required")
        return
    } else if (item.name === "") {
        setError("Name required")
        return
    } else if (item.price === ""){
        setError("Price required")
        return
    }
    setError("")
    setProducts(prev => [...prev,item])
    setItem({id : "", name : "" , price : ""})
}

function handleDelete(id){
    setProducts(prev =>
        prev.filter(p => p.id != id)
    )
}
function SetEdit(product){
    setItem(product)
    setIsEditing(true)
    setEditId(product.id)
}
function EditItem(e){
    e.preventDefault();
    setProducts(prev => prev.map(p => p.id === editId ? item : p))
    setIsEditing(false)
    setEditId(null)
    setItem({id : "", name : "" , price : ""})
}

return (
    <div>
        <form onSubmit={isEditing?EditItem:AddItem}>
            <input type="text" onChange={(e) => (setItem({...item,id : e.target.value}))} value={item.id} placeholder="Enter id" /> <br />
            <input type="text" onChange={(e) => (setItem({...item,name : e.target.value}))} value={item.name} placeholder="Enter name" /> <br />
            <input type="text" onChange={(e) => (setItem({...item,price : e.target.value}))} value={item.price} placeholder="Enter price"/>
            <br />
            <button type="submit">Add</button>

        </form>
        
        <br />
        <h3>{error}</h3>
        <br />
         <input type="text" onChange={(e) =>setSearch(e.target.value)} value={search} placeholder="Search "  />

        <br />

        <ListProducts allProducts = {search === "" ? products : filteredItem} onDelete = {handleDelete} onEdit = {SetEdit} />

    </div>
)
}