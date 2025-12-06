'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import SchoolServicesModal from '@/components/SchoolServicesModal';

interface SchoolData {
  id: string;
  name: string;
  enabledServices: string;
}

export default function ConfigureServicesPage({ params }: { params: { schoolId: string } }) {
  const router = useRouter();
  const [school, setSchool] = useState<SchoolData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  console.log("[ConfigureServices Page] Params schoolId:", params.schoolId);

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        console.log("[ConfigureServices Page] Fetching school with ID:", params.schoolId);
        const response = await fetch(`/api/saas/manager/services?schoolId=${params.schoolId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          toast.error('Failed to fetch school');
          return;
        }

        const data = await response.json();
        console.log("[ConfigureServices Page] School data received:", data);
        setSchool({
          id: params.schoolId,
          name: data.schoolName || 'Your School',
          enabledServices: JSON.stringify(data.enabledServices || []),
        });
      } catch (error) {
        console.error('Error fetching school:', error);
        toast.error('Error loading school data');
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, [params.schoolId]);

  const handleServicesSaved = () => {
    setIsModalOpen(false);
    // Redirect to dashboard after 1 second
    setTimeout(() => {
      router.push(`/admin/school/${params.schoolId}`);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading school settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to {school?.name}!</h1>
          <p className="text-gray-600 mt-2">
            Before you can access the dashboard, please configure which services your school will use.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Required Configuration</h3>
              <p className="text-blue-800 mt-1">
                Select at least one service to continue. You can change these settings anytime from the dashboard.
              </p>
            </div>
          </div>
        </div>

        {school && isModalOpen && (
          <SchoolServicesModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleServicesSaved}
            schoolId={school.id}
            schoolName={school.name}
          />
        )}
      </div>
    </div>
  );
}
