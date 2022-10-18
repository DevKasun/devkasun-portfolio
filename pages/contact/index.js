import React from 'react';
import ContactDetails from '../../components/ContactDetails/ContactDetails';
import SubLayout from '../../layout/SubLayout';
import classes from './index.module.scss';

const index = () => {
    return (
        <SubLayout>
            <section className={classes.contactPage}>
                <div className={classes.textContetn}>
                    <div className={classes.contentWrapper}>
                        <h3>Contact</h3>
                        <p>You can reach me by email or phone. In my job, I use Whatsapp, Telegram and Viber chat applications. You can also follow me on social media.</p>
                    </div>
                </div>
                <div className={classes.contact}>
                    <ContactDetails />
                </div>
            </section>
        </SubLayout>
    )
}

export default index;