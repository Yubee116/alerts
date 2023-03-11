import React from 'react';
export default function Message(message) {
    return (
        <div className="mb-4 rounded-lg bg-primary-100 py-5 px-6 text-base text-warning-700">
            {JSON.stringify(message)}
        </div>
    )
}