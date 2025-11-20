const API_BASE_URL = 'http://localhost:8001/api';

export const api = {
  // Profile endpoints
  getProfiles: async () => {
    const response = await fetch(`${API_BASE_URL}/profiles/`);
    return response.json();
  },

  createProfile: async (profileData: any) => {
    const response = await fetch(`${API_BASE_URL}/profiles/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    });
    return response.json();
  },

  // Event endpoints
  getEvents: async () => {
    const response = await fetch(`${API_BASE_URL}/events/`);
    return response.json();
  },

  createEvent: async (eventData: any) => {
    const response = await fetch(`${API_BASE_URL}/events/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    return response.json();
  },

  deleteEvent: async (eventId: number) => {
    const response = await fetch(`${API_BASE_URL}/events/${eventId}/`, {
      method: 'DELETE',
    });
    return response.ok;
  },
};
