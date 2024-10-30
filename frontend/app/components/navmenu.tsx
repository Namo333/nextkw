'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const categories = [
  { 
    name: 'Category 1', 
    links: [
      { name: 'Link 1', href: '/category-1/link-1' },
      { name: 'Link 2', href: '/category-1/link-2' },
      { name: 'Link 3', href: '/category-1/link-3' },
      { name: 'Link 4', href: '/category-1/link-4' },
      { name: 'Link 5', href: '/category-1/link-5' },
    ]
  },
  { 
    name: 'Category 2', 
    links: [
      { name: 'Link 1', href: '/category-2/link-1' },
      { name: 'Link 2', href: '/category-2/link-2' },
      { name: 'Link 3', href: '/category-2/link-3' },
      { name: 'Link 4', href: '/category-2/link-4' },
      { name: 'Link 5', href: '/category-2/link-5' },
    ]
  },
  { 
    name: 'Category 3', 
    links: [
      { name: 'Link 1', href: '/category-3/link-1' },
      { name: 'Link 2', href: '/category-3/link-2' },
      { name: 'Link 3', href: '/category-3/link-3' },
      { name: 'Link 4', href: '/category-3/link-4' },
      { name: 'Link 5', href: '/category-3/link-5' },
    ]
  },
  { 
    name: 'Category 4', 
    links: [
      { name: 'Link 1', href: '/category-4/link-1' },
      { name: 'Link 2', href: '/category-4/link-2' },
      { name: 'Link 3', href: '/category-4/link-3' },
      { name: 'Link 4', href: '/category-4/link-4' },
      { name: 'Link 5', href: '/category-4/link-5' },
    ]
  },
]

const otherLinks = [
  { name: 'Link 2', href: '/link-2' },
  { name: 'Link 3', href: '/link-3' },
  { name: 'Link 4', href: '/link-4' },
  { name: 'Link 5', href: '/link-5' },
]

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative bg-background shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {categories.map((category, index) => (
                    <div key={index} className="py-2">
                      <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
                      <ul className="space-y-2">
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link 
                              href={link.href}
                              className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  {otherLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild className="mt-4">
                    <Link href="/submit-application">Submit Application</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Dropdown menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                  <ChevronDown className="ml-1 h-4 w-4 inline-block" aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[600px] p-4">
                <h3 className="text-lg font-semibold mb-4 text-center">Our Categories</h3>
                <div className="grid grid-cols-4 gap-4">
                  {categories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-primary">{category.name}</h4>
                      <ul className="space-y-1">
                        {category.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link 
                              href={link.href}
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Other navigation links */}
            {otherLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/">
              <p className='w-auto'>KvandoFinance</p>
            </Link>
          </div>

          {/* Submit Application button */}
          <div className="hidden lg:flex lg:items-center">
            <Button asChild className="text-base">
              <Link href="/submit-application">Submit Application</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}