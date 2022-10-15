import React from 'react';
import Image from 'next/image';

import classes from './MasonaryGallery.module.scss';

import travelerOne from '../../public/assets/about/traveler-1.png';
import travelerTwo from '../../public/assets/about/traveler-2.png';
import travelerThree from '../../public/assets/about/traveler-3.png';
import developerMug from '../../public/assets/about/developers-mug.png';
import developerCommunity from '../../public/assets/about/developer-community.png';
import developer from '../../public/assets/about/developer.png';
import pcSetup from '../../public/assets/about/pc-setup.png'

const MasonaryGallery = () => {
    return (
        <div className={classes.galleryWrapper}>
            <Image src={developerMug} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developer} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerOne} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developerCommunity} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerTwo} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={pcSetup} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerThree} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developerMug} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developer} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerOne} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developerCommunity} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerTwo} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={pcSetup} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerThree} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developerMug} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developer} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerOne} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={developerCommunity} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={travelerTwo} alt="developer" width={400} height={400} layout="responsive" />
            <Image src={pcSetup} alt="developer" width={400} height={400} layout="responsive" />
        </div>
    )
}

export default MasonaryGallery;