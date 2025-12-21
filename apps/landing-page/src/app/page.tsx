import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">SudoSchool</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-800 font-medium">
            Manager Login
          </Link>
          <Link 
            href="/login" 
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Modern School Management
            <span className="text-indigo-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10">
            A complete SaaS platform for managing your educational institution. 
            Handle students, teachers, classes, attendance, grades, and more - all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/login" 
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link 
              href="#features" 
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-indigo-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need to Manage Your School
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Student Management', desc: 'Track student info, grades, attendance, and progress all in one place.', icon: '👨‍🎓' },
              { title: 'Teacher Portal', desc: 'Empower teachers with tools to manage classes, assignments, and grades.', icon: '👩‍🏫' },
              { title: 'Parent Access', desc: 'Keep parents informed with real-time updates on their children.', icon: '👪' },
              { title: 'Attendance Tracking', desc: 'Automated attendance with reports and notifications.', icon: '📋' },
              { title: 'Finance Management', desc: 'Handle fees, invoices, and payments seamlessly.', icon: '💰' },
              { title: 'Communication Hub', desc: 'Send announcements, messages, and notifications to everyone.', icon: '📢' },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-indigo-100 mb-8 text-lg">
            Join hundreds of schools already using SudoSchool
          </p>
          <Link 
            href="/login" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Create Your School Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 SudoSchool. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
