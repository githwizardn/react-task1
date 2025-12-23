# EVOLVING REACT: THE DYNAMIC STORE

This is a Next.js project that has evolved from basic component mapping to a fully interactive, state-managed product dashboard. 

🚀 Project Evolution (Task 1 to Task 2)
The project demonstrates the transition from static data flow to dynamic API integration and complex state logic using React hooks.

✨ New Features (Task 2)
- **API Integration:** Dynamically fetches 20 products from the FakeStoreAPI using `useEffect`.
- **State-Managed Trash Bin:** Logic to "Delete" products from the main view and move them to a dedicated deleted section.
- **Restore Functionality:** Users can undo deletions, moving items back from the Trash Bin to the active Product Grid.
- **Conditional Rendering:** The "Deleted Items" section only appears when there is at least one item in the trash.
- **Anchored Navigation:** Navbar links are now object-based, allowing smooth scrolling to specific sections (`#store`, `#contact`).
- **Modular Architecture:** The product logic is encapsulated in its own `ProductList` component for better scalability.

🛠️ Technical Stack
- **Next.js:** App Router architecture.
- **React Hooks:** `useState` for data management and `useEffect` for the Fetch API.
- **CSS Modules:** Scoped styling with CSS Grid for a responsive product layout.
- **Next/Image:** Optimized remote image rendering from external domains.

🚀 Getting Started
- **Clone and Install:**
   
   npm install
   Then 
   npm run dev

   Open http://localhost:3000 with your browser to see the result.
   