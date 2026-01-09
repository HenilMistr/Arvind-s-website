export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: number;
    transmission: "Automatic" | "Manual";
    fuelType: "Gas" | "Diesel" | "Hybrid" | "Electric";
    color: string;
    image: string;
    features: string[];
    status: "Available" | "Sold" | "Pending";
}

export const cars: Car[] = [
    {
        id: "1",
        make: "BMW",
        model: "M4 Competition",
        year: 2022,
        price: 85000,
        mileage: 12000,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Sao Paulo Yellow",
        image: "",
        features: ["Carbon Bucket Seats", "Laser Lights", "Executive Package"],
        status: "Available"
    },
    {
        id: "2",
        make: "Porsche",
        model: "911 GT3 (992)",
        year: 2023,
        price: 275000,
        mileage: 1500,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Shark Blue",
        image: "",
        features: ["Weissach Package", "PCCB", "Front Axle Lift"],
        status: "Pending"
    },
    {
        id: "3",
        make: "Mercedes-Benz",
        model: "AMG G 63",
        year: 2021,
        price: 189000,
        mileage: 24000,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Matte Black",
        image: "",
        features: ["Night Package", "Massage Seats", "Carbon Interior"],
        status: "Available"
    },
    {
        id: "4",
        make: "McLaren",
        model: "720S Spider",
        year: 2020,
        price: 295000,
        mileage: 5800,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Volcano Orange",
        image: "",
        features: ["Performance Exhaust", "Gorilla Glass", "360 Park Assist"],
        status: "Available"
    },
    {
        id: "5",
        make: "Audi",
        model: "RS E-Tron GT",
        year: 2023,
        price: 145000,
        mileage: 3200,
        transmission: "Automatic",
        fuelType: "Electric",
        color: "Kemora Gray",
        image: "",
        features: ["Carbon Performance Pkg", "Year 1 Package", "Full Leather"],
        status: "Available"
    },
    {
        id: "6",
        make: "Lamborghini",
        model: "Huracan EVO RWD",
        year: 2022,
        price: 265000,
        mileage: 4100,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Verde Mantis",
        image: "",
        features: ["Sport Seats", "Smartphone Interface", "Life Style Pack"],
        status: "Sold"
    },
    {
        id: "7",
        make: "Ferrari",
        model: "F8 Tributo",
        year: 2021,
        price: 380000,
        mileage: 1900,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Rosso Corsa",
        image: "",
        features: ["Scuderia Shields", "Carbon Fibre Zone", "Parking Camera"],
        status: "Available"
    },
    {
        id: "8",
        make: "Tesla",
        model: "Model S Plaid",
        year: 2023,
        price: 92000,
        mileage: 8000,
        transmission: "Automatic",
        fuelType: "Electric",
        color: "Ultra Red",
        image: "",
        features: ["FSD Defined", "21\" Arachnid Wheels", "Yoke Steering"],
        status: "Available"
    }
];
