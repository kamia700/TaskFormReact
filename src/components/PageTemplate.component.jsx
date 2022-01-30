import React from 'react';

function PageTemplate(props) {
  return (
    <div className="pageTemplate">
      <header className="header">
      </header>
      <div className='form-block'>
        {props.children}
      </div>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default PageTemplate;
