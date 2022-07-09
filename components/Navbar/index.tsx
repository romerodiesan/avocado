// NextJS
import Link from "next/link";

function Navbar () {
  return (
    <ol className="flex text-white p-3 space-x-3 bg-green-900">
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
  )
}

export default Navbar;