import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ViewTemplate = () => {
    const location = useLocation();
    const { ID, name, description, creator, creatorType, status } = location.state || {};

    return (
        <div>
            <div className="view-template">
                <h1>Template Details</h1>
                <div className="template-info">
                    <p><strong>ID:</strong> {ID}</p>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Creator:</strong> {creator}</p>
                    <p><strong>Creator Type:</strong> {creatorType}</p>
                    <p><strong>Status:</strong> <span className="status">{status}</span></p>
                </div>
            </div>
            <Link to={'/'}>
                <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default ViewTemplate;
