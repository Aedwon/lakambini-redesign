/**
 * Navbar — Main site navigation.
 * Slot: /components/layout/
 */
export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md">
      <a href="/" className="text-lg font-bold tracking-wider">
        LAKAMBINI
      </a>

      <ul className="hidden gap-8 text-sm font-medium md:flex">
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
