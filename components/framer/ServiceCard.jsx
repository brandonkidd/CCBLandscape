import Link from 'next/link';

export default function ServiceCard({ 
  title, 
  description, 
  link,
  icon,
  iconBgColor = "bg-blue-100",
  iconColor = "text-blue-600"
}) {
  return (
    <Link href={link} className="group">
      <div className="bg-white rounded-2xl p-8 h-full border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Icon */}
        {icon && (
          <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <div className={`text-2xl ${iconColor}`}>{icon}</div>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
          <span>Learn more</span>
          <svg 
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
