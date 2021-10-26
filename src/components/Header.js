import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>COVID-19</h1>
      <select>
        <option value="KR">국내</option>
        <option value="AB">해외</option>
      </select>
    </header>
  );
};

export default Header;
