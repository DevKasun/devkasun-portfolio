import React, { useState } from 'react';
import Link from 'next/link';
import classes from './SliderItem.module.scss';



const data = [
    {
        id: 1,
        title: "DevKasun",
        description: "👋 Hi, my name is Kasun Lakshitha. I'm an Enthusiastic Frontend Developer who loves to create beautiful user interfaces. I'm glad I decided to learn to program. It's taught me how to become resourceful and think outside the box. I've been able to accomplish many things I thought were impossible.",
        image: "https://devkasun-portfolio.s3.ap-south-1.amazonaws.com/images/traveler.png",
        url: "/about"
    },
    {
        id: 2,
        title: "Experience",
        description: "Over the past two years, I have worked from home 100% of the time. The ability to communicate, solve problems, and receive feedback are some of my most vital skills.",
        image: "https://devkasun-portfolio.s3.ap-south-1.amazonaws.com/images/me1.png",
        url: "/experience"
    },
    {
        id: 3,
        title: "Blog",
        description: "It would be my pleasure to share my working experience and knowledge of web development with you. Specially Front-end web development. Front-end web development is not an easy task nowadays.",
        image: "https://devkasun-portfolio.s3.ap-south-1.amazonaws.com/images/developer.png",
        url: "/blog"
    },
    {
        id: 4,
        title: "Contact",
        description: "You can reach me by email, phone, or social media. For my work, I use Whatsapp and Telegram chat applications. Although I'm not active on Facebook, I am active on Instagram and Twitter.",
        image: "https://devkasun-portfolio.s3.ap-south-1.amazonaws.com/images/mac.png",
        url: "/contact"
    }
]

const SliderItem = () => {

    const [activeSlide, setActiveSlide] = useState(null);

    const handleToogleSlide = (id) => {
        setActiveSlide(id);
    }

    return (
        <>
            {data.map((item) => (
                <li key={item.id} className={item.id === activeSlide ? `${classes.item} ${classes.active}` : `${classes.item}`} onClick={(id) => handleToogleSlide(item.id)} style={{ backgroundImage: `url(${item.image})` }}>
                    {item.id === activeSlide ? null : <h3 className={classes.sliderTitle}>{item.title}</h3>}


                    <div className={item.id === activeSlide ? `${classes.contentSection} ${classes.active}` : `${classes.contentSection}`}>
                        <div className={classes.inner}>
                            <h3 className={classes.innerTitle}>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link href={item.url}>
                                <a>See more</a>
                            </Link>
                        </div>
                    </div>
                </li>
            ))
            }
        </>
    )
}

export default SliderItem;