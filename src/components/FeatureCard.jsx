// FeatureCard.jsx
// Reusable card for app features
export default function FeatureCard({ icon, title, desc }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-primary/40">
      <span className="mb-4 inline-block text-4xl transition-transform group-hover:scale-110">{icon}</span>
      <h3 className="text-lg font-semibold text-dark mb-1">{title}</h3>
      <p className="text-sm leading-relaxed text-muted">{desc}</p>
    </div>
  );
}
