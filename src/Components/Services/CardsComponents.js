import React, { useState } from 'react';
import './CardsComponents.css';
import img_1 from '../../Assets/my_assets/devops.jpg'
import img_2 from '../../Assets/my_assets/ITSM.jpg'
import img_3 from '../../Assets/my_assets/software testing.webp'
import img_4 from '../../Assets/my_assets/cloud computing 1.jpg'
import img_5 from '../../Assets/my_assets/Atlassian Customization Services.jpg'
import img_6 from '../../Assets/my_assets/analytics.jpg'
import img_7 from '../../Assets/my_assets/consultation.jpg'


const CardsComponents = () => {
    const [startIndex, setStartIndex] = useState(0);
    const items = [
        { id: 1, title: 'DevOps Consulting & Services', description: 'DevOps consulting improves software development by streamlining processes, automating tasks, and fostering collaboration. Services include assessment, planning, and implementation of DevOps practices and tools for efficient software delivery.', imageUrl: img_1 },
        { id: 2, title: ' IT Service Management (ITSM)', description: 'IT Service Management (ITSM) ensures efficient delivery of IT services to meet business needs. It covers problem management, service level management, and continual improvement to align IT services with business objectives and deliver value to customers.', imageUrl: img_2 },
        { id: 3, title: 'Software Testing Services', description: 'Software Testing Services ensure the quality and reliability of software products. They include test planning, test execution, defect tracking, and reporting to identify and rectify issues, ensuring a high-quality end product.', imageUrl: img_3 },
        { id: 4, title: 'Atlassian Cloud Migration Services ', description: "Atlassian Cloud Migration Services facilitate the seamless transition of workflows and data to Atlassian's cloud platform. They include assessment, planning, migration, and post-migration support to ensure a smooth and successful migration process.", imageUrl: img_4 },
        { id: 5, title: 'Atlassian Customization Services', description: 'Atlassian Customization Services tailor Atlassian products to meet specific business needs. They include customizing workflows, configuring dashboards, integrating with other tools, and developing plugins to optimize Atlassian tools for individual requirements.', imageUrl: img_5 },
        { id: 6, title: 'Advance Analytics Consultation', description: 'Advanced Analytics Consultation offers expertise in leveraging data analytics for actionable insights and decision-making. Services include data analysis, predictive modeling, machine learning, and visualization to unlock valuable insights from complex data sets and drive strategic business outcomes.', imageUrl: img_6 },
        { id: 7, title: 'SAP Consulting', description: 'SAP Consulting provides expertise in implementing, customizing, and optimizing SAP solutions. Services include system implementation, configuration, integration, and support to help organizations maximize the value of their SAP investments and achieve their business goals.', imageUrl: img_7 }
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
        <div id='services'>
            <div className="CardsComponents-container">
                <h1 className='heading'>OUR SERVICES</h1>
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
                <button className="next" onClick={handleNext} disabled={startIndex === items.length - 3} hidden={startIndex === items.length - 3}>&#10095;</button>            </div>
        </div>
    );
};

export default CardsComponents;
