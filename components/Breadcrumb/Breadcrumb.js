import Link from 'next/link';
import Image from 'next/image';
import classes from './Breadcrumb.module.scss';

const Breadcrumb = () => {
    return (
        <div className={classes.breadcrumb}>
            <Link href="/">
                <a><span><Image src="/assets/icons/back-arrow.png" alt="arrow-left" width="24" height="24" layout="fixed" /></span>Home</a>
            </Link>
        </div>
    )
}

export default Breadcrumb