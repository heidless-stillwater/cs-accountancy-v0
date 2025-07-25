import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contact Us | CS Accountancy',
  description: 'Get in touch with CS Accountancy. Find our address, phone number, and email, or use our contact form to send us a message.',
};


export default function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            We're here to help. Reach out to us with any questions or to schedule a consultation.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Tax Services Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your needs..." rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Submit Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-headline">Our Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">123 Finance Street, Suite 456<br />Moneyville, USA 78910</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">(123) 456-7890</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:contact@csaccountancy.com" className="text-muted-foreground hover:text-primary">contact@csaccountancy.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
                <Image
                  src="https://placehold.co/600x400.png"
                  alt="Map to our office"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint="map city"
                />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
