import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextBox from './index';

describe('The TextBox component',()=>{
    
    it('should render correctly',()=>{
        const { asFragment } = render(<TextBox testId="123"/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should pass the correct input when input is provided',()=>{
        const changeHandler=jest.fn();
        const {getByTestId}=render(<TextBox testId="123" onChange={changeHandler}/>);

        fireEvent.change(getByTestId("123"),{target:{value:"Bhumika"}});
        expect(changeHandler).toHaveBeenCalled();
    })
})