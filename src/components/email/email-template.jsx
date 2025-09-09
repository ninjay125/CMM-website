import * as React from 'react';

export function EmailTemplate({ name, email, phoneNumber }) {
    return (
        <div>
            <h1>Lead: {name}, {email}, {phoneNumber}, wants to contact you.</h1>
        </div>
    );
}
