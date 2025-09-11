# TODO: Implement Live Doctor Search in Navbar

## Steps to Complete

- [x] Update navbar (frontend/src/app/page/nav/page.js):
  - Add useState for search term
  - Add onChange handler to input field
  - Add onClick handler to search button
  - Add onKeyPress (Enter) handler to input for search
  - Use Next.js router to navigate to /about?search=term

- [x] Update about page (frontend/src/app/about/page.js):
  - Create doctors array with all doctor data (name, specialty, image, years, etc.)
  - Import useSearchParams from next/navigation
  - Add filtering logic to show only doctors matching search query (name or specialty)
  - Refactor JSX to map over filtered doctors array
  - Display all doctors if no search query
  - [x] Fix build error: Wrap useSearchParams in Suspense boundary

- [x] Test build after fixing Suspense boundary error
- [ ] Test functionality:
  - Enter doctor name in navbar search
  - Verify navigation to about page
  - Verify correct filtering of doctor cards
  - Test with partial matches and different cases
