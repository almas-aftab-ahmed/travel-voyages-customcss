"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Compass className="h-8 w-8 text-primary" />
              <span className="ml-2 text-2xl font-bold text-primary">Almas Voyages</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-foreground hover:text-primary px-3 py-2">Home</Link>
            <Link href="/destinations" className="text-foreground hover:text-primary px-3 py-2">Destinations</Link>
            <Link href="/packages" className="text-foreground hover:text-primary px-3 py-2">Packages</Link>
            <Link href="/about" className="text-foreground hover:text-primary px-3 py-2">About</Link>
            <Link href="/contact" className="text-foreground hover:text-primary px-3 py-2">Contact</Link>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <Button
              variant="ghost"
              className="ml-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">Home</Link>
            <Link href="/destinations" className="block px-3 py-2 text-foreground hover:text-primary">Destinations</Link>
            <Link href="/packages" className="block px-3 py-2 text-foreground hover:text-primary">Packages</Link>
            <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}