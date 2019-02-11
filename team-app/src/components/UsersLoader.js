import React from 'react';
import ContentLoader from "react-content-loader";

const UsersLoader = (props) => (
  <ContentLoader 
    height={173}
    width={1141}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#4bc3c9"
    ariaLabel="Loading Users..."
    {...props}
  >
    <rect x="29" y="22.67" rx="4" ry="4" width="115.83" height="15.21" /> 
    <rect x="30" y="55.67" rx="4" ry="4" width="440.72" height="11.08" /> 
    <rect x="987.69" y="25.67" rx="4" ry="4" width="125.19" height="10.37" />
    <rect x="30" y="115.15" rx="4" ry="4" width="370.07" height="14.92" />
  </ContentLoader>
);

export default UsersLoader;