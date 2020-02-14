import {useState, useEffect} from 'react';
import axios from 'axios';
import url from '../constants';

const useInput = (defaultValue) => {
    const [text, setText] = useState(defaultValue);
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        const someFunc = async() => {
            const response = await axios.get(url);
        setText(response.data.initialText)
        setDisabled(false)
        }
        someFunc();
        
    },[]);
    return [text,setText, disabled];
}
export default useInput;