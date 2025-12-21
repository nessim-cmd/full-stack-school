'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Something went wrong!</h2>
        <button
          onClick={() => reset()}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer'
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
