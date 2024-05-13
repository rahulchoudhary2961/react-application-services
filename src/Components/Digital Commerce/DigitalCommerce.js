import React, { useState } from 'react';
import './DigitalCommerce.css';
import img_1 from '../../Assets/my_assets/A1 Content Services.webp'
import img_2 from '../../Assets/my_assets/web development.webp'
import img_3 from '../../Assets/my_assets/mobileapp.jpg'
import img_4 from '../../Assets/my_assets/orders management.jpg'
import img_5 from '../../Assets/my_assets/seo.jpg'
import img_6 from '../../Assets/my_assets/marketing.jpg'
import img_7 from '../../Assets/my_assets/sales.webp'


const DigitalCommerce = () => {
    const [startIndex, setStartIndex] = useState(0);
    const items = [
        { id: 1, title: 'A1 Content Services', description: 'A1 Content Services offers concise and impactful content solutions tailored to your needs. From compelling copy to engaging articles, we deliver quality content that resonates with your audience.', imageUrl: img_1 },
        { id: 2, title: 'Web Development', description: 'Web Development encompasses the creation and maintenance of websites and web applications. Our expert developers use cutting-edge technologies to craft responsive, user-friendly, and visually appealing digital experiences that drive business growth and engagement.', imageUrl: img_2 },
        { id: 3, title: 'Mobile App Development', description: 'Mobile App Development involves the design, creation, and optimization of applications for smartphones and tablets. Our skilled team of developers leverages the latest tools and frameworks to deliver seamless, high-performance mobile apps tailored to meet your specific needs and enhance user experiences.', imageUrl: img_3 },
        { id: 4, title: 'Order Management System', description: "Our Order Management System (OMS) streamlines the entire order lifecycle, from placement to fulfillment. Enhance efficiency, inventory management, and customer satisfaction with our tailored solutions.", imageUrl: img_4 },
        { id: 5, title: 'SEO', description: 'SEO, or Search Engine Optimization, is essential for businesses aiming to enhance their online visibility and drive organic traffic to their websites. Our SEO services focus on improving website rankings, optimizing content, and enhancing user experience to attract more visitors and increase conversion rates.', imageUrl: img_5 },
        { id: 6, title: 'Digital Marketing', description: 'Result-based marketing strategies prioritize outcomes over activities, ensuring every effort yields measurable results. Our result-based marketing services leverage data-driven insights and targeted campaigns to maximize ROI, enhance brand visibility, and drive sustainable growth for businesses.', imageUrl: img_6 },
        { id: 7, title: 'Lead Generation & Managed Sales', description: 'Streamline sales from lead to conversion with our lead generation and managed sales services. We employ targeted outreach and personalized engagement to drive revenue growth and business success.', imageUrl: img_7 }
    ];

    const handlePrev = () => {
        setStartIndex((prevIndex) => {
            if (prevIndex === 0) {
                return prevIndex;
            } else {
                return prevIndex - 1;
            }
        });
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => {
            if (prevIndex === items.length - 3) {
                return prevIndex;
            } else {
                return prevIndex + 1;
            }
        });
    };

    return (
        <div id='digital'>
            <div className="DigitalCommerce-container">
            <h1 className='heading'>DIGITAL COMMERCE</h1>
                <div className="slides-container">
                    {items.slice(startIndex, startIndex + 3).map((item) => (
                        <div key={item.id} className="slide">
                            <img src={item.imageUrl} alt={item.title} />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={handlePrev} disabled={startIndex === 0} hidden={startIndex === 0}>&#10094;</button>
                <button className="next" onClick={handleNext} disabled={startIndex === items.length - 3} hidden={startIndex === items.length - 3}>&#10095;</button>
            </div>
        </div>
    );
};

export default DigitalCommerce;
