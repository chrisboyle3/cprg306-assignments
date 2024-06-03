import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '2rem', borderTop: '1px solid #ccc' }}>
            <Link href="http://localhost:3000">
                <a>Back to Home</a>
            </Link>
        </footer>
    );
};