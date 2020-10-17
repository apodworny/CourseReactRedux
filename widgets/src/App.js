import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: "What is react?",
        content: 'React is a javascript framework'
    },
    {
        title: "Why use React?",
        content: 'React is used widely throughout the industry'
    },
    {
        title: "How do you use React?",
        content: 'You use React by creating components'
    }
];

export default () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    );
}