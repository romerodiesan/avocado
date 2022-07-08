import Link from "next/link";

function NavbarComponent() {
  return (
    <div>
      <nav>
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
      </nav>
    </div>
  );
}

export default NavbarComponent;
