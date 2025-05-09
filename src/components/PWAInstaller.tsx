
import { useState, useEffect } from 'react';

export const PWAInstaller = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Store the event for later use
      setDeferredPrompt(e);
      // Show the install button
      setIsVisible(true);
    });

    // Listen for app installed event
    window.addEventListener('appinstalled', () => {
      // Hide the install button
      setIsVisible(false);
      // Log app installed
      console.log('PWA installed successfully');
    });
  }, []);

  const handleInstallClick = () => {
    // Hide the install button
    setIsVisible(false);
    
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        // Clear the deferredPrompt for next time
        setDeferredPrompt(null);
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-white rounded-lg shadow-lg p-4 max-w-sm w-full border border-uor-purple/20 text-center">
      <p className="text-sm mb-3">Install this app on your device for better experience!</p>
      <button 
        onClick={handleInstallClick}
        className="btn-primary text-sm py-2 px-4"
      >
        Install App
      </button>
    </div>
  );
};

export default PWAInstaller;
