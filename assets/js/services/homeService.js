import { apiRequest } from '../apiClient.js';
import Config from '../config.js';

async function getSummary() {
  return await apiRequest(Config.endpoints.homeSummary, {
    method: 'GET'
  });
}

export { getSummary };
