import React, {useState} from 'react';
import DropDown from './DropDown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text}
                           onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <DropDown options={options}
                      onSelectedChange={setLanguage}
                      selected={language}
                      label="Select a Language"
            />

            <hr/>
            <h3 className="ui header">Output</h3>

            <Convert text={text}
                     language={language}
            />
        </div>
    );
};

export default Translate;
