import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

