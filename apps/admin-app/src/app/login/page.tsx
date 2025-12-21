'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [schoolInfo, setSchoolInfo] = useState<{ name: string; slug: string } | null>(null);
  const router = useRouter();

  // Get school info from subdomain
  useEffect(() => {
    const host = window.location.hostname;
    const slug = host.split('.')[0];
    if (slug && slug !== 'localhost') {
      // Fetch school info
      fetch(`/api/school/info`)
        .then(res => res.json())
        .then(data => {
          if (data.school) {
            setSchoolInfo(data.school);
          }
        })
        .catch(() => {});
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      // Redirect to admin dashboard
      router.push('/admin');
      router.refresh();
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          {schoolInfo ? (
            <>
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">
                  {schoolInfo.name.charAt(0)}
                </span>
              </div>
              <h1 className="text-2xl font-bold mt-4 text-gray-800">{schoolInfo.name}</h1>
              <p className="text-gray-500 text-sm mt-1">Staff Login Portal</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-3xl font-bold text-white">S</span>
              </div>
              <h1 className="text-2xl font-bold mt-4 text-gray-800">School Login</h1>
              <p className="text-gray-500 text-sm mt-1">Staff Login Portal</p>
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-8">
          © 2025 SudoSchool Platform
        </p>
      </div>
    </div>
  );
}
