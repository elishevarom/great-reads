// Course.js

import React from 'react';

const Pay = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-6">
            <div className="card w-96 bg-white shadow-2xl rounded-lg">

                <div className="card-body text-center">
                    <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
                        Become a member of the Great Reads Book Club!
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Only $50 a year
                    </p>
                    <figure className="px-20 pt-20 text-center">
                        <img
                            src="bookclub.jpg"
                            alt="Membership"
                            className="rounded-xl"
                        />
                    </figure>
                    <a
                        className="btn btn-secondary bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-5"
                        href="/payment"
                    >
                        Pay Now
                    </a>
                    
                </div>

            </div>
        </div>
    );
};

export default Pay;
