import React, { useState, useRef } from 'react';
import { linkedin_icon, github_icon, resume_icon } from '../../assets';
import { clearAllSiteData, getCurrentVersion, debugStoredData, forceVersionChange } from '../../utils/versionManager';

const Media = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const timeoutRef = useRef(null);

  // Handle hover with delay for expansion
  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Expand after hovering for 500ms (reduced delay)
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    // Clear expansion timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Collapse after 800ms of no hover
    timeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 800);
  };

  const socialLinks = [
    {
      icon: linkedin_icon,
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/in/avihhan/', // Replace with your LinkedIn URL
      label: 'LinkedIn'
    },
    {
      icon: github_icon,
      alt: 'GitHub',
      href: 'https://github.com/avihhan/', // Replace with your GitHub URL
      label: 'GitHub'
    },
    {
      icon: resume_icon,
      alt: 'Resume',
      href: 'https://docs.google.com/document/d/1txJ_BnyMAjyVEwm4eXmiGYpDK_bPKJeTaf7rT0xY1bA/edit?usp=sharing', // Replace with your resume URL/path
      label: 'Resume'
    }
  ];

  return (
    <div 
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main container that expands upward */}
      <div className={`
        backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl
        transition-all duration-500 ease-out cursor-pointer
        flex flex-col-reverse items-center
        ${isExpanded 
          ? 'rounded-2xl w-14 sm:w-16 h-auto py-2 px-2 sm:py-3 sm:px-3 gap-2 sm:gap-3' 
          : 'rounded-full w-14 h-14 sm:w-16 sm:h-16 justify-center hover:bg-white/20 hover:border-white/30 hover:scale-105'
        }
      `}>
        
        {/* Collapsed state content - White circle indicator */}
        {!isExpanded && (
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/80 shadow-sm"></div>
        )}

        {/* Expanded state content - Social links */}
        {isExpanded && socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center 
                     w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                     backdrop-blur-sm bg-white/5 border border-white/10 
                     hover:bg-white/20 hover:border-white/30 hover:scale-110 
                     transition-all duration-200 ease-out
                     shadow-lg hover:shadow-xl
                     focus:outline-none focus:ring-2 focus:ring-white/50
                     opacity-0 animate-fade-in"
            aria-label={link.label}
            style={{
              animationDelay: `${index * 100 + 200}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <img 
              src={link.icon} 
              alt={link.alt}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain filter brightness-90 
                       group-hover:brightness-110 transition-all duration-200"
            />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-2 sm:mr-3 px-2 sm:px-3 py-1 
                          bg-black/80 text-white text-xs sm:text-sm 
                          rounded-lg opacity-0 group-hover:opacity-100 
                          transition-opacity duration-200
                          whitespace-nowrap pointer-events-none z-10">
              {link.label}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                            border-4 border-transparent border-l-black/80"></div>
            </div>
          </a>
        ))}

        {/* Hover hint tooltip - only show when collapsed */}
        {!isExpanded && (
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 
                        px-3 py-1 bg-black/80 text-white text-xs sm:text-sm 
                        rounded-lg whitespace-nowrap pointer-events-none
                        opacity-0 hover:opacity-100 transition-opacity duration-300">
            Social Links
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 
                          border-4 border-transparent border-l-black/80"></div>
          </div>
        )}

        {/* Development: Version info and debug tools */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 
                        flex flex-col items-center gap-2">
            <div className="text-xs text-white/60 bg-black/40 px-2 py-1 rounded">
              v{getCurrentVersion()}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => debugStoredData()}
                className="px-2 py-1 bg-blue-500 text-white text-xs rounded
                         hover:bg-blue-600 transition-colors duration-200"
                title="Debug stored data in console"
              >
                🔍 Debug
              </button>
              
              <button
                onClick={() => {
                  if (window.confirm('Force version change for testing? (dev only)')) {
                    forceVersionChange();
                  }
                }}
                className="px-2 py-1 bg-yellow-500 text-white text-xs rounded
                         hover:bg-yellow-600 transition-colors duration-200"
                title="Force version change for testing"
              >
                🔄 Force Change
              </button>
              
              <button
                onClick={async () => {
                  if (window.confirm('Clear all site data and reload? (dev only)')) {
                    await clearAllSiteData();
                    window.location.reload();
                  }
                }}
                className="px-2 py-1 bg-red-500 text-white text-xs rounded
                         hover:bg-red-600 transition-colors duration-200"
                title="Clear all site data and reload (dev only)"
              >
                🧹 Clear Data
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Media;