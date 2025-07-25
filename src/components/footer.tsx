import Link from 'next/link';
import { Mail, MapPin, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';
import Logo from './logo';
import Container from './ui/container';

const footerNavs = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'AI FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Terms of Service' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t">
      <Container className="py-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted partner in financial clarity and success.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2">
             <div className="space-y-4">
              <h3 className="font-headline text-lg font-semibold text-primary">Quick Links</h3>
              <ul className="space-y-2">
                {footerNavs.slice(0, 4).map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-headline text-lg font-semibold text-primary">Contact Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 shrink-0" />
                  <span>123 Finance Street, Suite 456, Moneyville, USA 78910</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0" />
                  <a href="mailto:contact@csaccountancy.com" className="hover:text-primary transition-colors">contact@csaccountancy.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CS Accountancy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
