import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featuredDestinations = [
    {
      title: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800&h=600",
      description: "Experience the stunning sunsets and white-washed buildings"
    },
    {
      title: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800&h=600",
      description: "Discover tropical paradise and rich culture"
    },
    {
      title: "Swiss Alps",
      image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800&h=600",
      description: "Adventure awaits in the majestic mountains"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[90vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2000&h=1000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Explore the World with Almas Voyages
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Discover breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/destinations">
              Start Your Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map((destination, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    <MapPin className="inline-block mr-2 h-6 w-6" />
                    {destination.title}
                  </h3>
                  <p className="text-white/90">{destination.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in exploring the world's most beautiful destinations. Let's make your travel dreams a reality.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}