import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
export default function Home() {
  //   Create a 'list' array for navigation
  const navList = ["Home", "About", "Contact", "Blog", "Careers"];

  //   Create an array for social networks
  const socialNetworks = [
    { name: "Facebook", url: "https://www.facebook.com/gm663274/" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/nodo-m-3308041b1" },
    { name: "GitHub", url: "https://github.com/githwizardn/" },
    { name: "Email", url: "mailto:mrr.nodo@gmail.com" },];

  return (
    <div>
      <Navbar list={navList} />
      
      {/*  Use the class instead of inline styles */}
      <main className={styles.mainContainer}>
        <h1>React Task 1</h1>
        <p>
          This project demonstrates passing arrays as props and rendering them 
          using the map() function.
        </p>
      </main>

      <Footer list={socialNetworks} />
    </div>
  );
}