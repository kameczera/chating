import './Contacts.css'
import Contact from '../Contact';
import React from 'react';

// remove array after mongodb implementation
const contacts = [
    {
        name: 'arthur',
        image: 'https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000'
    },
    {
        name: 'veronica',
        image: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=90&strip=info&w=1024&h=682&crop=1'
    },
    {
        name: 'pedro',
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2022/10/gato-pode-comer-hortela-3.jpg'
    },
    {
        name: 'marco',
        image: 'https://www.petz.com.br/blog/wp-content/uploads/2022/10/gato-pode-comer-hortela-3.jpg'
    }
];

const Contacts = () => {
    return(
        contacts.length < 9 ?
        <div className='contacts'>
            {contacts.map(contact => <Contact name={contact.name} image={contact.image} key={contact.name} />)}
        </div>
        : ''
        );
}

export default Contacts;