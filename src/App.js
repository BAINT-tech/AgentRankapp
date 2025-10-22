import { motion } from "framer-motion";

function AgentRankApp() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="w-full py-6 bg-green-600 text-white text-center font-bold text-2xl shadow-md">
        AgentRank App
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI-Powered Agent Ranking Platform
        </motion.h1>
        <p className="text-lg max-w-xl mb-6">
          Track, analyze, and rank AI agents by performance, skill, and impact — all in real-time.
        </p>
        <button
          className="bg-green-600 text-white hover:bg-green-700 rounded-2xl px-8 py-4 text-lg font-semibold shadow-md transition-all"
        >
          Explore Dashboard
        </button>
      </section>

      {/* Dashboard Mockup */}
      <section className="px-4 md:px-20 py-12 bg-gray-50">
        <div className="rounded-2xl shadow-xl border border-gray-200 p-6">
          <img
            src="A_digital_rendering_displays_a_mockup_of_AgentRank.png"
            alt="AgentRank Dashboard Mockup"
            className="rounded-xl border border-gray-100 shadow-md w-full"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t mt-12">
        © {new Date().getFullYear()} AgentRank. Built by Lebel Bros.
      </footer>
    </div>
  );
}

export default AgentRankApp;
