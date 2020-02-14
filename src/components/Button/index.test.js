import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import  Button  from './index';


describe('the button component', () => {

  it('should render correctly', () => {
    const { asFragment } = render(<Button testID="test-btn">Test text</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the onClick prop when the button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<Button testId="test-btn" click={onClickMock}></Button>);

    fireEvent.click(getByTestId('test-btn'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should verify the type of button passed (rect) to the component', () => {
    
    const { buttonType } = render(<Button testID="test-btn" buttonType="rect" />);

    expect(buttonType).toMatchSnapshot();
  });

  it('should verify the type of button passed (round) to the component', () => {
    const onClickMock = jest.fn();
    const { buttonType } = render(<Button testID="test-btn" buttonType="round" onClick={onClickMock} />);

    expect(buttonType).toMatchSnapshot();

  });

  it('should verify if the count value is right or not',()=>{
    const onClickMock=jest.fn();
    const {getByTestId}=render(<Button testId="test-btn" buttonType="rect" click={onClickMock} text="Bhumika"/>);
    fireEvent.click(getByTestId("test-btn"));
    expect(getByTestId('test-btn')).toHaveTextContent("Bhumika clicked 1 times.");
  })
});