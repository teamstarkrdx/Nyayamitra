import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, AlertCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Contact & Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us or reach emergency legal services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email Support</p>
                  <p className="text-muted-foreground">support@legalhelp.ai</p>
                  <p className="text-sm text-muted-foreground mt-1">Mon-Sat: 9 AM - 6 PM IST</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Office Location</p>
                  <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
                  <p className="text-sm text-muted-foreground mt-1">Corporate Office</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6 border-destructive/20">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <h3 className="text-2xl font-semibold text-foreground">Emergency Contacts</h3>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-destructive to-destructive/80 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Police</p>
                  <p className="text-2xl font-bold text-destructive">100</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Legal Aid Services</p>
                  <p className="text-2xl font-bold text-blue-500">15100</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Women Helpline</p>
                  <p className="text-2xl font-bold text-pink-500">181</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
