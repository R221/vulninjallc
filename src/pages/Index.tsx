
import { Shield, Cloud, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const services = [
    {
      icon: Shield,
      title: "Vulnerability Assessment",
      description: "Comprehensive security testing to identify and prioritize vulnerabilities in your systems, applications, and infrastructure.",
      features: ["Network Security Scanning", "Web Application Testing", "Risk Assessment Reports", "Remediation Guidance"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Secure your cloud infrastructure with expert configuration reviews, compliance audits, and continuous monitoring solutions.",
      features: ["Cloud Configuration Review", "Compliance Auditing", "Security Monitoring", "Multi-Cloud Support"]
    },
    {
      icon: ShieldCheck,
      title: "Security Consultation", 
      description: "Strategic security guidance from certified experts to help build robust defense strategies tailored to your business needs.",
      features: ["Security Strategy Development", "Incident Response Planning", "Compliance Consulting", "Security Training"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center cyber-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background opacity-90"></div>
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-8 float-animation">
            <Shield className="w-24 h-24 mx-auto text-primary mb-6" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow">
            VUL<span className="text-primary">.</span>NINJA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Elite cybersecurity services protecting your digital assets with precision, stealth, and expertise. 
            Defend against evolving threats with our cutting-edge security solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="pulse-glow bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-4 text-lg">
              Get Security Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect, monitor, and strengthen your digital infrastructure against sophisticated threats.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-transparent border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                    variant="outline"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Secure Your <span className="text-primary">Digital Assets</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Get a comprehensive assessment of your security posture today.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-background font-semibold px-8 py-4 text-lg pulse-glow">
            Contact Security Experts
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-primary mr-2" />
            <span className="text-2xl font-bold">VUL<span className="text-primary">.</span>NINJA</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 VUL.NINJA. Elite cybersecurity services for the modern enterprise.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
