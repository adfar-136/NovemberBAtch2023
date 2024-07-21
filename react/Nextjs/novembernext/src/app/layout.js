import Count from "./components/Count";
import Navbar from "./components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <nav>
          <ul>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
          </ul>
        </nav> */}
        <Navbar/>
        {children}
        {/* <mark>bataw kya chahiya</mark>  */}
      </body>
    </html>
  );
}
