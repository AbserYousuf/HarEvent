const img = {
    Venues: "/images/vendors/venue.jpg",
    Photography: "/images/vendors/Photography.jpg",
    Catering: "/images/vendors/Caterine.jpg",
    Decoration: "/images/vendors/Decoration.jpg",
    "Makeup Artists": "/images/vendors/makeup.jpg",
    "Mehndi Artists": "/images/vendors/Mehndi.jpg",
};

const vendors = [
    // Venues
    { id: 1, name: "Royal Palace Banquets", category: "Venues", city: "Jaipur", events: ["Wedding", "Engagement", "Corporate Event"], rating: 4.8, price: "From ₹1,50,000", image: img.Venues },
    { id: 2, name: "Lakeview Garden Resort", category: "Venues", city: "Mumbai", events: ["Wedding", "Engagement", "Birthday Party", "Other"], rating: 4.6, price: "From ₹2,00,000", image: img.Venues },
    { id: 3, name: "The Grand Orchid Hall", category: "Venues", city: "Delhi", events: ["Wedding", "Corporate Event", "Baby Shower"], rating: 4.5, price: "From ₹1,20,000", image: img.Venues },
    { id: 4, name: "Tawi Riverside Lawns", category: "Venues", city: "Jammu", events: ["Wedding", "Birthday Party", "Other"], rating: 4.4, price: "From ₹80,000", image: img.Venues },

    // Photography
    { id: 5, name: "Candid Frames Studio", category: "Photography", city: "Mumbai", events: ["Wedding", "Engagement", "Baby Shower"], rating: 4.9, price: "From ₹45,000", image: img.Photography },
    { id: 6, name: "Lens & Love Photography", category: "Photography", city: "Delhi", events: ["Wedding", "Engagement", "Birthday Party"], rating: 4.7, price: "From ₹35,000", image: img.Photography },
    { id: 7, name: "Pixel Perfect Events", category: "Photography", city: "Bengaluru", events: ["Corporate Event", "Birthday Party", "Other"], rating: 4.5, price: "From ₹25,000", image: img.Photography },
    { id: 8, name: "Moments by Aarav", category: "Photography", city: "Hyderabad", events: ["Wedding", "Baby Shower"], rating: 4.6, price: "From ₹30,000", image: img.Photography },

    // Catering
    { id: 9, name: "Spice Route Caterers", category: "Catering", city: "Hyderabad", events: ["Wedding", "Engagement", "Corporate Event"], rating: 4.7, price: "From ₹600 / plate", image: img.Catering },
    { id: 10, name: "Royal Rasoi Catering", category: "Catering", city: "Jaipur", events: ["Wedding", "Birthday Party", "Other"], rating: 4.5, price: "From ₹550 / plate", image: img.Catering },
    { id: 11, name: "Annapurna Foods", category: "Catering", city: "Jammu", events: ["Wedding", "Engagement", "Baby Shower"], rating: 4.3, price: "From ₹450 / plate", image: img.Catering },
    { id: 12, name: "Urban Bites Catering", category: "Catering", city: "Bengaluru", events: ["Corporate Event", "Birthday Party"], rating: 4.6, price: "From ₹500 / plate", image: img.Catering },

    // Decoration
    { id: 13, name: "Floral Fantasy Decor", category: "Decoration", city: "Delhi", events: ["Wedding", "Engagement", "Baby Shower"], rating: 4.7, price: "From ₹60,000", image: img.Decoration },
    { id: 14, name: "Dreamy Balloons & Decor", category: "Decoration", city: "Mumbai", events: ["Birthday Party", "Baby Shower", "Other"], rating: 4.5, price: "From ₹15,000", image: img.Decoration },
    { id: 15, name: "Mandap Magic", category: "Decoration", city: "Jaipur", events: ["Wedding", "Engagement"], rating: 4.8, price: "From ₹90,000", image: img.Decoration },

    // Makeup Artists
    { id: 16, name: "Glam by Simran", category: "Makeup Artists", city: "Delhi", events: ["Wedding", "Engagement"], rating: 4.8, price: "From ₹20,000", image: img["Makeup Artists"] },
    { id: 17, name: "Bridal Bliss Studio", category: "Makeup Artists", city: "Bengaluru", events: ["Wedding", "Engagement", "Other"], rating: 4.6, price: "From ₹18,000", image: img["Makeup Artists"] },
    { id: 18, name: "Aura Makeovers", category: "Makeup Artists", city: "Jammu", events: ["Wedding", "Birthday Party"], rating: 4.4, price: "From ₹10,000", image: img["Makeup Artists"] },

    // Mehndi Artists
    { id: 19, name: "Henna Heaven", category: "Mehndi Artists", city: "Jaipur", events: ["Wedding", "Engagement", "Baby Shower"], rating: 4.9, price: "From ₹8,000", image: img["Mehndi Artists"] },
    { id: 20, name: "Rang Mehndi Artists", category: "Mehndi Artists", city: "Hyderabad", events: ["Wedding", "Engagement", "Birthday Party"], rating: 4.5, price: "From ₹6,000", image: img["Mehndi Artists"] },
];

export default vendors;