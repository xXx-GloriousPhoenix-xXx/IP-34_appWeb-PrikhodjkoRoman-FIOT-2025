import cl from "./Main.module.css";

import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import GearShop from "../GearShop/GearShop";
import Gallery from "../Gallery/Gallery";
import Review from "../Review/Review";
import Blog from "../Blog/Blog";

const Main = () => {
    const gearProps = [
        { src: "img/shop-items/tent.jpg", alt: "Tent", description: "Spacious and waterproof, perfect for 2 people.", price: "$145" },
        { src: "img/shop-items/sleeping-bag.jpg", alt: "Sleeping Bag", description: "Warm and lightweight, ideal for all seasons.", price: "$85" },
        { src: "img/shop-items/camping-stove.webp", alt: "Camping Stove", description: "Portable and easy to use, ideal for cooking outdoors.", price: "$60" },
        { src: "img/shop-items/hiking-backpack.webp", alt: "Hiking Backpack", description: "Durable, ergonomic, with multiple compartments.", price: "$30" },
        { src: "img/shop-items/headlamp.webp", alt: "Headlamp", description: "Hands-free lighting for night hikes and camping.", price: "$30" },
        { src: "img/shop-items/portable-chair.webp", alt: "Portable Chair", description: "Comfortable, foldable, and easy to carry.", price: "$25" },
        { src: "img/shop-items/water-bottle.webp", alt: "Water Bottle", description: "Insulated and reusable, keeps drinks hot or cold.", price: "$20" },
        { src: "img/shop-items/multitool-kit.webp", alt: "Multitool Kit", description: "Versatile toolset for various outdoor tasks.", price: "$40" }
    ];
    const reviewProps = [
        { text: "CampOut made planning my trip so easy! The campsite options were fantastic, and the gear shop had everything I needed. Highly recommend!", rating: 4, author: "Alex P."},
        { text: "I had an amazing experience with CampOut. The website is user-friendly, and the customer service was top-notch. My family and I had a blast!", rating: 5, author: "Jamie L."},
        { text: "The gear I purchased from CampOut was of great quality and perfect for my camping trip. The recommendations were spot on!", rating: 5, author: "Taylor R."}
    ];
    const statisticProps = [
        { number: "500+", parameter: "Campsites available" },
        { number: "10K+", parameter: "Happy campers" },
        { number: "1K+", parameter: "5-Star Reviews" },
        { number: "200", parameter: "Gear Products" }
    ];
    return (
        <main className={cl.Wrapper}>
            <Hero/>
            <AboutUs/>
            <GearShop gearProps={gearProps}/>
            <Gallery />
            <Review
                feedbackProps={reviewProps}
                statisticProps={statisticProps}
            />
            <Blog />
        </main>
    );
}

export default Main;