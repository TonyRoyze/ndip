# Sri Lanka Website Guidelines Implementation Checklist

This checklist is based on:

- `SLDDS_Integrated_Guidelines(Updated).pdf`
- `National Inclusive Information Access Portal - NIIAP Updated.docx`
- A quick review of the current Next.js app structure in this repository

Use this as the working checklist for bringing the Sri Lanka disability information portal into alignment with SLDDS and NIIAP requirements.

## Status Key

- `[x]` Present in the current app at a basic/skeleton level
- `[ ]` Still needs implementation, verification, or content completion
- `[~]` Partially present, but needs correction or expansion

## 1. Foundation and Branding

- [ ] Rename and standardize product identity across UI, metadata, docs, and URLs as NIIAP or the approved final portal name.
- [ ] Replace placeholder `ND` / `NDIP` branding with approved Sri Lanka Government emblem and ministry branding.
- [ ] Ensure the government emblem appears in the desktop header and footer, and is centered in mobile header where required by SLDDS.
- [ ] Use approved SLDDS color tokens: neutral base, accessible primary/secondary colors, and semantic success/warning/error/info colors.
- [ ] Select the approved ministry accent color for Health and Social Welfare, then test all accent usage against WCAG contrast.
- [ ] Replace Inter with the SLDDS trilingual font stack: Noto Sans, Noto Sans Sinhala, and Noto Sans Tamil.
- [ ] Align spacing to SLDDS scale: 4, 8, 16, 24, 32, 48, 64 px.
- [ ] Apply SLDDS max content width of 1200px, 12-column layout, 16px gutters, and 32px section padding where appropriate.
- [ ] Verify responsive breakpoints: xs below 480px, sm 481-768px, md 769-1024px, lg 1025-1440px, xl above 1440px.

## 2. Site Structure and Routing

- [x] Home page skeleton exists.
- [~] Main navigation exists, but needs to match final SLDDS/NIIAP taxonomy and routes.
- [ ] Create actual pages for every current navigation item instead of linking to missing routes.
- [ ] Add the full required sitemap sections:
  - [ ] Home
  - [ ] About the Portal
  - [ ] Disability Welfare Benefits
  - [ ] Government Services Directory
  - [ ] Healthcare and Rehabilitation
  - [ ] Mental Health and Psychosocial Support
  - [ ] Education and Skills Development
  - [ ] Employment and Entrepreneurship
  - [ ] Assistive Technology
  - [ ] Rights and Legal Support
  - [ ] Community and Support Networks
  - [ ] Complaints and Feedback
  - [ ] Accessibility Tools
  - [ ] Help and Support
- [ ] Make Rights and Legal Support a top-level navigation item, not a hidden sub-category.
- [ ] Add breadcrumbs for all interior pages.
- [ ] Add side navigation for deep content sections with max 3 levels.
- [ ] Add pagination patterns for long result lists and directories.
- [ ] Ensure repeated header, navigation, search, and footer elements remain in the same order and position across pages.

## 3. Home Page Requirements

- [x] Welcome section exists.
- [x] Smart search UI skeleton exists.
- [x] Quick access cards exist.
- [x] Latest announcements skeleton exists.
- [x] Emergency contacts card exists.
- [~] Persistent crisis support button exists, but contacts and behavior need verification.
- [ ] Make smart search functional across modules by keyword, disability type, location, and service category.
- [ ] Ensure search results return within 2 seconds.
- [ ] Update quick access cards to exactly cover: Disability Benefits, Apply for Services, Assistive Devices, Employment Opportunities, Mental Health Support, and Complaints / Feedback.
- [ ] Add featured welfare programs.
- [ ] Add verified national disability hotline in header/footer and on the home page.
- [ ] Ensure the emergency banner includes disability hotlines, crisis contacts, and critical resources.

## 4. Multilingual Requirements

- [x] Language switcher exists.
- [~] Language preference persists locally, but full content parity is not implemented.
- [ ] Provide all user-facing content in Sinhala, Tamil, and English as equal first-class languages.
- [ ] Fix incorrect or placeholder Sinhala and Tamil strings in current navigation, crisis contact labels, and home copy.
- [ ] Set `html lang` dynamically based on the active locale.
- [ ] Mark mixed-language content sections with the correct `lang` attribute.
- [ ] Add proper locale routes or i18n architecture for all pages, not only a partial `/vi` route.
- [ ] Ensure translated pages have equal layout quality, no clipping, and no missing functionality.
- [ ] Persist language preference across sessions in a privacy-conscious way.
- [ ] Add translation status indicators in the CMS/content workflow.

## 5. Accessibility Baseline

- [x] Skip-to-main-content link exists.
- [x] Basic landmarks are present in the home page, header, and footer.
- [x] Basic accessibility toolbar exists.
- [~] Focus styles exist in some components, but need full audit.
- [ ] Meet WCAG 2.2 Level AA across all public pages.
- [ ] Run automated Axe or equivalent audits and reach 95 percent or higher.
- [ ] Complete manual testing with PWD users, including psychosocial disability representatives, and reach 90 percent or higher task completion.
- [ ] Ensure every page has exactly one meaningful H1.
- [ ] Ensure every page has a descriptive browser title and metadata.
- [ ] Use semantic HTML for structure: header, nav, main, section, footer, ul/ol, table, form, label.
- [ ] Ensure visual reading order matches DOM order.
- [ ] Ensure all interactive elements have accessible names, roles, states, and values.
- [ ] Ensure status messages use `role="status"` or `aria-live` without stealing focus.
- [ ] Ensure icons used for actions have accessible labels and decorative icons are hidden from assistive tech.
- [ ] Add meaningful alt text to all informative images, limited to concise descriptions.
- [ ] Use null alt text for decorative images.
- [ ] Add long descriptions for charts, diagrams, maps, and infographics.
- [ ] Ensure links that open new tabs/windows communicate that behavior.

## 6. Keyboard and Interaction Accessibility

- [ ] Ensure all features work with keyboard only.
- [ ] Ensure focus order follows visual order.
- [ ] Ensure visible focus indicators have at least 3:1 contrast and are at least 2 CSS px thick.
- [ ] Ensure modals, popovers, menus, drawers, and map controls have no keyboard traps.
- [ ] Ensure modals can be closed with Escape.
- [ ] Ensure hover/focus popovers are dismissible, hoverable, and persistent.
- [ ] Avoid single-character keyboard shortcuts unless they can be disabled, remapped, or scoped to focused controls.
- [ ] Provide single-click or keyboard alternatives for drag, swipe, pinch, and path-based gestures.
- [ ] Ensure destructive or irreversible pointer actions can be cancelled, undone, or confirmed.
- [ ] Keep primary pointer targets at least 44x44px and dense targets at least 24x24px.

## 7. Visual Accessibility and Motion

- [ ] Ensure normal text contrast is at least 4.5:1.
- [ ] Ensure large text contrast is at least 3:1.
- [ ] Ensure non-text UI contrast is at least 3:1.
- [ ] Do not use color alone to convey information.
- [ ] Support text resize to 200 percent without loss of content or function.
- [ ] Support 320px viewport width without horizontal scrolling except for necessary data tables.
- [ ] Support custom text spacing without broken layout:
  - [ ] Line height at least 1.5 times font size
  - [ ] Paragraph spacing at least 2 times line height
  - [ ] Letter spacing at least 0.12 times font size
  - [ ] Word spacing at least 0.16 times font size
- [ ] Remove or control content that moves, scrolls, or blinks for more than 5 seconds.
- [ ] Ensure no content flashes more than 3 times per second.
- [ ] Respect `prefers-reduced-motion`.
- [~] Low-stress mode exists, but needs full design definition and verification.
- [ ] Ensure low-stress mode reduces animation, visual complexity, distractions, and menu complexity.

## 8. Accessibility Toolbar and Personalization

- [x] Font size controls exist.
- [x] High contrast toggle exists.
- [x] Text-to-speech toggle skeleton exists.
- [x] Low-stress mode toggle exists.
- [x] Visual impairment mode toggle exists.
- [ ] Make text-to-speech functional with browser-native TTS or an approved service.
- [ ] Add high contrast variants required by NIIAP: dark on light and light on dark.
- [ ] Add keyboard navigation indicator if required by final UX.
- [ ] Add reading guide cursor tool for dyslexia/cognitive support.
- [ ] Provide user reset/opt-out for locally stored UI preferences.
- [ ] Store only non-sensitive UI preferences locally unless explicit consent is obtained.
- [ ] Add privacy notice for personalization and preference storage.

## 9. Forms and Error Handling

- [ ] Ensure all form inputs have programmatic labels.
- [ ] Use `fieldset` and `legend` or ARIA grouping for grouped controls.
- [ ] Associate help text and error text with fields using `aria-describedby`.
- [ ] Clearly mark required fields visually and for screen readers.
- [ ] Provide specific, plain-language error messages.
- [ ] Provide error suggestions that explain how to fix the issue.
- [ ] Prevent automatic form submission on selection changes.
- [ ] Provide review/confirmation steps for sensitive submissions.
- [ ] Add autocomplete attributes where appropriate.
- [ ] Add steppers for multi-step forms with desktop and mobile variants.
- [ ] Allow users to exit multi-step processes quickly without losing progress.

## 10. Welfare Benefits Module

- [ ] Create searchable listing of disability welfare benefits.
- [ ] Create dedicated single-topic page for each benefit.
- [ ] Include eligibility criteria for age, disability type, income threshold, location, and other requirements.
- [ ] Build guided eligibility checker questionnaire.
- [ ] Add required document checklists for each benefit.
- [ ] Provide downloadable document checklists in all three languages.
- [ ] Add step-by-step application guides.
- [ ] Link to online forms and downloadable PDF forms.
- [ ] Provide plain language and Easy-to-Read versions for key benefit content.
- [ ] Add filters by disability type, age group, location, and benefit category.

## 11. Government Services Directory

- [ ] Build searchable directory of ministries, departments, provincial offices, rehabilitation centers, healthcare providers, NGOs, and service providers.
- [ ] Add filters by province, district, divisional secretariat, and service type.
- [ ] Add individual directory pages with organization name, address, telephone, email, website, hours, service details, and accessibility information.
- [ ] Build interactive map with clickable service pins.
- [ ] Include accessibility-rated service/location listings where possible.
- [ ] Create separate NGO, advocacy group, and community organization sub-directory.
- [ ] Populate Human Rights and Disability Rights directory with verified institutions and links.

## 12. Healthcare and Rehabilitation

- [ ] Create medical services section for disability assessment, rehabilitation hospitals, therapy, and community rehabilitation.
- [ ] Add geographic filters and contact details for services.
- [ ] Add short plain-language summaries for complex health service pages.
- [ ] Add short explainer videos under 3 minutes for key services where feasible.
- [ ] Add Sri Lanka Sign Language video supplements for key content.

## 13. Mental Health and Psychosocial Support

- [ ] Create a dedicated Mental Health and Psychosocial Support section.
- [ ] Add government and private mental health services directory.
- [ ] Add counselling hotline list with operating hours.
- [ ] Add community-based psychosocial support programs by province.
- [ ] Add peer support networks and recovery community links.
- [ ] Add anonymous self-help resources accessible without login.
- [ ] Add self-help guides, stress management tools, guided exercises, wellbeing guides, and recovery stories.
- [ ] Add caregiver mental health and self-care resources.
- [ ] Use respectful, non-clinical, non-stigmatizing language throughout.
- [ ] Do not require disability type disclosure for general information access.
- [ ] Verify crisis contacts at least every 6 months through CMS workflow.

## 14. Crisis Support

- [x] `Get Help Now` button exists.
- [~] Crisis modal exists, but contact validity and localization need review.
- [ ] Keep `Get Help Now` visible and keyboard-accessible on every page.
- [ ] Open crisis support without navigating away from the current page.
- [ ] Include emergency mental health contacts, suicide prevention hotlines, immediate support services, and 24/7 counselling contacts.
- [ ] Verify all hotline numbers and links before launch.
- [ ] Remove continuous pulse animation or disable it under reduced-motion and low-stress modes.
- [ ] Ensure crisis support meets WCAG 2.2 AA contrast and focus requirements.

## 15. Education, Employment, and Assistive Technology

- [ ] Add education listings for special education institutions, inclusive schools, scholarships, and vocational training centers.
- [ ] Add eligibility and application information for education programs.
- [ ] Build inclusive employment job board.
- [ ] Add filters for job type, location, and accommodation offered.
- [ ] Add employer resources: inclusive hiring guidelines, quota requirements, workplace accessibility standards.
- [ ] Build assistive technology catalog by mobility, vision, hearing, and communication categories.
- [ ] Add supplier information and government subsidy details.
- [ ] Add emerging assistive technology innovations feed if still in scope.

## 16. Rights, Legal, Community, and Support Networks

- [ ] Create top-level Rights and Legal Support section.
- [ ] Add national legislation, UNCRPD references, human rights framework, legal aid services, policy and regulations.
- [ ] Create community and support networks section.
- [ ] Add disability organizations database.
- [ ] Add caregiver support resources and dedicated caregiver pathway.
- [ ] Add volunteer opportunities.
- [ ] Add moderated peer support/community links with safeguarding guidance.
- [ ] Add specialist content by disability type, including visual impairment, hearing impairment, deafblindness, intellectual disability, psychosocial disability, and multiple/complex disability.

## 17. Complaints and Feedback

- [ ] Build accessible complaint submission form.
- [ ] Allow complaints about welfare services, accessibility issues, discrimination, and service quality.
- [ ] Generate unique reference number for each complaint.
- [ ] Allow status tracking by reference number without requiring an account.
- [ ] Send email notifications on submission, status update, and resolution.
- [ ] Build admin complaint dashboard with assignment, response, close, and audit trail.
- [ ] Add separate service request form for non-complaint assistance.
- [ ] Ensure complaint workflow passes end-to-end acceptance testing.

## 18. CMS and Content Governance

- [ ] Build or connect headless CMS.
- [ ] Implement roles: Super Admin, Ministry Editor, Agency Editor, Moderator.
- [ ] Support content create, read, update, archive, and delete.
- [ ] Add content approval workflow before publishing.
- [ ] Add audit log for create, edit, delete, approve with timestamp, user ID, and action type.
- [ ] Manage Sinhala, Tamil, and English content separately.
- [ ] Add translation status indicators.
- [ ] Add plain language checklist in content editor.
- [ ] Require plain language review flag before content submission/approval.
- [ ] Train content editors on plain language before publishing access.
- [ ] Add last-updated dates and version history for relevant pages and documents.
- [ ] Establish quarterly design/content review process.

## 19. Plain Language and Easy-to-Read Content

- [ ] Write all content in plain language across all three languages.
- [ ] Use short direct sentences and active voice.
- [ ] Avoid legal, medical, or technical jargon unless explained in plain terms.
- [ ] Use headings that describe the content that follows.
- [ ] Use one topic per page for benefits, services, rights, and application guides.
- [ ] Add short summaries at the top of complex policy and legislative pages.
- [ ] Create Easy-to-Read versions for key welfare benefit pages, eligibility guides, rights information pages, and application documents.
- [ ] Use icons/images as visual supports in Easy-to-Read pages.
- [ ] Apply plain language to automated notifications, error messages, labels, and help text.

## 20. Media and Document Accessibility

- [ ] Use WebP, AVIF, or SVG for optimized images.
- [ ] Keep images compressed and under the SLDDS size guidance where practical.
- [ ] Avoid text inside images unless translated and duplicated in accessible text.
- [ ] Add transcripts for all pre-recorded audio/video.
- [ ] Add synchronized captions for pre-recorded and live video.
- [ ] Add audio descriptions for informational videos.
- [ ] Add Sri Lanka Sign Language interpretation for government announcements, emergency alerts, public awareness videos, and key welfare/rights/application pages.
- [ ] Provide multi-format documents: Easy-to-Read, sign language video, audio, and downloadable formats where required.

## 21. Search, Maps, Analytics, and Integrations

- [ ] Implement global smart search across all modules.
- [ ] Add voice search for global smart search if in scope.
- [ ] Add guided service navigation prompt: "What do you need help with today?"
- [ ] Guide users to income support, mental health support, assistive devices, employment support, legal help, and housing assistance based on answers.
- [ ] Integrate map provider or OpenStreetMap for service locations.
- [ ] Add email/SMS gateway for complaint notifications and emergency alerts where required.
- [ ] Add analytics dashboard for usage, content performance, complaint resolution, and accessibility compliance.
- [ ] Add privacy-conscious analytics such as Matomo or approved GA4 configuration.
- [ ] Plan future National Digital Identity integration for citizen accounts.
- [ ] Plan integration with government grievance platform for complaint forwarding/status sync.

## 22. Security and Privacy

- [ ] Enforce HTTPS everywhere.
- [ ] Enforce TLS 1.2 or TLS 1.3.
- [ ] Add HSTS.
- [ ] Add security headers: Content Security Policy, X-Content-Type-Options, X-Frame-Options, and Referrer-Policy.
- [ ] Protect against OWASP Top 10 risks.
- [ ] Require MFA for admin portal.
- [ ] Use OTP or email verification for public account features if citizen accounts are implemented.
- [ ] Encrypt sensitive data at rest using AES-256 or approved equivalent.
- [ ] Comply with Sri Lanka Personal Data Protection Act 2022.
- [ ] Add privacy policy, terms of use, cookie/data usage notices, and data protection notices.
- [ ] Add Vulnerability Disclosure Policy.
- [ ] Complete penetration testing before launch and annually thereafter.
- [ ] Ensure no citizen data processed by AI is used to train external public LLMs without authorization.
- [ ] Keep AI/citizen data in government-approved or locally hosted secure cloud environments.

## 23. Performance, Compatibility, and Reliability

- [ ] Load all public pages within 3 seconds on standard 4G.
- [ ] Preserve usability on 2G/3G with graceful degradation.
- [ ] Return search results within 2 seconds.
- [ ] Complete CMS save/publish/approve actions within 5 seconds.
- [ ] Support at least 5,000 concurrent users without performance degradation.
- [ ] Maintain 99.5 percent monthly uptime.
- [ ] Keep planned downtime below 4 hours per month.
- [ ] Support Chrome, Firefox, Safari, and Edge, latest 2 major versions.
- [ ] Support iOS 14+ and Android 8+.
- [ ] Test NVDA, JAWS, VoiceOver, and TalkBack.
- [ ] Use lazy loading and optimized static assets.
- [ ] Set up staging and test environments that mirror production.
- [ ] Add daily backups and disaster recovery plan.

## 24. AI and Virtual Assistant

- [ ] Only add AI assistant after privacy, escalation, and safety requirements are defined.
- [ ] Clearly tell users when they are interacting with AI.
- [ ] Offer "Speak to a human" fallback at all times.
- [ ] Provide non-AI alternatives for essential services.
- [ ] Use calm, non-clinical, non-judgmental conversational language.
- [ ] Add trauma-informed response protocols for crisis, self-harm, discrimination, and sensitive topics.
- [ ] Add clear privacy notice explaining chat data storage and use.
- [ ] Test AI outputs for fairness, accuracy, accessibility, and multilingual quality.

## 25. Current App Corrections Identified

- [ ] Replace placeholder and inconsistent labels: `NDIP`, `ND`, and "National Disability Information Portal" should match approved NIIAP naming.
- [ ] Fix Sinhala and Tamil strings that appear corrupted, mistranslated, or placeholder-like.
- [ ] Replace English-only desktop navigation labels with active localized labels.
- [ ] Add missing route pages for every navigation link.
- [ ] Remove or reduce animated pulse on crisis button for low-stress/reduced-motion compliance.
- [ ] Make TTS toggle actually read page content or connect to an approved TTS integration.
- [ ] Add dark high-contrast mode implementation, not only one contrast variant.
- [ ] Replace placeholder hotline/contact values with verified ministry-approved crisis/support contacts.
- [ ] Add Sri Lanka Government emblem and approved ministry identity.
- [ ] Update font stack to Noto Sans family for trilingual support.
- [ ] Add proper metadata/page titles for SEO and accessibility.
- [ ] Add actual content source model instead of hard-coded placeholder arrays for announcements, services, benefits, and contacts.

## 26. Launch Acceptance Checklist

- [ ] AC01: All Critical and High priority functional requirements FR001-FR055 implemented and pass UAT.
- [ ] AC02: WCAG 2.2 Level AA automated audit score is 95 percent or higher.
- [ ] AC03: Manual accessibility testing with PWD users reaches 90 percent or higher task completion.
- [ ] AC04: Core pages load in 3 seconds or less on 4G.
- [ ] AC05: Load test sustains 5,000 concurrent users with error rate not exceeding 0.1 percent.
- [ ] AC06: Penetration test shows no critical or high severity vulnerabilities.
- [ ] AC07: Sinhala, Tamil, and English display correctly across all pages and modules.
- [ ] AC08: Complaint submission, reference number generation, and tracking work end to end.
- [ ] AC09: CMS role-based access works for all four roles.
- [ ] AC10: Analytics dashboard shows usage and accessibility compliance metrics.
- [ ] AC11: Plain language review is complete for key welfare, rights, and application pages, with ETR versions in all three languages.
- [ ] AC12: Persistent `Get Help Now` button is visible and functional on every page, with active verified hotline links.
- [ ] AC13: Psychosocial disability module is functional, populated, and includes low-stress mode.
- [ ] AC14: Human rights and disability rights directory is fully populated with verified links.
- [ ] AC15: Advisory committee members are credited in the About section.

