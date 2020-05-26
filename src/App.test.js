import React from 'react';
import { render } from '@testing-library/react';
import Music from "./components/Music/Music";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./Redux/reduxStore";
import App from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/preloader/i);
  expect(linkElement).toBeInTheDocument();
});
