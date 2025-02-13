import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const destinations = [
  {
    title: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Experience the stunning sunsets and white-washed buildings of this Mediterranean paradise.",
    price: "From $1,299",
    duration: "7 days"
  },
  {
    title: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Discover tropical beaches, ancient temples, and vibrant culture in the heart of Indonesia.",
    price: "From $999",
    duration: "10 days"
  },
  {
    title: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Adventure awaits in the majestic mountains with world-class skiing and hiking.",
    price: "From $1,499",
    duration: "5 days"
  },
  {
    title: "Machu Picchu, Peru",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Explore the ancient Incan citadel and experience the magic of the Andes.",
    price: "From $1,799",
    duration: "8 days"
  },
  {
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Immerse yourself in the perfect blend of tradition and modern technology.",
    price: "From $1,599",
    duration: "9 days"
  },
  {
    title: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Relax in overwater bungalows surrounded by crystal clear waters.",
    price: "From $2,299",
    duration: "6 days"
  }
];

export default function Destinations() {
  return (
    <div className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Destinations</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked destinations that offer unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {destination.title}
                </CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{destination.duration}</span>
                  <span className="font-semibold">{destination.price}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}