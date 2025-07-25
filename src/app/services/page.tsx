import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Container from '@/components/ui/container';
import {
  Calculator,
  FileText,
  Landmark,
  ShieldCheck,
  Building,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | CS Accountancy',
  description: 'Explore the comprehensive financial services offered by CS Accountancy, including bookkeeping, tax preparation, business advisory, and more.',
};

const services = [
  {
    icon: <Calculator className="w-12 h-12 text-primary" />,
    title: 'Bookkeeping & Accounting',
    description:
      'We provide meticulous bookkeeping and accounting services to ensure your financial records are accurate and up-to-date, giving you a clear picture of your financial health.',
  },
  {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: 'Tax Preparation & Planning',
    description:
      'Our experts help you navigate complex tax regulations, minimize liabilities, and maximize your returns through strategic planning and precise preparation.',
  },
  {
    icon: <Landmark className="w-12 h-12 text-primary" />,
    title: 'Business Advisory',
    description:
      'From startup consulting to strategic growth planning, we offer advisory services to help your business overcome challenges and seize opportunities.',
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: 'Audit & Assurance',
    description:
      'Gain credibility and confidence with our independent audit and assurance services, designed to provide stakeholders with reliable financial information.',
  },
  {
    icon: <Building className="w-12 h-12 text-primary" />,
    title: 'Corporate Finance',
    description:
      'We assist with mergers, acquisitions, and capital raising, providing expert valuation and due diligence to support your corporate finance activities.',
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: 'Payroll Services',
    description:
      'Streamline your payroll processes with our efficient and compliant payroll services, ensuring your employees are paid accurately and on time, every time.',
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <div className="text-center">
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-primary">
            Our Services
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            Comprehensive financial solutions designed to help your business
            thrive.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader className="items-center text-center">
                {service.icon}
                <CardTitle className="font-headline pt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center flex-grow">
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
