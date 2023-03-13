export interface Item {
  id: number;
  name: string;
  description: string;
}

export const useGetItems = () => {
  const data: Item[] = [
    {
      id: 1,
      name: "Item 1",
      description: "Description 1",
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description 2",
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description 3",
    },
  ];

  return {
    data,
  };
};
