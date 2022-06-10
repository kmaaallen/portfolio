import { render, screen } from '@testing-library/react';
import App from '../App.js';

// Env vars used to find doc, without mock vars firebase error thrown
beforeEach(() => {
  process.env = Object.assign(process.env, {
    REACT_APP_DETAILS_COLLECTION: 'dummy',
    REACT_APP_DETAILS_DOC: 'fake'
  });
});

test('renders title, position and blurb elements', () => {
  render(<App />);
  const titleElement = screen.getByTestId("title");
  const positionElement = screen.getByTestId("position");
  const blurbElement = screen.getByTestId("blurb");
  expect(titleElement && positionElement && blurbElement).toBeInTheDocument();
});
