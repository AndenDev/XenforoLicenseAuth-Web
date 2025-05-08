// assets/js/services/authService.js

import { apiRequest } from '../apiClient.js';
import Config from '../config.js';

async function getPublicIp() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    if (!response.ok) throw new Error('Failed to fetch IP');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP:', error);
    return '';
  }
}

async function login(username, password, ipAddress = '') {
  if (!ipAddress) {
    ipAddress = await getPublicIp();
  }

  return await apiRequest(Config.endpoints.login, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      ipAddress
    })
  });
}

async function logout(sessionId) {
  return await apiRequest(Config.endpoints.logout, {
    method: 'POST',
    body: JSON.stringify({
      sessionId
    })
  });
}

async function validateSession(sessionId, ipAddress = '') {
  if (!ipAddress) {
    ipAddress = await getPublicIp();
  }

  return await apiRequest(Config.endpoints.validateSession, {
    method: 'POST',
    body: JSON.stringify({
      sessionId,
      ipAddress
    })
  });
}


export { login, logout, validateSession };
