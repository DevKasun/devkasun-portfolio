import Image from 'next/image';
import Link from 'next/link';
import classes from './SMLinks.module.scss';

const SMLinks = () => {
    return (
        <>
            <ul className={classes.smlinksList}>
                <li>
                    <Link href="https://twitter.com/KasunLuckshitha"><a target="_blank"><Image src="/assets/icons/twitter.svg" alt="twitter" width="64" height="64" /></a></Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/devkasun"><a target="_blank"><Image src="/assets/icons/instagram.svg" alt="instagram" width="64" height="64" /></a></Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/devkasunlakshitha"><a target="_blank"><Image src="/assets/icons/facebook.svg" alt="facebook" width="64" height="64" /></a></Link>
                </li>
                <li>
                    <Link href="https://www.linkedin.com/in/devkasun"><a target="_blank"><Image src="/assets/icons/linkedin.svg" alt="linkedin" width="64" height="64" /></a></Link>
                </li>
                <li>
                    <Link href="https://github.com/DevKasun"><a target="_blank"><Image src="/assets/icons/github.png" alt="github" width="64" height="64" /></a></Link>
                </li>
            </ul>
        </>
    )
}

export default SMLinks;