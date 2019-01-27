import React from 'react';
import ContentLoader from 'react-content-loader';

const ROWS = 5;
const WIDTH = 1060;

const Loader = ({totalColumns}) => {
  const random = Math.random() * (1 - 0.7) + 0.7;
  return (
    <ContentLoader
      height={40}
      width={WIDTH}
      speed={2}
      primaryColor="#d9d9d9"
      secondaryColor="#ecebeb"
    >
      {Array(totalColumns)
        .fill('')
        .map((column, index) => {
          return (
            <rect
              x={
                (WIDTH * (1 / totalColumns + index * 0.5)) / 2 -
                (100 * random) / 2
              }
              y="13"
              rx="6"
              ry="6"
              width={100 * random}
              height="12"
              key={index}
            />
          );
        })}

      <rect x="0" y="39" rx="6" ry="6" width="1060" height=".3" />
    </ContentLoader>
  );
};

const TableLoader = ({totalColumns}) => (
  <React.Fragment>
    {Array(ROWS)
      .fill('')
      .map((e, i) => (
        <Loader key={i} totalColumns={totalColumns} />
      ))}
  </React.Fragment>
);

export default TableLoader;
