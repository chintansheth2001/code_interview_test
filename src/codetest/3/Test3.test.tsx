import { render, waitFor } from "@testing-library/react";
import { Test3 } from "./Test3";
import { expectTypeOf, vi } from "vitest";

describe("Test3", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should render and display items and return item clicked", () => {
    const clickFn = vi.fn();

    const items = [
      { id: "1", label: "Item 1" },
      { id: "2", label: "Item 2" },
      { id: "3", label: "Item 3" },
    ];

    const { getByText } = render(
      <Test3 items={items} onItemClicked={clickFn} renderItem={item => <div>{item.label}</div>} />,
    );

    expect(getByText("Item 1")).toBeDefined();
    expect(getByText("Item 2")).toBeDefined();
    expect(getByText("Item 3")).toBeDefined();

    expect(clickFn).not.toHaveBeenCalled();
    getByText("Item 1").click();
    expect(clickFn).toHaveBeenCalledWith(items[0]);
  });

  it("should render and display items and return item clicked", () => {
    const clickFn = vi.fn();

    const items = [
      { something: "Something 1", else: "Test 1" },
      { something: "Something 2", else: "Test 2" },
    ];

    const { getByText } = render(
      <Test3 items={items} onItemClicked={clickFn} renderItem={item => <div>{item.something}</div>} />,
    );

    expect(getByText("Something 1")).toBeDefined();
    expect(getByText("Something 2")).toBeDefined();
    expect(clickFn).not.toHaveBeenCalled();
    getByText("Something 1").click();
    expect(clickFn).toHaveBeenCalledWith(items[0]);
  });

  it("should render and display items and display value clicked", async () => {
    const clickFn = vi.fn();

    const items = [
      { something: "Something 1", else: "Test 1" },
      { something: "Something 2", else: "Test 2" },
    ];

    const values = [
      { value: "Value1", label: "Label1" },
      { value: "Value2", label: "Label2" },
      { value: "Value3", label: "Label3" },
    ];

    const { getByText } = render(
      <Test3 items={items} onItemClicked={clickFn} values={values} renderItem={item => <div>{item.else}</div>} />,
    );

    expect(getByText("Label1")).toBeDefined();
    expect(getByText("Label2")).toBeDefined();
    expect(getByText("Label3")).toBeDefined();
    expect(clickFn).not.toHaveBeenCalled();

    await waitFor(() => {
      getByText("Label1").click();
      expect(getByText("Value1/Label1")).toBeDefined();
    });
    await waitFor(() => {
      getByText("Label2").click();
      expect(getByText("Value2/Label2")).toBeDefined();
    });
    await waitFor(() => {
      getByText("Label3").click();
      expect(getByText("Value3/Label3")).toBeDefined();
    });
  });

  it("should render and display items and return value clicked", async () => {
    const _clickFn = vi.fn();
    const clickFn = vi.fn();
    const items = [{ something: "Something 1", else: "Test 1" }];

    const values = [
      { value: "Value1", label: "Label1", id: "1" },
      { value: "Value2", label: "Label2", row: "2" },
      { value: "Value3", label: "Label3", mock: "3" },
    ];

    const { getByText, queryByText } = render(
      <Test3
        items={items}
        onSelectedValueItemClicked={clickFn}
        onItemClicked={_clickFn}
        values={values}
        renderItem={item => {
          expectTypeOf(item).toEqualTypeOf<{ something: string; else: string }>();
          return <div>{item.else}</div>;
        }}
      />,
    );

    expect(queryByText("Value1/Label1")).toBeDefined();
    expect(queryByText("Value2/Label2")).toBeNull();
    expect(queryByText("Value3/Label3")).toBeNull();

    await waitFor(() => {
      getByText("Label1").click();
      expect(getByText("Value1/Label1")).toBeDefined();
      expect(queryByText("Value2/Label2")).toBeNull();
      expect(queryByText("Value3/Label3")).toBeNull();

      getByText("Value1/Label1").click();
      expect(clickFn).toHaveBeenCalledWith(values[0]);
    });

    await waitFor(() => {
      getByText("Label2").click();
      expect(queryByText("Value2/Label1")).toBeNull();
      expect(queryByText("Value2/Label2")).toBeDefined();
      expect(queryByText("Value3/Label3")).toBeNull();
      getByText("Value2/Label2").click();
      expect(clickFn).toHaveBeenCalledWith(values[1]);
    });
  });

  it("should return type passed in renderItem", () => {
    const clickFn = vi.fn();
    render(
      <Test3
        items={[
          { id: "1", label: "Item 1" },
          { id: "2", label: "Item 2" },
        ]}
        onItemClicked={clickFn}
        renderItem={item => {
          expectTypeOf(item).toEqualTypeOf<{ id: string; label: string }>();
          return <div>{item.label}</div>;
        }}
      />,
    );
    render(
      <Test3
        items={[
          {
            id: 1,
            values: [
              { value: "Value1", label: "Label1" },
              { value: "Value2", label: "Label2" },
            ],
          },
          {
            id: 2,
            values: [
              { value: "Value1", label: "Label1" },
              { value: "Value2", label: "Label2" },
            ],
          },
        ]}
        onItemClicked={clickFn}
        renderItem={item => {
          expectTypeOf(item).toEqualTypeOf<{ id: number; values: { value: string; label: string }[] }>();
          return <div>{item.id}</div>;
        }}
      />,
    );
    render(
      <Test3
        items={[
          { content: "hello", testValue: "Item 1" },
          { content: "world", testValue: "Item 2" },
        ]}
        onItemClicked={clickFn}
        renderItem={item => {
          expectTypeOf(item).toEqualTypeOf<{ content: string; testValue: string }>();
          return <div>{item.content}</div>;
        }}
      />,
    );
  });
});
