// NextJS
import Link from "next/link";

function Navbar () {
  return (
    <div>
      <ol>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ol>
    </div>
  )
}

export default Navbar;