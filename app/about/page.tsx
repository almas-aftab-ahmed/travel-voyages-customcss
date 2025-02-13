import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Globe } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users, label: "Happy Travelers", value: "10,000+" },
    { icon: Globe, label: "Destinations", value: "50+" },
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Heart, label: "5-Star Reviews", value: "2,000+" }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=2000&h=1000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">About Almas Voyages</h1>
          <p className="text-xl max-w-2xl">
            Creating unforgettable travel experiences since 2008
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <stat.icon className="h-12 w-12 text-primary mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2008, Almas Voyages began with a simple mission: to create extraordinary travel experiences that inspire and transform. Our journey started with a small team of passionate travelers who believed in making authentic connections with places and people.
              </p>
              <p className="text-muted-foreground mb-4">
                Today, we've grown into a trusted travel partner for thousands of adventurers worldwide, but our core mission remains unchanged. We continue to craft unique journeys that combine luxury with authenticity, adventure with comfort, and discovery with responsibility.
              </p>
              <p className="text-muted-foreground">
                Our team of expert travel consultants works tirelessly to ensure every trip is perfectly tailored to our clients' dreams and expectations, creating memories that last a lifetime.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Travel moment 1"
                className="rounded-lg object-cover h-[500px]"
              />
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Travel moment 2"
                className="rounded-lg object-cover h-[500px] mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}