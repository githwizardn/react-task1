import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ProductList from "@/components/productList/productList"; 
import styles from "./page.module.css";

export default function Home() {

  const navList = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Store", link: "#store" }, 
    { name: "Contact", link: "#contact" }
  ];

  const socialNetworks = [
    { name: "Facebook", url: "https://www.facebook.com/gm663274/" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/nodo-m-3308041b1" },
    { name: "GitHub", url: "https://github.com/githwizardn/" },
    { name: "Email", url: "mailto:mrr.nodo@gmail.com" },
  ];

  return (
    <div>
      {/* Pass the new object-based list to Navbar */}
      <Navbar list={navList} />
      
      <main className={styles.mainContainer}>
        <section id="home">
          <h1>Evolving React Project</h1>
          <p>Welcome to the dynamic dashboard.</p>
        </section>

        {/*  anchor for Navbar link */}
        <section id="store" className={styles.storeSection}>
          <ProductList /> 
        </section>
      </main>

      <Footer list={socialNetworks} id="contact" />
    </div>
  );
}