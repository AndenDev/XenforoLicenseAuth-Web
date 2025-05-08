import Config from './config.js';

async function apiRequest(url, options = {}) {
  const sessionId = localStorage.getItem('sessionId');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (sessionId) {
    headers['X-Session-Id'] = sessionId;
  }

  const response = await fetch(`${Config.apiBaseUrl}${url}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  return {
    status: response.status,
    ok: response.ok,
    data,
  };
}

export { apiRequest };
