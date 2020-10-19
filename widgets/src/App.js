import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* { showDropdown ? <Dropdown options={options} onSelectedChange={setSelected} selected={selected} /> : null } */}
            <Translate />
        </div>
    );
}