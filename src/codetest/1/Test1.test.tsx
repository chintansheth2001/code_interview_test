import { render, fireEvent } from "@testing-library/react";
import { Test1 } from "./Test1";

describe("Test1", () => {
  it("should contain Test 1", () => {
    const { getByText } = render(<Test1 />);
    expect(getByText("Test 1")).toBeDefined();
    expect(true).toBe(true);
  });

  it("should fire click on button", () => {
    const { getByText } = render(<Test1 />);
    const button = getByText("Button");
    expect(fireEvent.click(button)).toBe(true);
  });

  it("should toggle button text on click", () => {
    const { getByText } = render(<Test1 />);
    const button = getByText("Button");
    fireEvent.click(getByText("Button"));
    expect(button.textContent).toBe("Clicked");

    fireEvent.click(button);
    expect(button.textContent).toBe("Button");
  });

  it("should display items when pressed fetch", () => {
    const { getByText, queryByText } = render(<Test1 />);

    expect(queryByText("Item 1")).toBeNull();
    expect(queryByText("Item 2")).toBeNull();
    expect(queryByText("Item 3")).toBeNull();

    fireEvent.click(getByText("Fetch"));

    expect(getByText("Item 1")).toBeDefined();
    expect(getByText("Item 2")).toBeDefined();
    expect(getByText("Item 3")).toBeDefined();
  });

  it("should display item desc when clicked on item", () => {
    const { getByText, queryByText } = render(<Test1 />);

    fireEvent.click(getByText("Fetch"));
    expect(getByText("Item 1")).toBeDefined();
    expect(queryByText("Description 1")).toBeNull();
    fireEvent.click(getByText("Item 1"));

    expect(getByText("Description 1")).toBeDefined();
    expect(queryByText("Description 2")).toBeNull();
  });
});
