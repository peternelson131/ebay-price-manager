import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          eBay Price Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Automated listing price management for eBay sellers
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="text-left space-y-2">
              <li>✅ Automated price reductions</li>
              <li>✅ Sales detection & pause functionality</li>
              <li>✅ Configurable pricing rules</li>
              <li>✅ Bulk listing management</li>
              <li>✅ Performance analytics</li>
              <li>✅ eBay API integration</li>
            </ul>
          </div>
          
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
            <ol className="text-left space-y-2">
              <li>1. Create your account</li>
              <li>2. Connect to eBay Developer Portal</li>
              <li>3. Set up pricing rules</li>
              <li>4. Monitor your listings</li>
            </ol>
            <div className="mt-6">
              <Link href="/auth/login" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Project Status</h2>
          <div className="card max-w-2xl mx-auto">
            <div className="text-left">
              <p className="text-gray-600 mb-4">
                This project is currently in development. Core features being implemented:
              </p>
              <ul className="space-y-1 text-sm">
                <li>🔧 User authentication system</li>
                <li>🔧 eBay OAuth integration</li>
                <li>🔧 Price rule engine</li>
                <li>🔧 Listing synchronization</li>
                <li>🔧 Dashboard & analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}