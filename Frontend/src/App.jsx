import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/user", { 
      credentials: 'include' 
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  const handleLogin = () => {
    window.open("http://localhost:3000/api/auth/google", "_self");
  };

  const handleLogout = async () => {
    await fetch("http://localhost:3000/api/auth/logout", { 
      credentials: 'include' 
    });
    setUser(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 flex items-center justify-center p-5">
      {!user ? (
        <div className="w-full max-w-md animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            {/* Google Logo */}
            <div className="flex justify-center mb-8 transform transition-transform hover:scale-105">
              <svg width="80" height="80" viewBox="0 0 75 75" fill="none">
                <path d="M68.1562 31.4062H38.2812V44.5312H56.25C54.8438 51.5625 48.75 56.25 38.2812 56.25C26.25 56.25 16.4062 46.4062 16.4062 34.375C16.4062 22.3438 26.25 12.5 38.2812 12.5C43.5938 12.5 48.4375 14.5312 52.0312 17.8125L61.4062 8.4375C55.1562 2.8125 47.0312 0 38.2812 0C17.3438 0 0 17.3438 0 38.2812C0 59.2188 17.3438 76.5625 38.2812 76.5625C56.7188 76.5625 73.4375 63.2812 73.4375 38.2812C73.4375 36.0938 73.2812 33.9062 68.1562 31.4062Z" fill="#4285F4"/>
                <path d="M6.5625 22.5L17.1875 30.4688C19.6875 23.9062 26.25 19.5312 34.375 19.5312C39.6875 19.5312 44.5312 21.5625 48.125 24.8438L57.5 15.4688C51.25 9.84375 43.125 7.03125 34.375 7.03125C21.0938 7.03125 9.6875 13.5938 6.5625 22.5Z" fill="#EA4335"/>
                <path d="M38.2812 76.5625C47.0312 76.5625 55.1562 73.75 61.4062 68.125L51.5625 59.2188C48.125 61.875 43.75 63.2812 38.2812 63.2812C27.8125 63.2812 21.7188 58.5938 20.3125 51.5625L9.6875 59.6875C15.625 68.5938 26.7188 76.5625 38.2812 76.5625Z" fill="#34A853"/>
                <path d="M68.1562 31.4062H38.2812V44.5312H56.25C54.8438 48.2812 52.3438 51.5625 48.9062 53.75L58.75 62.6562C65 56.875 73.4375 47.5 73.4375 38.2812C73.4375 36.0938 73.2812 33.9062 68.1562 31.4062Z" fill="#FBBC04"/>
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-medium text-gray-900 text-center mb-3">
              Welcome
            </h1>
            <p className="text-base text-gray-600 text-center mb-10">
              Sign in to continue to your account
            </p>

            {/* Google Sign In Button */}
            <button
              onClick={handleLogin}
              className="w-full flex items-center justify-center gap-4 bg-white border-2 border-gray-300 rounded-lg px-6 py-4 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:border-blue-400 hover:shadow-lg active:scale-95 transition-all duration-300 shadow-md group"
            >
              <svg width="20" height="20" viewBox="0 0 18 18" className="group-hover:scale-110 transition-transform">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
                <path d="M9.003 18c2.43 0 4.467-.806 5.956-2.18L12.05 13.56c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H.96v2.332C2.44 15.983 5.485 18 9.003 18z" fill="#34A853"/>
                <path d="M3.964 10.712c-.18-.54-.282-1.117-.282-1.71 0-.593.102-1.17.282-1.71V4.96H.957C.347 6.175 0 7.55 0 9.002c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9.003 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.464.891 11.428 0 9.002 0 5.485 0 2.44 2.017.96 4.958L3.967 7.29c.708-2.127 2.692-3.71 5.036-3.71z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="text-xs text-gray-500 font-medium">SECURE LOGIN</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 1a3 3 0 00-3 3v1H5a2 2 0 00-2 2v9a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2V4a3 3 0 00-3-3zm3 4V4a1 1 0 10-2 0v1h2z" clipRule="evenodd"/>
              </svg>
              <span>Protected by Google's security</span>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex justify-center gap-8 text-xs text-gray-500">
                <a href="#" className="hover:text-blue-600 transition-colors">Help</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-md animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header Gradient */}
            <div className="h-32 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700"></div>
            
            <div className="px-8 pb-8 -mt-16">
              {/* Profile Image */}
              <div className="flex justify-center mb-6">
                <img 
                  src={user.photos[0].value} 
                  alt="profile" 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-xl ring-4 ring-blue-100 transform transition-transform hover:scale-105"
                />
              </div>

              {/* User Info */}
              <div className="text-center mb-6">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                  {user.displayName}
                </h2>
                <p className="text-base text-gray-600 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  {user.emails[0].value}
                </p>
              </div>

              {/* Success Card */}
              <div className="w-full bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-5 mb-6 transform transition-all hover:shadow-md">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-green-900">Successfully Authenticated</p>
                    <p className="text-sm text-green-700 mt-1">Your account is securely connected</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleLogout}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg px-6 py-4 text-base font-semibold hover:from-red-600 hover:to-pink-600 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign Out
                </button>

                <a 
                  href="https://myaccount.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 rounded-lg px-6 py-3 text-sm font-medium hover:bg-gray-200 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                  Manage Google Account
                </a>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-6 text-center bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
              </svg>
              <span>Your data is encrypted and secure</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default App;