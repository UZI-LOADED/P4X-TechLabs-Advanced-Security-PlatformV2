// Example operations
const runOperations = async () => {
  const platform = new P4XPlatform();
  
  // EMV operations
  await platform.vectors.emv.startBypass();
  
  // Network operations
  await platform.vectors.network.initiateScan();
  
  // AI operations
  await platform.ai.generatePayload();
};
