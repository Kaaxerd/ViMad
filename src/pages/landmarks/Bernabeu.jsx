import React from 'react';
import { Link } from 'react-router-dom';

const Bernabeu = () => {
    return (
        <div>
            <h1>Santiago Bernabéu Stadium</h1>
            <p>The Santiago Bernabéu Stadium is a football stadium in Madrid, Spain. It has been the home stadium of Real Madrid since its completion in 1947.</p>
            <img src="path_to_image.jpg" alt="Santiago Bernabéu Stadium" />
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default Bernabeu;