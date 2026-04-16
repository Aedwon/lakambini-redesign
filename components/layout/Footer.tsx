import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest pt-20 pb-8 text-on-surface">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-surface-container-highest pb-12">
        
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h3 className="headline-sm text-primary font-semibold">LAKAMBINI</h3>
          <p className="body-sm text-on-surface-variant max-w-sm">
            Premium B2B digital solutions and event management, designed for a regal audience.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="label-md text-primary">QUICK LINKS</h4>
          <Link href="/about" className="body-sm hover:text-primary transition-colors">About Us</Link>
          <Link href="/services" className="body-sm hover:text-primary transition-colors">Core Divisions</Link>
          <Link href="/portfolio" className="body-sm hover:text-primary transition-colors">Portfolio</Link>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-4">
          <h4 className="label-md text-primary">CONTACT</h4>
          <p className="body-sm">hello@lakambini.com</p>
          <p className="body-sm">+63 (2) 8123 4567</p>
          <p className="body-sm text-on-surface-variant">
            BGC, Taguig City, Philippines
          </p>
        </div>

        {/* Social Media icons */}
        <div className="flex flex-col gap-4">
          <h4 className="label-md text-primary">FOLLOW US</h4>
          <div className="flex gap-4">
            <a href="#" className="body-sm hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="body-sm hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="body-sm hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="body-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} Lakambini Events. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="body-sm text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="body-sm text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
