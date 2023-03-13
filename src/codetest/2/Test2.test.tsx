import { render } from "@testing-library/react";
import { Test2 } from "./Test2";

describe("Test2", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should render items passed in", () => {
    const { getByText } = render(<Test2 id="1" name="name" description="description" />);
    expect(getByText("1")).toBeDefined();
    expect(getByText("name")).toBeDefined();
    expect(getByText("description")).toBeDefined();
  });

  it("should accept and render id as string", () => {
    const { getByText } = render(<Test2 id="1" name="name" description="description" />);
    expect(getByText("1")).toBeDefined();
  });
  it("should accept and render id as a number", () => {
    const { getByText } = render(<Test2 id={1} name="name" description="description" />);
    expect(getByText(1)).toBeDefined();
  });
  it("should accept and render parameter age", () => {
    const { getByText } = render(<Test2 id={1} name="name" description="description" age={42} />);
    expect(getByText("42")).toBeDefined();
  });

  it("should accept an array of interests", () => {
    const { getByText } = render(
      <Test2
        id={1}
        name="name"
        description="description"
        interests={[
          { description: "interest 1", ranking: 1 },
          { description: "interest 2", ranking: 2 },
          { description: "interest 3", ranking: 3 },
        ]}
      />,
    );
    expect(getByText("interest 1")).toBeDefined();
    expect(getByText("interest 2")).toBeDefined();
    expect(getByText("interest 3")).toBeDefined();
  });
});
