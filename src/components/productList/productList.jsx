"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./ProductList.module.css";
// ProductList component to fetch and display products with delete/restore functionality
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [deletedProducts, setDeletedProducts] = useState([]);
// Fetch products from the API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
// Handle product deletion
  const handleDelete = (item) => {
    setProducts(products.filter((p) => p.id !== item.id));
    setDeletedProducts([...deletedProducts, item]); 
  };
// Handle product restoration
  const handleRestore = (item) => {
    setDeletedProducts(deletedProducts.filter((p) => p.id !== item.id));
    setProducts([...products, item]);
  };
// Render the product list and deleted products section
  return (
    <div className={styles.wrapper}>
      {/* Active Products Grid */}
      <div className={styles.productGrid}>
        {products.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <Image 
                src={item.image} 
                alt={item.title} 
                width={120} 
                height={120} 
                style={{ objectFit: "contain" }} 
              />
            </div>
            <h3>{item.title.substring(0, 25)}...</h3>
            <p className={styles.price}>${item.price}</p>
            <button className={styles.deleteBtn} onClick={() => handleDelete(item)}>
              Delete Product
            </button>
          </div>
        ))}
      </div>

      {/* Deleted Section (Conditional Rendering) */}
      {deletedProducts.length > 0 && (
        <div className={styles.deletedSection}>
          <h2>Trash Bin ({deletedProducts.length})</h2>
          <div className={styles.deletedContainer}>
            {deletedProducts.map((item) => (
              <div key={item.id} className={styles.deletedItem}>
                <span>{item.title}</span>
                <div className={styles.restoreActions}>
                   <strong className={styles.deletedPrice}>${item.price}</strong>
                   <button 
                     className={styles.restoreBtn} 
                     onClick={() => handleRestore(item)}
                   >
                     Restore
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}