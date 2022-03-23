import React from 'react';

function Footer() {
    return (
        <section className='bg-light border-top border-dark border-2'>
            <ul className='text-light list-unstyled list-inline p-4'>
                <li className='list-inline-item'>
                    <a href="https://github.com/35jakesmith">
                        <img src="https://img.icons8.com/material-outlined/48/000000/github.png"/>
                    </a>
                </li>
                <li className='list-inline-item'>
                    <a href="https://www.linkedin.com/in/jacob-smith-b10a19155?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLroDoUY8ToeasWggIfgWBA%3D%3D">
                        <img src="https://img.icons8.com/material-outlined/48/000000/linkedin--v1.png"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Footer;