import React from "react";

type Props = {};

const header = (props: Props) => {
  return (
    <header className="bg-gray-400">
      <div className="container mx-auto flex bg-gray-700 text-white p-10">
        <div className="text-success">Logo</div>
        <div className="ml-auto text-info">Menu</div>
      </div>
    </header>
  );
};

export default header;
