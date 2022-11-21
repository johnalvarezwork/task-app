import React from 'react';
import { DragDropContext as DragAndDropContext } from 'react-beautiful-dnd';

interface DragDropContextProps {
  items: any[];
  updateItems: React.Dispatch<React.SetStateAction<any[]>>;
  children?: React.ReactNode;
  [restOfProps: string]: any;
}

export function DragDropContext(props: DragDropContextProps) {
  //gql query and mutation for state and setting state
  const { items, updateItems, children, ...restOFProps } = props;

  const reorder = (items, startIndex, endIndex) => {
    const newList = [...items];
    const [removed] = newList.splice(startIndex, 1);

    newList.splice(endIndex, 0, removed);

    return newList;
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const newTasks = reorder(
      items,
      result.source.index,
      result.destination.index
    );

    //mutation in gql
    updateItems(newTasks);
  };

  return (
    <DragAndDropContext onDragEnd={onDragEnd} {...restOFProps}>
      {children}
    </DragAndDropContext>
  );
}
