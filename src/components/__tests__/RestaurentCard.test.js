import { useContext } from 'react';
import RestaurentCard from '../RestaurentCard';
import { render, screen } from '@testing-library/react';
import MOCK_DATA from "../mocks/resCardMock.json";

it("Should render RestaurentCard component with props Data", () => {

  render(<RestaurentCard data={MOCK_DATA} />);

  const name = screen.getByText("Leon's - Burger & Wings (Leon Grill)");

  expect(name).not.toBeInTheDocument();
});