import { render, screen } from "@testing-library/react";
import { expect, test } from '@jest/globals';
import App from "./App";

test('Should return a good title text : School dashboard', () => {
  render(<App />)
  const header = screen.getByText(/School dashboard/i);
  expect(header).toBeInTheDocument();
})

test('Should return 2 good text', () => {
  render(<App />)
  const p1 = screen.getByText(/Login to access the full dashboard/i);
  const p2 = screen.getByText(/Copyright 2024 Holberton School/i);
  expect(p1).toBeInTheDocument();
  expect(p2).toBeInTheDocument();
})

test('Should check header image is présent', () => {
  render(<App />)
  const imgHeader = screen.getByAltText(/holberton logo/i);
  expect(imgHeader).toBeInTheDocument();
})

test("Should render 2 input elements", () => {
  render(<App />);
  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(2);
});

test("Should render 2 label elements with the text 'Email' and 'Password'", () => {
  render(<App />);
  const labelEmail = screen.getByText(/email/i);
  const labelPassword = screen.getByText(/password/i);
  expect(labelEmail).toBeInTheDocument();
  expect(labelPassword).toBeInTheDocument();
});

test("Should render a button with the text 'OK'", () => {
  render(<App />);
  const button = screen.getByText(/ok/i);
  expect(button).toBeInTheDocument();
});
