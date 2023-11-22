import { fireEvent, render, screen ,within} from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';



import App from './App';



describe('users log in',()=>{
  test('fails',()=>{
    render(<App/>);
    const button =  screen.getByRole('button');

    fireEvent.click(button);

    expect(screen.getByText("Kristian0049")).not.toBeInTheDocument();

  });
  test('successeds',  () => {
    render(<App />);
    const button =  screen.getByRole('button');
    
    fireEvent.click(button);
    
   
    expect(screen.getByText("Kristian0049")).toBeInTheDocument();
    
  });
  
})

