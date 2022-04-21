import React from 'react';
import About from './About';
import Contact from './Contact';
import Experience from './Experience';

function TabSection({ activeTab }) {

    switch (activeTab) {
        case 1:
            return <About />;
        case 2:
            return <Experience />;
        case 3:
            return <Contact />;
    }
}

export default TabSection;