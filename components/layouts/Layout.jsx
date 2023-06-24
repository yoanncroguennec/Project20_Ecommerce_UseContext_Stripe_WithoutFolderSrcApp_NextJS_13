import { Footer, Navbar } from ".";

export default function Layout ({ children }) {

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "85vh" }}>{children}</main>
      <Footer />
    </>
  )
}
