import { Compass, Facebook, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Compass className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">Almas Voyages</span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Discover the world with us. Let's make your travel dreams come true.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/destinations" className="text-muted-foreground hover:text-primary">Destinations</Link></li>
              <li><Link href="/packages" className="text-muted-foreground hover:text-primary">Packages</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@almasvoyages.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Travel Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Almas Voyages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}