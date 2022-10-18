import Image from 'next/image';
import classes from './SMLinks.module.scss';

const SMLinks = () => {
    return (
        <>
            <ul className={classes.smlinksList}>
                <li>
                    <a href=""><Image src="/assets/icons/twitter.svg" alt="twitter" width="64" height="64" /></a>
                </li>
                <li>
                    <a href=""><Image src="/assets/icons/instagram.svg" alt="instagram" width="64" height="64" /></a>
                </li>
                <li>
                    <a href=""><Image src="/assets/icons/facebook.svg" alt="facebook" width="64" height="64" /></a>
                </li>
                <li>
                    <a href=""><Image src="/assets/icons/linkedin.svg" alt="linkedin" width="64" height="64" /></a>
                </li>
                <li>
                    <a href=""><Image src="/assets/icons/github.png" alt="github" width="64" height="64" /></a>
                </li>
            </ul>
        </>
    )
}

export default SMLinks;