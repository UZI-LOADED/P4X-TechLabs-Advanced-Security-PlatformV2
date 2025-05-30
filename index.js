// index.js
import P4XPlatform from './p4x-platform';
import { platformConfig } from './config';

const deployPlatform = async () => {
  const platform = new P4XPlatform();
  
  try {
    await platform.initialize();
    console.log('P4X Platform initialized successfully');
    
    // Start core services
    await platform.startServices();
    
    // Enable monitoring
    await platform.enableMonitoring();
    
  } catch (error) {
    console.error('Deployment failed:', error);
  }
};

deployPlatform();
