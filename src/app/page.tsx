import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  ArrowRight,
  Calculator,
  Landmark,
  FileText,
  Sparkles,
  Quote,
} from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Container from '@/components/ui/container';

export default function Home() {
  const services = [
    {
      icon: <Calculator className="w-10 h-10 text-primary" />,
      title: 'Bookkeeping & Accounting',
      description:
        'We provide meticulous bookkeeping and accounting services to ensure your financial records are accurate and up-to-date.',
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: 'Tax Preparation & Planning',
      description:
        'Our experts help you navigate complex tax regulations, minimize liabilities, and maximize your returns.',
    },
    {
      icon: <Landmark className="w-10 h-10 text-primary" />,
      title: 'Business Advisory',
      description:
        'From startup consulting to strategic planning, we offer advisory services to help your business grow and succeed.',
    },
  ];

  const testimonials = [
    {
      quote:
        "CS Accountancy transformed our financial processes. Their attention to detail and proactive advice have been invaluable to our company's growth.",
      name: 'John D.',
      company: 'Innovate Inc.',
    },
    {
      quote:
        'The team is professional, knowledgeable, and always responsive. They make tax season a breeze. Highly recommended!',
      name: 'Sarah L.',
      company: 'Tech Solutions',
    },
    {
      quote:
        'As a small business owner, their advisory services were a game-changer. They provided clear, actionable insights that helped us scale.',
      name: 'Mike R.',
      company: 'Local Goods Co.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="py-20 sm:py-32 bg-secondary">
        <Container className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
            Expert Financial Guidance for Your Business
          </h1>
          <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-secondary-foreground">
            We provide comprehensive accounting and advisory services tailored to
            your needs, helping you achieve financial clarity and success.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">
              Start Here <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>

      <section id="about" className="py-16 sm:py-24">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              data-ai-hint="team meeting"
            />
          </div>
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
              About CS Accountancy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Founded on the principles of integrity, professionalism, and
              trust, CS Accountancy has been a reliable partner for businesses
              and individuals for over a decade. Our mission is to empower our
              clients with the financial knowledge and support they need to
              thrive in a competitive landscape.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Our team of certified accountants and financial experts is
              dedicated to delivering personalized solutions and building
              long-lasting relationships.
            </p>
          </div>
        </Container>
      </section>

      <section id="services" className="py-16 sm:py-24 bg-secondary">
        <Container className="text-center">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">
            Our Services
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            We offer a wide range of services to meet your financial needs.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {services.map((service) => (
              <Card key={service.title}>
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild variant="link" className="mt-8 text-primary">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>

      <section id="testimonials" className="py-16 sm:py-24">
        <Container>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary text-center">
            What Our Clients Say
          </h2>
          <Carousel className="mt-12 w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                        <Quote className="w-10 h-10 text-accent mb-4" />
                        <p className="text-lg italic text-muted-foreground">
                          "{testimonial.quote}"
                        </p>
                        <p className="mt-4 font-bold font-headline">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.company}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </section>

      <section id="faq-cta" className="py-16 sm:py-24 bg-secondary">
        <Container className="text-center">
          <Sparkles className="mx-auto h-12 w-12 text-accent" />
          <h2 className="mt-4 font-headline text-3xl sm:text-4xl font-bold text-primary">
            Have Questions?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            Get instant answers to common questions with our new AI-powered FAQ
            tool.
          </p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/faq">
              Ask Our AI Assistant <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
