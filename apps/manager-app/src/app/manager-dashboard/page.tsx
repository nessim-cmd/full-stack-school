'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface School {
  id: string;
  name: string;
  slug: string;
  role: string;
  plan?: string;
  studentCount?: number;
  teacherCount?: number;
}

interface Manager {
  id: string;
  name: string;
  email: string;
  schools: School[];
}

export default function ManagerDashboard() {
  const [manager, setManager] = useState<Manager | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch manager data from API
    fetch('/api/manager/profile')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setManager(data.manager);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const goToSchool = (slug: string) => {
    // Navigate to school subdomain
    window.location.href = `http://${slug}.localhost:4000`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-bold text-gray-800">SudoSchool</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">
              Welcome, <strong>{manager?.name || 'Manager'}</strong>
            </span>
            <Link 
              href="http://localhost:4006"
              className="text-gray-500 hover:text-gray-700"
            >
              Logout
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Your Schools</h1>
            <p className="text-gray-600 mt-1">
              Select a school to manage or create a new one
            </p>
          </div>
          <Link
            href="/register-school"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add New School
          </Link>
        </div>

        {/* School Cards */}
        {manager?.schools && manager.schools.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manager.schools.map((school) => (
              <div
                key={school.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer overflow-hidden"
                onClick={() => goToSchool(school.slug)}
              >
                {/* School Banner */}
                <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl font-bold text-indigo-600">
                        {school.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      {school.role}
                    </span>
                  </div>
                </div>

                {/* School Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {school.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {school.slug}.sudoschool.com
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        {school.studentCount || 0} students
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        {school.teacherCount || 0} teachers
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      school.plan === 'YEARLY' 
                        ? 'bg-green-100 text-green-700' 
                        : school.plan === 'MONTHLY'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {school.plan || 'FREE'}
                    </span>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="px-6 py-3 bg-gray-50 border-t">
                  <button className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
                    Open Dashboard
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Schools Yet</h3>
            <p className="text-gray-600 mb-6">
              Get started by creating your first school
            </p>
            <Link
              href="/register-school"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block"
            >
              Create Your First School
            </Link>
          </div>
        )}

        {/* Quick Stats */}
        {manager?.schools && manager.schools.length > 0 && (
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-gray-900">
                {manager.schools.length}
              </div>
              <div className="text-gray-600">Total Schools</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-gray-900">
                {manager.schools.reduce((acc, s) => acc + (s.studentCount || 0), 0)}
              </div>
              <div className="text-gray-600">Total Students</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-gray-900">
                {manager.schools.reduce((acc, s) => acc + (s.teacherCount || 0), 0)}
              </div>
              <div className="text-gray-600">Total Teachers</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-indigo-600">
                Active
              </div>
              <div className="text-gray-600">Account Status</div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
