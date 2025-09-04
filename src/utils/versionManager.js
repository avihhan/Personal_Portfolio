// Version Manager - Automatically clears site data when version changes
const CURRENT_VERSION = '1.0.1'; // Update this when deploying new versions
const VERSION_KEY = 'portfolio_version';
const LAST_LAUNCH_KEY = 'portfolio_last_launch';

// Debug function to show all stored data
export const debugStoredData = () => {
  console.log('🔍 === DEBUGGING STORED DATA ===');
  
  // Check localStorage
  console.log('📦 localStorage items:');
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`  ${key}: ${value}`);
  }
  
  // Check sessionStorage
  console.log('📦 sessionStorage items:');
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    console.log(`  ${key}: ${value}`);
  }
  
  // Check cookies
  console.log('🍪 Cookies:');
  console.log(`  ${document.cookie}`);
  
  // Check version info
  console.log('🏷️ Version Info:');
  console.log(`  Current Version: ${CURRENT_VERSION}`);
  console.log(`  Stored Version: ${localStorage.getItem(VERSION_KEY)}`);
  console.log(`  Last Launch: ${localStorage.getItem(LAST_LAUNCH_KEY)}`);
  
  console.log('🔍 === END DEBUG ===');
};

// Enhanced data clearing function
const clearAllDataThoroughly = async () => {
  console.log('🧹 Starting thorough data clearing...');
  
  try {
    // Clear localStorage
    localStorage.clear();
    console.log('✅ localStorage cleared');
    
    // Clear sessionStorage
    sessionStorage.clear();
    console.log('✅ sessionStorage cleared');
    
    // Clear cookies more thoroughly
    const cookies = document.cookie.split(";");
    cookies.forEach(cookie => {
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
      if (name) {
        // Clear with various path and domain combinations
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
      }
    });
    console.log('✅ Cookies cleared');
    
    // Clear IndexedDB
    if ('indexedDB' in window) {
      try {
        const databases = await indexedDB.databases();
        for (const db of databases) {
          await indexedDB.deleteDatabase(db.name);
        }
        console.log('✅ IndexedDB cleared');
      } catch (e) {
        console.log('⚠️ IndexedDB clearing failed:', e);
      }
    }
    
    // Clear service worker and cache
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (const registration of registrations) {
          await registration.unregister();
        }
        console.log('✅ Service workers unregistered');
        
        // Clear cache storage
        if ('caches' in window) {
          const cacheNames = await caches.keys();
          await Promise.all(cacheNames.map(name => caches.delete(name)));
          console.log('✅ Cache storage cleared');
        }
      } catch (e) {
        console.log('⚠️ Service worker clearing failed:', e);
      }
    }
    
    // Clear other potential storage
    if ('webkitIndexedDB' in window) {
      console.log('✅ WebKit IndexedDB detected and will be cleared on reload');
    }
    
    console.log('🧹 Data clearing completed');
    return true;
  } catch (error) {
    console.error('❌ Error during data clearing:', error);
    return false;
  }
};

export const checkAndUpdateVersion = async () => {
  try {
    console.log('🔄 Checking version...');
    console.log(`Current version: ${CURRENT_VERSION}`);
    
    const storedVersion = localStorage.getItem(VERSION_KEY);
    const lastLaunch = localStorage.getItem(LAST_LAUNCH_KEY);
    const now = new Date().toISOString();
    
    console.log(`Stored version: ${storedVersion}`);
    console.log(`Last launch: ${lastLaunch}`);

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
      
      // Show what data exists before clearing
      debugStoredData();
      
      // Clear all data thoroughly
      const cleared = await clearAllDataThoroughly();
      
      if (cleared) {
        // Set new version and launch time
        localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
        localStorage.setItem(LAST_LAUNCH_KEY, now);
        
        console.log('🔄 Version updated, reloading page in 1 second...');
        
        // Force page reload to ensure clean state
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        
        return true; // Data was cleared
      } else {
        console.error('❌ Failed to clear data, forcing reload anyway');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        return true;
      }
    }

    // Update last launch time
    localStorage.setItem(LAST_LAUNCH_KEY, now);
    console.log('✅ Version check completed - no changes needed');
    return false; // No data clearing needed
    
  } catch (error) {
    console.error('❌ Error in version manager:', error);
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

export const clearAllSiteData = async () => {
  try {
    console.log('🧹 Manually clearing all site data');
    
    // Show current data before clearing
    debugStoredData();
    
    // Clear all data thoroughly
    const cleared = await clearAllDataThoroughly();
    
    if (cleared) {
      // Reset version tracking
      localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
      localStorage.setItem(LAST_LAUNCH_KEY, new Date().toISOString());
      console.log('✅ Manual data clearing completed');
    }
    
    return cleared;
  } catch (error) {
    console.error('❌ Error clearing site data:', error);
    return false;
  }
};

// Force version change for testing
export const forceVersionChange = () => {
  console.log('🔄 Forcing version change for testing...');
  localStorage.setItem(VERSION_KEY, '0.0.0'); // Set to old version
  window.location.reload();
};
