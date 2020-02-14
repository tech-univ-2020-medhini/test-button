import React, { useState, useEffect } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios'
import url from '../../constants'

const Container = (props) => {
    const [text, setText] = useState('');

    useEffect(() => {
        const someFunc = async() => {
            const response = await axios.get(url);
        setText(response.data.initialText)
        }
        someFunc();
        
    },[]);

    const onChange=(inputTextValue)=>{
        setText(inputTextValue)
    }
    const {testId,testIdButton,testIdTextBox}=props;
    return (
        <div data-testid={testId}>
            <TextBox onChange={(onChange)} testId={testIdTextBox} value = {text}/>
            <Button text={text} buttonType="round" testId={testIdButton}/>
        </div>
    );
}

export default Container
