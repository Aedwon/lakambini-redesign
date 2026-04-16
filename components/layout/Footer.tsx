/**
 * Footer — Site-wide footer.
 * Slot: /components/layout/
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Lakambini Events. All rights reserved.</p>
    </footer>
  );
}
