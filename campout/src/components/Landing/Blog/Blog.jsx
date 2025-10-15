import cl from './Blog.module.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import BlogList from '../BlogList/BlogList';

const Blog = () => {
    const blogProps = [
        {
            src: "img/blog-items/camping-lifestyle.jpg",
            alt: "camping-lifestyle",
            tags: [
                { text: "Camping Lifestyle", link: "#" }
            ],
            text: { 
                header: "Top 10 Essentials for Your First Camping Trip",
                paragraph: "Going camping for the first time? Discover what you really need to make your trip safe and enjoyable."
            },
            date: "15th May, 2025"
        },
        { 
            src: "img/blog-items/travel-gear.jpg",
            alt: "travel-gear",
            tags: [
                { text: "Gear Reviews", link: "#" },
                { text: "Outdoor Tips", link: "#" }
            ],
            text: { 
                header: "How to Choose the Perfect Tent for Any Weather",
                paragraph: "From ultralight models to family tents – a full guide for beginners and pros."
            },
            date: "10th March, 2025"
        }
    ];
    return (
        <section className={cl.Wrapper}>
            <SectionHeader
                headerText="What kind of Camping Tips we share for you"
                paragraphText="who are in extremely love with outdoor lifestyle"
                textHueClass="Dark"
            />
            <BlogList propList={blogProps} />
        </section>
    );
}
 
export default Blog;