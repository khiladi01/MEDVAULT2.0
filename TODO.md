# TODO: Fix Frontend-Backend Connection Issues

## Steps to Complete
- [x] Update frontend/src/app/utils/api.js to prepend "/api" to all API paths (e.g., "/register" -> "/api/register")
- [x] Update backend/src/server.js to remove trailing slash from CORS origin "https://medvault-five.vercel.app/"
- [x] Verify changes and test registration/login functionality (changes applied, ready for testing)
