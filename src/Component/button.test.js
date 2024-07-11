import React from 'react'
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './button';

test('render button with label', () => {
    const { getByText } = render(<Button label="click me" />);
    const buttonElement = getByText('click me'); // Ensure exact match
    expect(buttonElement).toBeInTheDocument();
  });
  
//classname
test ('ClassName btn present',()=>{
    const {container}=render(
        <Button label="click me"/>
    )
    const buttonElement=container.
    querySelector('button');
    expect(buttonElement).toHaveClass('btn');
})


test('button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Clickme" onClick={onClickMock} />);
    const buttonElement = getByText('Clickme'); // Ensure exact match
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
  