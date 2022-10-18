import Image from 'next/image';
import SMLinks from '../SMLinks/SMLinks';
import classes from './ContactDetails.module.scss';

const ContactDetails = () => {
    return (
        <>
            <h4 className={classes.title}>Contact details</h4>
            <ul className={classes.contactDetailsList}>
                <li><span><Image src="/assets/icons/email.png" alt="email" width="64" height="64" /></span><p>devkasunlakshitha@gmail.com</p></li>
                <li><span><Image src="/assets/icons/phone.png" alt="phone number" width="64" height="64" /></span><p>+94 775859642</p></li>
                <li><span><Image src="/assets/icons/location.png" alt="location" width="64" height="64" /></span><p>Hunuwila, Daraluwa</p></li>
            </ul>
            <h4 className={classes.title}>Social media links</h4>
            <SMLinks />
        </>
    )
}

export default ContactDetails;