import React from 'react';


export default (Footer) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
    <footer>&copy;Copyright {currentYear} eddieprogramming</footer>
    </div>
  );
}
