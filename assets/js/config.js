const Config = {
    apiBaseUrl: 'https://localhost:7094',
    endpoints: {
        login: '/api/auth/login',
        logout: '/api/auth/logout',
        validateSession: '/api/auth/validate-session',
        homeSummary: '/api/home/summary',
    }
};
export default Config;
