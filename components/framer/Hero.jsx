export default function Hero({ 
  title, 
  subtitle, 
  description,
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
  backgroundImage = "/images/hero-bg.jpg"
}) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/70 to-gray-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-medium">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary Button - Light Blue Filled */}
          <a
            href={primaryButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            {primaryButtonText}
          </a>

          {/* Secondary Button - White Outlined */}
          <a
            href={secondaryButtonLink}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white hover:bg-white hover:text-gray-900 rounded-lg transition-all"
          >
            {secondaryButtonText}
          </a>
        </div>
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
