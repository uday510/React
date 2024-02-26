import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with the login button", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );

  // const loginButton = document.getByRole("button");

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should header component with cart items 0", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );

  // const cartItems = screen.getByText("Cart - (0 items)");
  const cartItems = screen.getByText(/Cart/); // Regular expression

  expect(cartItems).toBeInTheDocument();

});

it("Should change login button to logout on click", () => {
  render(
    <Provider store={appStore}>
      <Router>
        <Header />
      </Router>
    </Provider>
  );


  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton); // Click event

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});



