import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Adventure Seeker",
    price: "$1,999",
    description: "Perfect for thrill-seekers and outdoor enthusiasts",
    features: [
      "Guided hiking expeditions",
      "White water rafting",
      "Rock climbing sessions",
      "Camping under the stars",
      "Adventure gear included",
      "Professional instructors"
    ]
  },
  {
    title: "Cultural Explorer",
    price: "$2,499",
    description: "Immerse yourself in local traditions and heritage",
    features: [
      "Local cooking classes",
      "Traditional craft workshops",
      "Temple and museum visits",
      "Folk performance shows",
      "Language introduction",
      "Local family dinner"
    ]
  },
  {
    title: "Luxury Escape",
    price: "$3,999",
    description: "Experience the finest accommodations and services",
    features: [
      "5-star hotel stays",
      "Private transfers",
      "Spa treatments",
      "Fine dining experiences",
      "Exclusive tours",
      "24/7 concierge"
    ]
  }
];

export default function Packages() {
  return (
    <div className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Travel Packages</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated packages designed to provide unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-3xl font-bold mb-6">{pkg.price}</div>
                <ul className="space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Book Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}