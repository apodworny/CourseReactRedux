import React, {useEffect, useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Dutch',
        value: 'nl'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label={"Select a language"} selected={language} onSelectedChange={setLanguage} options={options} />
            <hr />
            <div className="ui header">Output</div>
            <Convert text={text} language={language} />
        </div>
    );
};

export default Translate;