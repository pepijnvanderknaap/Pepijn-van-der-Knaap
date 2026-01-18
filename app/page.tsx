export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 sm:py-32 lg:py-40">
          <div className="text-center space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              Pepijn van der Knaap
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-light">
              Custom Software & App Development
            </p>
            <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-500 max-w-2xl mx-auto">
              Building elegant, efficient solutions for modern businesses
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-slate-50">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-400/50">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-50">
                Custom Web Applications
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Modern, scalable web applications tailored to your specific business needs and workflows.
              </p>
            </div>

            {/* Service 2 */}
            <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-400/50">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-50">
                Business Process Automation
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Streamline operations and boost productivity with intelligent automation solutions.
              </p>
            </div>

            {/* Service 3 */}
            <div className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500/50 dark:hover:border-indigo-400/50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-50">
                Tailor-Made Software Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Bespoke software designed from the ground up to solve your unique challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-slate-50">
            Featured Project
          </h2>
          <a
            href="https://compass.pepijnvanderknaap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-500 dark:hover:border-indigo-400"
          >
            <div className="p-10 sm:p-12">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-slate-900 dark:text-slate-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Compass Kitchen Orders
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                    Web Application
                  </span>
                </div>
                <svg
                  className="w-6 h-6 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                A streamlined kitchen order management system designed to optimize restaurant operations and improve order accuracy.
              </p>
              <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                View Project
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-900 dark:text-slate-50">
            Let's Work Together
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <a
            href="mailto:contact@pepijnvanderknaap.com"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Pepijn van der Knaap. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
