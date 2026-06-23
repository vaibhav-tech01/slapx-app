import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-extrabold tracking-tight text-primary" aria-label="SlapX Home">
              Slap<span className="text-secondary">X</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The funniest sound prank app. Slap, fart, horn &amp; 100+ hilarious sounds to prank your friends!
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-dark">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/" className="transition hover:text-primary">Home</Link></li>
              <li><Link to="/privacy-policy" className="transition hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="transition hover:text-primary">Terms &amp; Conditions</Link></li>
              <li><Link to="/contact" className="transition hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          {/* Support Email */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-dark">Support</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="mailto:lord.dev0x@gmail.com" className="transition hover:text-primary">lord.dev0x@gmail.com</a>
              </li>
            </ul>
          </div>
          {/* Copyright */}
          <div className="flex flex-col justify-end">
            <div className="text-sm text-muted mt-6 lg:mt-0">
              &copy; {new Date().getFullYear()} SlapX. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
