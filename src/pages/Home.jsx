import FeatureCard from "../components/FeatureCard";
import ScreenshotGrid from "../components/ScreenshotGrid";

const features = [
  {
    icon: "🤚",
    title: "Shake-to-play slap sounds",
    desc: "Shake your phone to instantly play hilarious slap sounds! Perfect for pranks on the go.",
  },
  {
    icon: "😂",
    title: "Funny prank sound modes",
    desc: "Choose from classic slaps, farts, airhorns, and more. Endless laughter guaranteed!",
  },
  {
    icon: "⬆️",
    title: "Custom sound uploads",
    desc: "Upload your own sounds and surprise your friends with personalized pranks.",
  },
  {
    icon: "🕹️",
    title: "Background mode support",
    desc: "Keep the fun going even when the app is in the background.",
  },
  {
    icon: "💎",
    title: "Premium features",
    desc: "Unlock exclusive sounds and features with in-app purchases.",
  },
  {
    icon: "🔒",
    title: "Privacy-focused & ad-free",
    desc: "No ads, no tracking. Your fun stays private!",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-dark">
              SlapX <span className="text-secondary">–</span> Funny Sound Prank App
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted font-medium">
              Turn your phone into the ultimate prank machine!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.195 12l2.503-2.492zM5.864 2.658L16.8 9.99l-2.302 2.302L5.864 2.658z" /></svg>
                Download on Google Play
              </a>
              <a
                href="#screenshots"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-sm transition hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                View Screenshots
              </a>
            </div>
          </div>
          {/* App Mockup Image */}
          <div className="flex-1 flex justify-center md:justify-end mb-10 md:mb-0">
            <div className="relative w-[220px] h-[440px] rounded-3xl shadow-2xl overflow-hidden border-4 border-white bg-gray-100 flex items-center justify-center">
              {/* Placeholder image, replace with real app mockup */}
              <img
                src="./assets/images/app_preview.png"
                alt="SlapX app mockup"
                className="w-full h-full object-cover"
                draggable="false"
              />
              <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full shadow">Preview</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              App Features
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Everything you need for the perfect prank, in one app.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <div id="screenshots">
        <ScreenshotGrid />
      </div>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-4">About SlapX</h2>
          <p className="text-lg text-muted mb-6">
            SlapX is designed for pranksters of all ages. Whether you want to make your friends laugh, break the ice at a party, or just have some silly fun, SlapX has you covered. With a privacy-first approach and no annoying ads, you can focus on what matters: epic pranks and endless laughter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-block rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-primary-dark hover:shadow-xl"
            >
              Download Now
            </a>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="download" className="bg-primary py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Prank?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Download SlapX for free and unleash the funniest sounds on your friends.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-primary shadow-lg transition hover:bg-gray-100"
            >
              Download for iOS
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              Download for Android
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
