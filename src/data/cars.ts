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
        make: "A",
        model: "",
        year: 2024,
        price: 0,
        mileage: 100,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Red",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "2",
        make: "r",
        model: "",
        year: 2024,
        price: 0,
        mileage: 200,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Blue",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "3",
        make: "v",
        model: "",
        year: 2024,
        price: 0,
        mileage: 300,
        transmission: "Manual",
        fuelType: "Gas",
        color: "Green",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "4",
        make: "i",
        model: "",
        year: 2024,
        price: 0,
        mileage: 400,
        transmission: "Automatic",
        fuelType: "Electric",
        color: "White",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "5",
        make: "n",
        model: "",
        year: 2024,
        price: 0,
        mileage: 500,
        transmission: "Manual",
        fuelType: "Gas",
        color: "Black",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "6",
        make: "d",
        model: "",
        year: 2024,
        price: 0,
        mileage: 600,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Yellow",
        image: "",
        features: [],
        status: "Available"
    },
    // Space/Filler - Using "I" directly for "is"
    {
        id: "7",
        make: "i",
        model: "",
        year: 2024,
        price: 0,
        mileage: 700,
        transmission: "Automatic",
        fuelType: "Hybrid",
        color: "Silver",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "8",
        make: "s",
        model: "",
        year: 2024,
        price: 0,
        mileage: 800,
        transmission: "Automatic",
        fuelType: "Gas",
        color: "Orange",
        image: "",
        features: [],
        status: "Available"
    },
    // Space/Filler - "G"
    {
        id: "9",
        make: "g",
        model: "",
        year: 2024,
        price: 0,
        mileage: 900,
        transmission: "Manual",
        fuelType: "Gas",
        color: "Purple",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "10",
        make: "a",
        model: "",
        year: 2024,
        price: 0,
        mileage: 1000,
        transmission: "Automatic",
        fuelType: "Electric",
        color: "Gold",
        image: "",
        features: [],
        status: "Available"
    },
    {
        id: "11",
        make: "y",
        model: "",
        year: 2024,
        price: 0,
        mileage: 1100,
        transmission: "Automatic",
        fuelType: "Diesel",
        color: "Pink",
        image: "",
        features: [],
        status: "Available"
    }
];
