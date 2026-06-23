// ScreenshotGrid.jsx
// Responsive grid for app screenshots

const screenshots = [
  // Placeholder images (replace with real screenshots later)
  "./assets/images/app_img1.png",
  "./assets/images/app_img2.png",
  "./assets/images/app_img3.png",
  "./assets/images/app_img4.png",
  "./assets/images/app_img5.png",
  "./assets/images/app_img6.png",
];

export default function ScreenshotGrid() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark text-center mb-10">App Screenshots</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {screenshots.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 bg-gray-50">
              <img
                src={src}
                alt={`SlapX app screenshot ${i + 1}`}
                className="w-full h-auto object-cover aspect-[5/10]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
