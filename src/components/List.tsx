import React, { ReactNode } from 'react';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

const List = <T,>({ items, renderItem }: Props<T>) => {
  return (
    <>
      {items.map((item: T, index: number) => {
        return <ul key={index}><li>{renderItem(item)}</li></ul>;
      })}
    </>
  );
};

export default List;
