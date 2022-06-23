import React from 'react';

const Logo = () => {
    return (
     <div className="logo">
        {/* Les images importé depuis la balise img sont accessible dans public */}
        <img src="./earth.png" alt="Logo React" />
        <h3>React World</h3>
     </div>
    );
};

export default Logo;