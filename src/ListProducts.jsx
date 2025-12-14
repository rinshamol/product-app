import { useState } from "react"
import styles from "./ListProducts.module.css"
export default function ListProducts(props) {

    return(
        <div>

                <table >
                    <thead>
                    <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>DELETE</th>
                    <th>Edit</th>
                </tr>
                </thead>
                  <tbody>
              {
                props.allProducts.map(e => (
                  
                   <tr key={e.id} >
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td onClick={() =>props.onDelete(e.id)}>Delete</td>
                    <td onClick={() =>props.onEdit(e)}>Edit</td>
                   </tr>
               
                ))
            }
            </tbody>
            </table>
        </div>
    )
}