import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import Container from '../Container';
import axios from 'axios';
import url from '../../constants'

describe('The container component',()=>{
    it('should check if the button component works',()=>{
        const {asFragment}=render(<Container testId='test-cntner'/>)
        expect(asFragment()).toMatchSnapshot();
    });

    it('should check if the ',()=>{
        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)

        fireEvent.change(getByTestId('123'),{target:{value:'Bhumika'}});
        //fireEvent.click(getByTestId('test-btn'));

       expect(getByTestId('test-btn')).toHaveTextContent('Bhumika clicked 0 times.');

    })
    it('Should display the content from the api', async() => {
        const mockAxios = jest.spyOn(axios, 'get');
        mockAxios.mockResolvedValue({data:{initialText:'unicorn'}});

        const {getByTestId}=render(<Container testId='test-cntner' testIdButton='test-btn' testIdTextBox='123'/>)
        expect(mockAxios).toHaveBeenCalledWith(url)
        await wait(() => expect(getByTestId('123').value).toBe('unicorn'));
        await wait(() => expect(getByTestId('test-btn')).toHaveTextContent('unicorn'));
    })
})