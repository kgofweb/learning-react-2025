import { useState } from "react"

export default function Stock() {
   // State name product
   const [nameProduct, setNameProduct] = useState('T-Shirt React')
   // State stock
   const [stock, setStock] = useState(5)

   // Fix limit
   const STOCK_MIN = 0
   const STOCK_MAX = 20

   // Function to change product name
   const changeProduitName = (event) => {
      setNameProduct(event.target.value)
   }

   // Add product
   const addProduct = () => {
      stock < STOCK_MAX ? setStock(stock + 1) : ''
   }
   
   // Remove one product
   const removeProduct = () => {
      stock > STOCK_MIN ? setStock(stock - 1) : ''
   }
   
   // Delete all product
   const deleteProduct = () => { setStock(0) }

   return (
      <div>
         {/* Input to change name of product */}
         <input 
            type="text" 
            value={nameProduct}
            onChange={changeProduitName}
         />
         <br />
         Produit : {nameProduct}
         <br />
         Stock actuel : {stock}
         <br />
         <button onClick={removeProduct} disabled={stock === STOCK_MIN}>
            Dec ➖
         </button>
         <button onClick={deleteProduct}>Réini 🔄</button>
         <button onClick={addProduct} disabled={stock === STOCK_MAX}>
            Inc ➕
         </button>
         <br />
         <br />
         {/* Messages conditionnels */}
         {stock === STOCK_MIN && <p>Rupture de stock ❌</p>}
         {stock === STOCK_MAX && <p>Stock maximal atteint ✅</p>}
      </div>
   )
}
