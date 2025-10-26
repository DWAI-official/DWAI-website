import React from 'react'

function ImpactSection() {
  return (
    <section className="bg-purple-50 py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-8">Our Impact in Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "States Reached" },
            { number: "500+", label: "Deaf Women Trained" },
            { number: "20+", label: "Community Projects" },
            { number: "15+", label: "Partnerships Formed" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-4xl font-bold text-purple-700">{stat.number}</h3>
              <p className="mt-2 text-lg font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactSection