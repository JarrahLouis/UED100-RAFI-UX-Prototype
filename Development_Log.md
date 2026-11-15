
# UED100 - Assessment 2 - RAFI Sydney UX Prototype
## Development Log

### Project Overview

Project: RAFI Sydney mobile menu and booking prototype

Objective:
Improve the mobile menu and venue-specific reservation
experience identified in Assessment 1.

Technologies:
- HTML5
- CSS3
- Vanilla JavaScript
- Visual Studio Code

Framework decision:
Custom CSS rather than Bootstrap 5.

Rationale:
A lightweight implementation supports the mobile
performance recommendations from Assessment 1.
It also provides direct control over responsive
design and accessibility improvements.

### Prototype Scope and Limitations

This prototype focuses on the RAFI North Sydney
mobile menu and reservation journey.

It demonstrates a proposed solution to the
venue-selection and menu-readability problems
identified in Assessment 1.

The prototype does not implement a corresponding
URBNSURF menu, nor does it provide a live
reservation or enquiry-processing system.

Menu items and prices are illustrative only.

Future development could extend the shared
components to URBNSURF and integrate them with
verified restaurant content.

---

## Development Entries

### Entry 001 - Initial Project Setup

Date: 12 November 2026

Files created:
- index.html
- style.css
- script.js
- Assets folder

Changes:
Established the project structure and created
the initial semantic HTML document.

Design rationale:
Semantic HTML improves document organisation
and supports assistive technologies.

Assessment 1 connection:
Addresses recommendations for improved
accessibility and maintainable front-end code.

Testing:
- HTML page opened successfully in a browser.
- Navigation links tested manually.
- Page sections accessible through anchor links.

Status: Completed

---

### Entry 002 - Initial CSS Styling

Date: 13 November 2026

Files modified:
- style.css

Changes:
- Introduced reusable CSS colour variables.
- Applied RAFI-inspired branding.
- Styled header, navigation and footer.
- Added responsive spacing and layout rules.
- Implemented visible keyboard focus indicators.
- Added reduced-motion support.

Design rationale:
Preserve RAFI's established visual identity while
improving readability, consistency and accessibility.

Assessment 1 connection:
Addresses issues concerning mobile readability
and unclear keyboard focus indicators.

Testing:
- CSS successfully loaded in browser.
- Brand colours and layout visually checked.
- Keyboard Tab navigation tested successfully.
- Focus indicators confirmed visible.

Further testing required:
- Mobile viewport testing.
- Colour contrast evaluation.
- Screen-reader testing.
- Cross-browser compatibility.

Status: Completed initial implementation

---

### Entry 003 - Structured Restaurant Menu

Date: 14 November 2026

Files modified:
- index.html
- style.css

Changes:
- Introduced clearly organised menu categories.
- Created reusable menu-item structures.
- Added separate elements for dish names and prices.
- Introduced dietary information labels.
- Added descriptive HTML section headings.
- Applied CSS styling for improved readability.
- Added responsive menu styling for larger screens.
- Included comments explaining design decisions.

Design rationale:
The original RAFI menus were lengthy and text-heavy.
Separating dishes into clearly defined categories
improves visual hierarchy and helps users scan menus
without unnecessary reading effort.

Assessment 1 connection:
Addresses the identified difficulty distinguishing
individual menu items on mobile devices.

Technical decisions:
- Semantic HTML for meaningful content structure.
- CSS Flexbox for dish names and prices.
- Reusable CSS classes for consistent formatting.
- Responsive styling for different screen sizes.
- No JavaScript dependency for essential content.

Sample content:
Dish names and prices are illustrative placeholders.
They must not be presented as verified RAFI offerings.

Testing:
- All three menu categories display correctly
- Dish names, descriptions, prices and dietary labels remain clearly distinguishable
- At a narrow browser width, text wraps correctly.
- Desktop layout visually reviewed
- No layout issues reported during manual testing
- Recorded the 375 × 824 screenshot test

Further testing required:
- Check accessibility using Lighthouse.
- Test keyboard interaction after adding collapsible menu categories.
- Check layouts in additional browsers

Evidence to preserve:
- Screenshot of desktop menu layout.
- Screenshot of mobile menu layout.

Status: Completed initial implementation and manual layout checks.

Next steps:
- Verify the responsive menu layout.
- Implement collapsible menu categories.
- Add venue-specific booking navigation.

---

### Entry 004 - Interactive Menu Categories

Date: 15 November 2026

Files modified:
- index.html
- style.css
- script.js

Changes:
- Added interactive category buttons.
- Introduced expandable menu content containers.
- Added JavaScript event listeners.
- Implemented open and closed menu states.
- Added visual indicators for category states.
- Preserved native keyboard button behaviour.
- Added ARIA attributes for accessibility.
- Implemented progressive enhancement.

Design rationale:
Collapsible menu categories reduce unnecessary
scrolling and allow customers to focus on
relevant menu sections.

Assessment 1 connection:
Addresses the lengthy, text-heavy mobile menu
and recommends more accessible interactions.

Technical decisions:
- Vanilla JavaScript for lightweight interaction.
- CSS classes to control content visibility.
- Native HTML buttons for keyboard accessibility.
- aria-expanded for accessible state information.
- All content remains visible without JavaScript.

Testing:
Pending manual functional and accessibility checks.

Evidence to preserve:
- Screenshot of collapsed mobile categories.
- Screenshot with multiple categories expanded.
- Screenshot of visible keyboard focus.
- Record of JavaScript-disabled behaviour.

Status: Core interactions implemented; visual checks completed, remaining checks pending

Next steps:
- Complete interaction testing.
- Check browser Console for errors.
- Add venue-specific booking navigation.
- Begin implementing the mobile navigation menu.


Bug identified - Duplicate menu content

Observation:
During mobile testing at 375 x 824 pixels,
collapsed menu categories were functioning,
but original menu content remained visible
beneath the interactive menu.

Likely cause:
Legacy HTML from Entry 003 was not fully
removed when implementing Entry 004.

Correction implemented:
- Identified obsolete HTML from Entry 003.
- Removed the duplicated menu category markup.
- Retained the interactive Entry 004 components.
- Refreshed the page and visually checked the layout.

Verification:
- Duplicate menu content no longer visible.
- Collapsed categories display correctly.
- Expanded Desserts category displays its content.
- Reservation section follows the menu correctly.

Status: Resolved - visually verified.

Lessons learned:
When replacing HTML components, ensure all
obsolete markup is removed, including matching
opening and closing tags.

This issue also demonstrated the importance
of testing changes incrementally.

---

### Entry 005 - Venue-Specific Booking Navigation

Date: 15 November 2026

Files modified:
- index.html
- style.css

Changes:
- Replaced general RAFI website link.
- Introduced direct North Sydney booking link.
- Added descriptive booking button text.
- Added notice identifying SevenRooms as the
  external reservation service.
- Improved mobile booking button layout.
- Added code comments explaining decisions.

Design rationale:
The original booking journey required customers
to reselect their venue after viewing the menu.

Direct venue-specific navigation removes this
unnecessary step while preserving RAFI's
existing reservation provider.

Assessment 1 connection:
Addresses the primary usability issue identified
during mobile booking journey analysis.

Technical decisions:
- Native HTML hyperlink rather than JavaScript.
- HTTPS destination.
- Descriptive link text for accessibility.
- No customer data collection in the prototype.
- Responsive button styling using CSS.

Testing:
- Verified reservation button displays correctly
  in the 375 x 824 mobile viewport.
- Followed the booking link to SevenRooms.
- Confirmed the destination identifies
  RAFI North Sydney.
- Confirmed the venue address is displayed.
- Confirmed reservation options are available
  without repeating venue selection.
- Visually verified booking notice and layout.

Further testing required:
- Keyboard navigation and activation.
- JavaScript-disabled navigation.
- Cross-browser testing.

Evidence:
- Entry 005_Mobile.png
- Entry 005_Mobile_Reservations.png

Status:
Core booking navigation implemented and
visually verified. Remaining accessibility
checks pending.

Assessment 1 finding addressed:
The unnecessary venue-reselection step has
been eliminated from the prototype journey.

Next steps:
- Verify direct booking destination.
- Implement responsive mobile navigation.
- Prepare submission documentation.

---

### Entry 006 - Responsive Mobile Navigation

Date: 15 November 2026

Files modified:
- index.html
- style.css
- script.js

Changes:
- Added mobile navigation toggle button.
- Implemented responsive navigation layout.
- Introduced JavaScript show/hide functionality.
- Added appropriate ARIA state information.
- Implemented automatic closing after navigation.
- Preserved navigation without JavaScript.
- Retained existing desktop navigation.

Design rationale:
A collapsible mobile navigation menu reduces
the space occupied by navigation controls,
while keeping key destinations accessible.

Assessment 1 connection:
Addresses mobile navigation and accessibility
recommendations identified during the original
website analysis.

Technical decisions:
- Semantic HTML navigation.
- Native button for keyboard functionality.
- CSS media queries for responsive behaviour.
- JavaScript for conditional visibility.
- Progressive enhancement for reliability.


Testing:
- Desktop navigation visually verified.
- Mobile navigation tested at 375 x 824 pixels.
- Hamburger button visible in collapsed state.
- Navigation links displayed vertically when open.
- Button icon changes between open and closed.
- Restaurant menu layout remains intact.
- No horizontal overflow observed in screenshots.

Further testing required:
- Keyboard activation using Enter and Space.
- Navigation link behaviour.
- JavaScript-disabled navigation.
- Cross-browser compatibility.

Evidence:
- Entry 006_Desktop.png
- Entry 006_Mobile.png
- Entry 006_Mobile_Expanded.png

Status:
Responsive navigation implemented and
visually verified. Accessibility testing pending.


Next steps:
- Verify responsive behaviour.
- Implement contact/enquiry form.
- Complete final testing.
- Prepare technical rationale and submission.

---

### Entry 007 - Contact and Enquiry Form

Date: 15 November 2026

Files modified:
- index.html
- style.css
- script.js

Changes:
- Added a contact and enquiry form.
- Added fields for name, email, enquiry
  type and message.
- Added explicit field labels.
- Implemented JavaScript validation.
- Added field-specific error messages.
- Added accessible status feedback.
- Added responsive form styling.
- Added a Contact navigation link.
- Prevented real form submission.

Design rationale:
The form demonstrates interactive user input,
clear error handling and accessible feedback.

It provides a consistent enquiry interface
while maintaining the visual style of the
RAFI prototype.

Technical decisions:
- Semantic HTML form elements.
- CSS for responsive input layouts.
- JavaScript event listeners and validation.
- textContent for safe feedback rendering.
- No backend or customer data storage.
- Dummy information used for testing.

Security considerations:
Client-side validation improves usability
but cannot provide complete security.
Production forms require server-side validation,
secure transport and appropriate data handling.

Testing:
- Confirmed all four form fields display correctly.
- Submitted an empty form and verified that
  field-specific validation messages appeared.
- Confirmed invalid fields display red borders.
- Confirmed a summary error message is displayed.
- Tested successful validation using sample data.
- Verified that successful validation displays
  a confirmation without claiming an enquiry
  was actually sent.
- Confirmed form fields reset after success.

Further testing required:
- Invalid email format and short message tests.
- Keyboard navigation and focus behaviour.
- Responsive testing at 375px width.
- Cross-browser compatibility.

Evidence:
- Entry 007_Form_Empty.png
- Entry 007_Form_Errors.png
- Entry 007_Form_Success.png

Status:
Core form validation implemented and manually
verified. Remaining accessibility and responsive
checks pending.

Next steps:
- Verify form functionality.
- Complete responsive and accessibility tests.
- Prepare the Figma wireframe and Git repository.
- Write the technical rationale.
- Package final submission files.

---


### Entry 008 - Code Review and Formatting

Date: 15 November 2026

Files reviewed:
- index.html
- style.css
- script.js
- Development_Log.md

Changes:
- Standardised indentation and code formatting.
- Reviewed matching HTML tags.
- Checked CSS and JavaScript organisation.
- Corrected outdated code comments.
- Updated development documentation.
- Reviewed source-code accessibility practices.

Design rationale:
Consistent formatting and clear documentation
improve readability, maintainability and
the ability to identify coding errors.


Testing:
- Reviewed HTML indentation and element nesting.
- Confirmed CSS formatting is consistent.
- Checked JavaScript syntax successfully.
- Verified development log structure and headings.
- Browser regression testing remains outstanding.

Status:
Code formatting and documentation review completed.
Final browser regression testing pending.

---

### Entry 009 - Git Version Control

Date: 15 November 2026

Tools:
- Git
- GitHub
- Visual Studio Code Source Control

Changes:
- Initialised a Git repository in the ASS2 folder.
- Created the initial commit containing the
  working prototype and development documentation.
- Published the repository to GitHub.
- Configured the local main branch to track
  the remote origin/main branch.

Issue encountered:
Git initially attempted to authenticate using
a different GitHub account from the repository
owner, resulting in a 403 permission error.

Resolution:
Corrected the GitHub authentication process
and successfully connected the local repository
to the remote repository.

Verification:
- GitHub repository accessible.
- RAFI_Prototype folder visible.
- Testing_Evidence folder visible.
- Development_Log.md visible.
- Main branch published successfully.
- Local working tree clean at verification.

Repository:
https://github.com/JarrahLouis/UED100-RAFI-UX-Prototype

Status: Completed

---

## Design Decision Register

### DD-001: Use Custom CSS

Decision:
Develop responsive layouts using custom CSS
rather than the Bootstrap framework.

Reason:
The prototype has a relatively limited scope.
Custom CSS avoids unnecessary framework
dependencies and provides greater control.

Alternative considered:
Bootstrap 5 responsive components.

Trade-off:
Custom CSS requires more manual development
and cross-browser testing.

Validation planned:
Lighthouse performance and responsive testing.

---


## Outstanding Tasks

### Completed
- [x] Establish semantic HTML structure.
- [x] Implement RAFI-inspired CSS styling.
- [x] Create structured restaurant menu.
- [x] Implement interactive menu categories.
- [x] Remove duplicate menu markup.
- [x] Implement direct North Sydney booking link.
- [x] Implement responsive mobile navigation.
- [x] Implement demonstration enquiry form.
- [x] Apply final HTML and CSS corrections.
- [x] Re-test form after validation improvements.
- [x] Complete keyboard accessibility checks.
- [x] Test navigation with JavaScript disabled.
- [x] Test mobile, tablet and desktop layouts.

### Remaining

- [ ] Run Lighthouse accessibility and performance audits.
- [ ] Complete wireframe documentation.
- [ ] Establish Git repository.
- [ ] Prepare 200-word technical rationale.
- [ ] Verify APA 7 references.
- [ ] Package final submission ZIP.

---

## Assessment 3 Preparation

Preserve:
- Original prototype screenshots.
- Records of design decisions.
- Bugs and fixes.
- Test results and feedback.
- Before-and-after comparisons.
- Lighthouse audit results.

---

