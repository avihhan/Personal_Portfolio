// Version Manager - Automatically clears site data when version changes
const CURRENT_VERSION = '1.0.0'; // Update this when deploying new versions
const VERSION_KEY = 'portfolio_version';
const LAST_LAUNCH_KEY = 'portfolio_last_launch';

export const checkAndUpdateVersion = () => {
  try {
    const storedVersion = localStorage.getItem(VERSION_KEY);
    const lastLaunch = localStorage.getItem(LAST_LAUNCH_KEY);
    const now = new Date().toISOString();

    // If this is the first time visiting the site
    if (!storedVersion) {
      console.log('🚀 First time visit - setting initial version');
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      localStorage.setItem(LAST_LAUNCH_KEY, now);
      return false; // No need to clear data
    }

    // If version has changed, clear all site data
    if (storedVersion !== CURRENT_VERSION) {
      console.log(`🔄 Version changed from ${storedVersion} to ${CURRENT_VERSION} - clearing site data`);
      
      // Clear all localStorage data
      localStorage.clear();
      
      // Clear sessionStorage
      sessionStorage.clear();
      
      // Clear cookies (basic approach)
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
      
      // Clear IndexedDB (if available)
      if ('indexedDB' in window) {
        indexedDB.databases().then(databases => {
          databases.forEach(db => {
            indexedDB.deleteDatabase(db.name);
          });
        });
      }
      
      // Clear service worker cache (if available)
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(registrations => {
          registrations.forEach(registration => {
            registration.unregister();
          });
        });
      }
      
      // Set new version and launch time
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      localStorage.setItem(LAST_LAUNCH_KEY, now);
      
      // Force page reload to ensure clean state
      setTimeout(() => {
        window.location.reload();
      }, 100);
      
      return true; // Data was cleared
    }

    // Update last launch time
    localStorage.setItem(LAST_LAUNCH_KEY, now);
    return false; // No data clearing needed
    
  } catch (error) {
    console.error('Error in version manager:', error);
    return false;
  }
};

export const getCurrentVersion = () => CURRENT_VERSION;

export const getLastLaunch = () => {
  try {
    return localStorage.getItem(LAST_LAUNCH_KEY);
  } catch (error) {
    return null;
  }
};

export const clearAllSiteData = () => {
  try {
    console.log('🧹 Manually clearing all site data');
    
    // Clear all storage
    localStorage.clear();
    sessionStorage.clear();
    
    // Clear cookies
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
    
    // Clear IndexedDB
    if ('indexedDB' in window) {
      indexedDB.databases().then(databases => {
        databases.forEach(db => {
          indexedDB.deleteDatabase(db.name);
        });
      });
    }
    
    // Clear service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      });
    }
    
    // Reset version tracking
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
    localStorage.setItem(LAST_LAUNCH_KEY, new Date().toISOString());
    
    return true;
  } catch (error) {
    console.error('Error clearing site data:', error);
    return false;
  }
};
