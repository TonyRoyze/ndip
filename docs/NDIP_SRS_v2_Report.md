**NATIONAL DISABILITY INFORMATION PORTAL**

**Sri Lanka**

**Software Requirements Specification**

  -----------------------------------------------------------------------
  **Project Title**       National Digital Information Portal for Persons
                          with Disabilities (PWD)
  ----------------------- -----------------------------------------------
  **Document Type**       Software Requirements Specification (SRS)

  **Date**                2025/03/\_\_

  **Prepared For**        Ministry of Rural Development, Social Security
                          and Community Empowerment

  **Country**             Sri Lanka

  **Standard**            IEEE 830 / ISO/IEC 29148
  -----------------------------------------------------------------------

*Confidential --- Prepared for Ministry of Rural Development, Social
Security and Community Empowerment*

# **Contents** {#contents .TOC-Heading}

[1. Introduction [5](#introduction)](#introduction)

[1.1 Purpose [5](#purpose)](#purpose)

[1.2 Scope [5](#scope)](#scope)

[1.3 Definitions, Acronyms, and Abbreviations
[6](#definitions-acronyms-and-abbreviations)](#definitions-acronyms-and-abbreviations)

[1.4 Overview [6](#section)](#section)

[2. Overall System Description
[7](#overall-system-description)](#overall-system-description)

[2.1 Product Perspective
[7](#product-perspective)](#product-perspective)

[2.2 Product Functions --- Summary
[7](#product-functions-summary)](#product-functions-summary)

[2.3 User Classes and Characteristics
[8](#user-classes-and-characteristics)](#user-classes-and-characteristics)

[2.4 Operating Environment [9](#section-1)](#section-1)

[2.5 Assumptions and Dependencies
[9](#assumptions-and-dependencies)](#assumptions-and-dependencies)

[3. Functional Requirements
[10](#functional-requirements)](#functional-requirements)

[3.1 Public Portal --- Home & Navigation
[10](#public-portal-home-navigation)](#public-portal-home-navigation)

[3.2 Welfare Benefits Module [11](#section-4)](#section-4)

[3.3 Government Services Directory
[11](#government-services-directory)](#government-services-directory)

[3.4 Education, Employment & Assistive Technology Modules
[12](#education-employment-assistive-technology-modules)](#education-employment-assistive-technology-modules)

[3.5 Complaints & Grievance Management
[12](#complaints-grievance-management)](#complaints-grievance-management)

[3.6 CMS Admin Panel [13](#section-8)](#section-8)

[4. Non-Functional Requirements
[14](#non-functional-requirements)](#non-functional-requirements)

[4.1 Performance Requirements
[14](#performance-requirements)](#performance-requirements)

[4.2 Security Requirements
[14](#security-requirements)](#security-requirements)

[4.3 Usability & Accessibility Requirements
[15](#usability-accessibility-requirements)](#usability-accessibility-requirements)

[4.4 Maintainability & Scalability [16](#section-10)](#section-10)

[5. Proposed System Architecture
[17](#proposed-system-architecture)](#proposed-system-architecture)

[5.1 High-Level Architecture Overview
[17](#high-level-architecture-overview)](#high-level-architecture-overview)

[5.2 Integration Points [17](#integration-points)](#integration-points)

[6. Accessibility & Plain Language Requirements
[18](#accessibility-plain-language-requirements)](#accessibility-plain-language-requirements)

[6.1 WCAG 2.2 Compliance Checklist
[18](#wcag-2.2-compliance-checklist)](#wcag-2.2-compliance-checklist)

[6.2 Plain Language Standard [19](#section-15)](#section-15)

[6.3 Assistive Technology Features [20](#section-19)](#section-19)

[7. Psychosocial Disability Inclusion Requirements
[21](#psychosocial-disability-inclusion-requirements)](#psychosocial-disability-inclusion-requirements)

[7.1 Low-Stress User Interface
[21](#low-stress-user-interface)](#low-stress-user-interface)

[7.2 Cognitive Accessibility [22](#section-23)](#section-23)

[7.3 Mental Health and Psychosocial Support Section
[22](#mental-health-and-psychosocial-support-section)](#mental-health-and-psychosocial-support-section)

[7.4 Anonymous and Self-Help Resources
[22](#anonymous-and-self-help-resources)](#anonymous-and-self-help-resources)

[7.5 Online Peer Support and Community Spaces
[23](#section-26)](#section-26)

[7.6 Guided Service Navigation
[23](#guided-service-navigation)](#guided-service-navigation)

[7.7 Crisis Support Integration
[23](#crisis-support-integration)](#crisis-support-integration)

[7.8 Trauma-Informed Digital Design
[23](#trauma-informed-digital-design)](#trauma-informed-digital-design)

[7.9 AI Chat / Virtual Assistant --- Psychosocial Design Requirements
[24](#ai-chat-virtual-assistant-psychosocial-design-requirements)](#ai-chat-virtual-assistant-psychosocial-design-requirements)

[7.10 Caregiver and Family Support Resources
[24](#caregiver-and-family-support-resources)](#caregiver-and-family-support-resources)

[8. International Benchmark Analysis
[25](#international-benchmark-analysis)](#international-benchmark-analysis)

[8.1 Benchmark Overview [25](#benchmark-overview)](#benchmark-overview)

[8.2 Australia --- Disability Gateway (disabilitygateway.gov.au)
[25](#australia-disability-gateway-disabilitygateway.gov.au)](#australia-disability-gateway-disabilitygateway.gov.au)

[Key Design Feature: 10 Areas of Life Navigation
[26](#key-design-feature-10-areas-of-life-navigation)](#key-design-feature-10-areas-of-life-navigation)

[Accessibility Features Adopted in NDIP
[26](#accessibility-features-adopted-in-ndip)](#accessibility-features-adopted-in-ndip)

[8.3 United Kingdom --- GOV.UK Disability Services
(gov.uk/browse/disabilities)
[26](#united-kingdom-gov.uk-disability-services-gov.ukbrowsedisabilities)](#united-kingdom-gov.uk-disability-services-gov.ukbrowsedisabilities)

[Key Design Feature: Minimalist High-Clarity Design
[26](#key-design-feature-minimalist-high-clarity-design)](#key-design-feature-minimalist-high-clarity-design)

[GOV.UK Design Principles Adopted in NDIP
[26](#gov.uk-design-principles-adopted-in-ndip)](#gov.uk-design-principles-adopted-in-ndip)

[8.4 United Kingdom --- Community and Specialist Disability Portals
[27](#united-kingdom-community-and-specialist-disability-portals)](#united-kingdom-community-and-specialist-disability-portals)

[Key Features from UK Community Portals Adopted in NDIP
[28](#section-30)](#section-30)

[8.5 USA --- USAGov Disability Services (usa.gov/disability-services)
[28](#usa-usagov-disability-services-usa.govdisability-services)](#usa-usagov-disability-services-usa.govdisability-services)

[Key Design Feature: Benefit Finder Questionnaire Tool
[28](#key-design-feature-benefit-finder-questionnaire-tool)](#key-design-feature-benefit-finder-questionnaire-tool)

[Key Design Feature: Separate User Pathways
[28](#key-design-feature-separate-user-pathways)](#key-design-feature-separate-user-pathways)

[8.6 Canada --- CHRC Accessible Canada Portal (chrc-ccdp.gc.ca)
[28](#canada-chrc-accessible-canada-portal-chrc-ccdp.gc.ca)](#canada-chrc-accessible-canada-portal-chrc-ccdp.gc.ca)

[Key Design Feature: Embedded ASL/LSQ Sign Language Videos
[29](#key-design-feature-embedded-asllsq-sign-language-videos)](#key-design-feature-embedded-asllsq-sign-language-videos)

[Key Design Feature: Proactive Barrier Removal
[29](#key-design-feature-proactive-barrier-removal)](#key-design-feature-proactive-barrier-removal)

[8.7 Design Lessons Summary Table
[29](#design-lessons-summary-table)](#design-lessons-summary-table)

[9. Implementation Roadmap
[31](#implementation-roadmap)](#implementation-roadmap)

[9.1 Phased Implementation Plan
[31](#phased-implementation-plan)](#phased-implementation-plan)

[9.2 Key Milestones [31](#key-milestones)](#key-milestones)

[10. Acceptance Criteria
[32](#acceptance-criteria)](#acceptance-criteria)

[11. About the Portal & Advisory Committee
[33](#about-the-portal-advisory-committee)](#about-the-portal-advisory-committee)

[11.1 About the Portal [33](#about-the-portal)](#about-the-portal)

[11.2 Vision and Mission [33](#vision-and-mission)](#vision-and-mission)

[11.3 Role of the Ministry
[33](#role-of-the-ministry)](#role-of-the-ministry)

[11.4 Advisory Committee [34](#section-31)](#section-31)

[11.5 National Policy and Legal Framework
[35](#section-32)](#section-32)

[11.6 Partners and Stakeholders
[35](#partners-and-stakeholders)](#partners-and-stakeholders)

[12. Appendices [36](#appendices)](#appendices)

[Appendix A --- Full Website Sitemap
[36](#appendix-a-full-website-sitemap)](#appendix-a-full-website-sitemap)

[Appendix B --- Glossary of Disability Types
[39](#appendix-b-glossary-of-disability-types)](#appendix-b-glossary-of-disability-types)

[Appendix C --- Regulatory and Reference Framework
[40](#section-35)](#section-35)

[Appendix D --- UK Community Portal Reference List
[41](#section-39)](#section-39)

# 1. Introduction

## 1.1 Purpose

This Software Requirements Specification (SRS) document defines the
functional and non-functional requirements for the National Digital
Information Portal for Persons with Disabilities (PWD) in Sri Lanka. The
document is prepared in accordance with IEEE 830 and ISO/IEC 29148
standards and serves as the primary reference for development, testing,
and acceptance of the proposed system.

This document is intended to be presented to potential technology
partners, development vendors, and government stakeholders as a formal
proposal for building and deploying the platform. This Version 2.0
incorporates additional guidelines on psychosocial disability inclusion,
plain language standards, human rights and disability rights
integration, United Kingdom disability portal benchmarks, and an
expanded advisory committee acknowledgement section.

## 1.2 Scope

The system, titled the National Disability Information Portal (NDIP), is
a centralized, accessible web-based platform that provides comprehensive
information, services, and support resources for persons with
disabilities (PWDs) in Sri Lanka. It will be owned and maintained by the
Ministry of Rural Development, Social Security and Community
Empowerment.

**System Boundaries --- In Scope:**

-   Centralized disability welfare information aggregation

-   Government services directory with geographic filtering

-   Healthcare, education, employment, and legal service modules

-   Accessible user interface compliant with WCAG 2.2 AA

-   Multilingual support: Sinhala, Tamil, and English

-   Citizen feedback, complaint, and grievance management

-   Admin panel for content management (CMS)

-   Analytics dashboard for service usage monitoring

-   Psychosocial disability-specific features and dedicated mental
    health support section

-   Plain language content standard across all modules and all three
    languages

-   Human rights and disability rights framework integration

-   Crisis support integration with emergency mental health resources

## 1.3 Definitions, Acronyms, and Abbreviations

  -----------------------------------------------------------------------
  **Acronym /     **Definition**
  Term**          
  --------------- -------------------------------------------------------
  **PWD**         Persons with Disabilities

  **NDIP**        National Disability Information Portal

  **SRS**         Software Requirements Specification

  **WCAG**        Web Content Accessibility Guidelines

  **CMS**         Content Management System

  **UNCRPD**      United Nations Convention on the Rights of Persons with
                  Disabilities

  **API**         Application Programming Interface

  **NFR**         Non-Functional Requirement

  **FR**          Functional Requirement

  **UI/UX**       User Interface / User Experience

  **MFA**         Multi-Factor Authentication

  **PSD**         Psychosocial Disability

  **ETR**         Easy-to-Read

  **SL**          Sign Language (Sri Lanka Sign Language)

  **TTS**         Text-to-Speech

  **CRPD**        Convention on the Rights of Persons with Disabilities
  -----------------------------------------------------------------------

## 

## 1.4 Overview

This document is structured as follows:

-   Section 1 --- Introduction and document scope

-   Section 2 --- Overall System Description

-   Section 3 --- Functional Requirements

-   Section 4 --- Non-Functional Requirements

-   Section 5 --- Proposed System Architecture

-   Section 6 --- Accessibility and Plain Language Requirements

-   Section 7 --- Psychosocial Disability Inclusion Requirements

-   Section 8 --- International Benchmark Analysis

-   Section 9 --- Implementation Roadmap

-   Section 10 --- Acceptance Criteria

-   Section 11 --- About the Portal and Advisory Committee

-   Section 12 --- Appendices

# 2. Overall System Description

## 2.1 Product Perspective

The NDIP is a new standalone product that complements and integrates
with existing government digital infrastructure in Sri Lanka. It acts as
an aggregation and presentation layer, drawing information from multiple
government agencies while providing a unified, citizen-friendly
interface. The system does not replace any existing system but serves as
a complementary national resource portal dedicated exclusively to
disability services and information.

## 2.2 Product Functions --- Summary

  ----------------------------------------------------------------------------
  **ID**     **Feature**         **Description**
  ---------- ------------------- ---------------------------------------------
  **F-01**   Welfare Benefits    Provides searchable access to all government
             Information Portal  welfare programs, eligibility criteria,
                                 required documents, and application guides.
                                 Plain language and Easy-to-Read (ETR)
                                 versions available for all key pages.

  **F-02**   Government Services Searchable and filterable directory of
             Directory           government institutions, NGOs, rehabilitation
                                 centers, and service providers, with
                                 geographic filtering by province and
                                 district.

  **F-03**   Healthcare &        Information on rehabilitation hospitals,
             Rehabilitation      therapy services, mental health services,
             Module              community-based rehabilitation, and
                                 psychosocial support programs.

  **F-04**   Education & Skills  Inclusive education programs, scholarships,
             Development         vocational training centers, and digital
                                 literacy resources.

  **F-05**   Employment &        Job board for inclusive employment, employer
             Entrepreneurship    resources, inclusive hiring guidelines,
                                 microfinance, and self-employment support.

  **F-06**   Assistive           Catalog of assistive devices, suppliers,
             Technology          government subsidies, and emerging assistive
             Directory           technologies.

  **F-07**   Rights & Legal      National legislation, UNCRPD, human rights
             Information         framework, disability rights referrals,
                                 anti-discrimination policy, and legal aid
                                 services.

  **F-08**   Community & Support Database of NGOs, advocacy groups, caregiver
             Networks            resources, peer support communities, and
                                 volunteer opportunities.

  **F-09**   Complaints &        Integrated complaint submission, tracking,
             Grievance           and resolution system with automated email
             Management          notifications and unique reference numbers.

  **F-10**   Multilingual        Full portal available in Sinhala, Tamil, and
             Support             English, treated as equal first-class
                                 languages, with seamless language switching.

  **F-11**   Accessibility Tools Screen reader support, high contrast mode,
             Integration         text-to-speech, sign language videos,
                                 keyboard navigation, and low-stress interface
                                 mode.

  **F-12**   CMS Admin Panel     Role-based content management system for
                                 authorized ministry and agency staff, with
                                 content approval workflow and audit logging.

  **F-13**   Analytics Dashboard Usage statistics, content performance
                                 metrics, complaint resolution tracking, and
                                 accessibility compliance reporting.

  **F-14**   Psychosocial        Dedicated mental health section, crisis
             Disability Support  support integration, peer support networks,
             Module              anonymous self-help resources, and
                                 trauma-informed design.

  **F-15**   Plain Language      All content written to plain language
             Content System      standards; ETR versions for key documents;
                                 plain language review step in CMS workflow.

  **F-16**   Citizen Account     User registration, benefit application
             (Phase 2)           tracking, notification preferences,
                                 appointment reminders, and saved services.
  ----------------------------------------------------------------------------

## 2.3 User Classes and Characteristics

  -------------------------------------------------------------------------------
  **User Class**    **Description**                                **Priority**
  ----------------- ---------------------------------------------- --------------
  **Citizens with   Primary users seeking welfare, health,         High
  Disabilities**    education, employment, and legal information.  
                    May use assistive technologies. Includes       
                    persons with psychosocial disabilities         
                    requiring low-stress, trauma-informed          
                    navigation.                                    

  **Families &      Secondary users researching support on behalf  High
  Caregivers**      of PWDs. Need comprehensive, plain language    
                    content. Includes caregivers of persons with   
                    psychosocial disabilities who may themselves   
                    require mental health support resources.       

  **Government      Ministry and agency staff managing service     Medium
  Officers**        information through CMS. Require role-based    
                    admin access and plain language training.      

  **NGOs &          Advocacy and support organizations listed in   Medium
  Organizations**   the directory and accessing platform           
                    resources.                                     

  **Employers**     Organizations exploring inclusive hiring,      Low
                    accessing guidelines and employment quota      
                    information.                                   

  **Researchers &   Accessing statistics, publications, and        Low
  Policymakers**    analytics for evidence-based policy            
                    development.                                   
  -------------------------------------------------------------------------------

## 

## 

## 

## 2.4 Operating Environment

The system shall operate in the following environments:

-   Web browsers: Chrome, Firefox, Safari, Edge (latest 2 major
    versions)

-   Mobile devices: iOS 14+ and Android 8+

-   Screen readers: NVDA, JAWS, VoiceOver (iOS/macOS), TalkBack
    (Android)

-   Minimum network: 2G/3G compatible with graceful degradation for
    low-bandwidth environments

-   Server: Cloud or on-premise hosting within Sri Lanka (preferred for
    data sovereignty)

## 2.5 Assumptions and Dependencies

-   Government agencies will appoint content officers to provide and
    regularly update information on the portal

-   The Ministry will provide required infrastructure and domain hosting

-   Integration with National Digital Identity system (future phase)
    assumes availability of government APIs

-   All content shall be reviewed and approved by designated ministry
    officials before publication

-   Plain language editors or reviewers will be appointed for all three
    languages --- Sinhala, Tamil, and English

-   Advisory committee members representing all disability communities,
    including psychosocial disabilities, will be engaged throughout
    development and post-launch

# 3. Functional Requirements

Each functional requirement is assigned a unique identifier, a priority
level (Critical / High / Medium / Low), and a description. All Critical
and High priority requirements must be implemented and pass User
Acceptance Testing (UAT) before the portal may be accepted.

## 3.1 Public Portal --- Home & Navigation

  -----------------------------------------------------------------------------------
  **ID**      **Feature**      **Description**                         **Priority**
  ----------- ---------------- --------------------------------------- --------------
  **FR001**   Smart Search     The system shall provide a global       Critical
                               search bar capable of searching across  
                               all modules by keyword, disability      
                               type, location, and service category.   
                               Results shall be returned within 2      
                               seconds.                                

  **FR002**   Quick Access     The home page shall display             Critical
              Panel            quick-access cards for: Disability      
                               Benefits, Apply for Services, Assistive 
                               Devices, Employment Opportunities,      
                               Mental Health Support, and Complaints / 
                               Feedback.                               

  **FR003**   Announcements    The portal shall display a rotating     High
              Widget           announcements widget showing latest     
                               government news, program updates, and   
                               events relevant to persons with         
                               disabilities.                           

  **FR004**   Accessibility    A persistent accessibility toolbar      Critical
              Settings Bar     shall be available site-wide providing: 
                               font size adjustment, high contrast     
                               mode toggle, text-to-speech toggle,     
                               keyboard navigation indicator, and      
                               low-stress interface mode toggle.       

  **FR005**   Language         The portal shall support Sinhala,       Critical
              Switcher         Tamil, and English. Language selection  
                               shall persist across sessions. All      
                               three languages shall be treated as     
                               equally primary.                        

  **FR006**   Emergency        A prominently displayed emergency       High
              Information      information section shall appear on the 
              Banner           home page, showing disability hotlines, 
                               crisis contacts, and critical           
                               resources.                              

  **FR007**   Crisis Support   A persistent \'Get Help Now\' button    Critical
              Button           shall be visible on all pages of the    
                               portal, linking directly to: emergency  
                               mental health contacts, suicide         
                               prevention hotlines, immediate support  
                               services, and 24/7 counselling          
                               services.                               
  -----------------------------------------------------------------------------------

## 

## 

## 

## 

## 3.2 Welfare Benefits Module

  -----------------------------------------------------------------------------------
  **ID**      **Feature**      **Description**                         **Priority**
  ----------- ---------------- --------------------------------------- --------------
  **FR010**   Benefit Listings The system shall list all available     Critical
                               disability welfare benefits including   
                               allowances, housing, transport,         
                               assistive devices, and social security  
                               programs, with each benefit on a        
                               dedicated single-topic page.            

  **FR011**   Eligibility      Each benefit page shall include a       Critical
              Checker          structured eligibility criteria section 
                               covering age, disability type, income   
                               thresholds, and other requirements. A   
                               guided questionnaire tool shall help    
                               users identify eligible benefits.       

  **FR012**   Document         Each benefit shall display a required   High
              Checklist        documents checklist in a downloadable   
                               format, in plain language, in all three 
                               languages.                              

  **FR013**   Application      Step-by-step application process guides High
              Guide            shall be available for each benefit,    
                               with links to online forms and          
                               downloadable PDF forms. Guides shall be 
                               produced in plain language and ETR      
                               formats.                                

  **FR014**   Benefit Filter   Users shall be able to filter benefits  High
                               by disability type, age group,          
                               location, and benefit category.         
  -----------------------------------------------------------------------------------

## 3.3 Government Services Directory

  -----------------------------------------------------------------------------------
  **ID**      **Feature**      **Description**                         **Priority**
  ----------- ---------------- --------------------------------------- --------------
  **FR020**   Services         A searchable directory of all           Critical
              Directory        government ministries, departments,     
                               provincial offices, rehabilitation      
                               centers, and healthcare providers       
                               relevant to PWDs.                       

  **FR021**   Geographic       Directory entries shall be filterable   High
              Filter           by province, district, and divisional   
                               secretariat.                            

  **FR022**   Geo Service Map  An interactive map shall display        High
                               service locations --- hospitals,        
                               centers, NGOs, and training centers --- 
                               with clickable pins showing contact     
                               details.                                

  **FR023**   Contact Details  Each directory entry shall include:     Critical
                               organization name, address, telephone,  
                               email, website link, and hours of       
                               operation.                              

  **FR024**   NGO Database     A separate sub-directory shall list     Medium
                               NGOs, advocacy groups, and community    
                               organizations with filtering by service 
                               type.                                   

  **FR025**   Human Rights &   Section 4.2 of the portal shall include High
              Disability       a dedicated sub-section linking to      
              Rights Directory disability rights bodies, the Human     
                               Rights Commission of Sri Lanka, UNCRPD  
                               reference materials, and legal referral 
                               services. Disability rights shall be    
                               surfaced as a top-level navigation      
                               item, not a sub-category.               
  -----------------------------------------------------------------------------------

## 3.4 Education, Employment & Assistive Technology Modules

  -----------------------------------------------------------------------------------
  **ID**      **Feature**      **Description**                         **Priority**
  ----------- ---------------- --------------------------------------- --------------
  **FR030**   Education        Listings of special education           High
              Listings         institutions, inclusive schools,        
                               scholarships, and vocational training   
                               centers with eligibility and            
                               application information.                

  **FR031**   Job Board        A job listing board where employers can High
                               post inclusive employment               
                               opportunities. Filterable by job type,  
                               location, and disability accommodation  
                               offered.                                

  **FR032**   Employer         Dedicated section for employers with    Medium
              Resources        inclusive hiring guidelines, government 
                               employment quota requirements, and      
                               workplace accessibility standards.      

  **FR033**   Assistive Tech   A categorized catalog of assistive      High
              Catalog          devices --- mobility, vision, hearing,  
                               and communication --- with supplier     
                               information and available government    
                               subsidies.                              

  **FR034**   Technology       Curated content on emerging assistive   Low
              Innovations Feed technologies and research updates       
                               relevant to persons with disabilities   
                               in Sri Lanka.                           
  -----------------------------------------------------------------------------------

## 3.5 Complaints & Grievance Management

  -----------------------------------------------------------------------------------
  **ID**      **Feature**      **Description**                         **Priority**
  ----------- ---------------- --------------------------------------- --------------
  **FR040**   Complaint        Users shall be able to submit           Critical
              Submission       complaints related to welfare services, 
                               accessibility issues, discrimination,   
                               and service quality.                    

  **FR041**   Unique Reference Each submitted complaint shall receive  Critical
              Number           a unique reference number for tracking  
                               purposes.                               

  **FR042**   Complaint        Users shall be able to track the status High
              Tracking         of their complaint using the reference  
                               number without requiring a user         
                               account.                                

  **FR043**   Email            Automated email notifications shall be  High
              Notifications    sent to the complainant upon            
                               submission, status update, and          
                               resolution.                             

  **FR044**   Admin Complaint  Authorized officials shall have a       Critical
              Dashboard        dashboard to view, assign, respond to,  
                               and close complaints with a full audit  
                               trail.                                  

  **FR045**   Service Request  A separate service request form shall   Medium
              Form             allow users to request information or   
                               assistance outside of the formal        
                               complaints process.                     
  -----------------------------------------------------------------------------------

## 

## 

## 3.6 CMS Admin Panel

  -----------------------------------------------------------------------------------
  **ID**      **Feature**      **Description**                         **Priority**
  ----------- ---------------- --------------------------------------- --------------
  **FR050**   Role-Based       CMS shall support role-based access     Critical
              Access           with the following roles: Super Admin,  
                               Ministry Editor, Agency Editor, and     
                               Moderator.                              

  **FR051**   Content CRUD     Authorized users shall be able to       Critical
                               create, read, update, archive, and      
                               delete content across all modules.      

  **FR052**   Content Approval Content published by Agency Editors     High
              Workflow         shall require approval from Ministry    
                               Editors before going live.              

  **FR053**   Audit Log        All CMS actions --- create, edit,       High
                               delete, approve --- shall be logged     
                               with timestamp, user ID, and action     
                               type.                                   

  **FR054**   Multi-language   CMS shall allow managing content        Critical
              Content          separately per language --- Sinhala,    
              Management       Tamil, English --- with translation     
                               status indicators.                      

  **FR055**   Plain Language   CMS shall include a plain language      High
              Compliance Check review flag that content editors must   
                               confirm before submitting content for   
                               approval. A plain language checklist    
                               shall be embedded in the content editor 
                               interface.                              
  -----------------------------------------------------------------------------------

# 4. Non-Functional Requirements

## 4.1 Performance Requirements

  ---------------------------------------------------------------------------
  **ID**       **Requirement**        **Specification**
  ------------ ---------------------- ---------------------------------------
  **NFRP01**   Page Load Time         All public portal pages shall load
                                      within 3 seconds on a standard 4G
                                      mobile connection.

  **NFRP02**   Concurrent Users       The system shall support a minimum of
                                      5,000 concurrent users without
                                      performance degradation.

  **NFRP03**   Search Response        Search results shall be returned within
                                      2 seconds for any query across all
                                      modules.

  **NFRP04**   CMS Performance        CMS admin operations --- save, publish,
                                      approve --- shall complete within 5
                                      seconds.

  **NFRP05**   Uptime                 The system shall maintain 99.5% uptime
                                      measured monthly. Planned downtime
                                      shall not exceed 4 hours per month.
  ---------------------------------------------------------------------------

## 4.2 Security Requirements

The Government Services Directory (Section 4 of the portal) shall
include a dedicated sub-section for Disability Rights and Human Rights.
Disability rights and human rights are fundamental to the purpose of
this portal and shall be surfaced as top-level navigation items, not
buried as sub-categories. This reflects the principle that access to
rights information is as essential as access to welfare benefits.

  ---------------------------------------------------------------------------
  **ID**       **Requirement**        **Specification**
  ------------ ---------------------- ---------------------------------------
  **NFRS01**   Data Encryption        All data in transit shall be encrypted
                                      using TLS 1.2 or higher. Sensitive
                                      stored data shall use AES-256
                                      encryption.

  **NFRS02**   Authentication         Admin portal shall require Multi-Factor
                                      Authentication (MFA). Public users
                                      shall authenticate via OTP or email
                                      verification for account features.

  **NFRS03**   OWASP Compliance       The system shall be developed and
                                      tested against the OWASP Top 10
                                      vulnerability list.

  **NFRS04**   Session Management     Admin sessions shall timeout after 30
                                      minutes of inactivity. Public user
                                      sessions after 2 hours.

  **NFRS05**   PDPA Compliance        All personal data collection and
                                      processing shall comply with the Sri
                                      Lanka Personal Data Protection Act
                                      (PDPA) 2022.

  **NFRS06**   Penetration Testing    The system shall undergo third-party
                                      penetration testing prior to launch and
                                      annually thereafter.
  ---------------------------------------------------------------------------

## 4.3 Usability & Accessibility Requirements

  ----------------------------------------------------------------------------
  **ID**       **Requirement**        **Specification**
  ------------ ---------------------- ----------------------------------------
  **NFRU01**   WCAG 2.2 Compliance    All public-facing pages shall conform to
                                      WCAG 2.2 Level AA as a minimum
                                      requirement.

  **NFRU02**   Screen Reader          The portal shall be fully navigable
               Compatibility          using NVDA, JAWS (Windows), VoiceOver
                                      (macOS/iOS), and TalkBack (Android).

  **NFRU03**   Keyboard Navigation    All interactive elements shall be
                                      accessible via keyboard-only navigation
                                      with clearly visible focus indicators.

  **NFRU04**   Colour Contrast        Text colour contrast ratio shall meet a
                                      minimum of 4.5:1 for normal text and 3:1
                                      for large text.

  **NFRU05**   Responsive Design      The portal shall be fully responsive
                                      across viewport widths from 320px to 4K
                                      resolution.

  **NFRU06**   Sign Language Support  Key informational content shall include
                                      embedded Sri Lanka Sign Language (SL)
                                      video supplements on all key welfare
                                      benefit, rights, and application guide
                                      pages.

  **NFRU07**   Multilingual           All user-facing content shall be
                                      available in Sinhala, Tamil, and English
                                      as equal first-class languages. Language
                                      preference shall persist in the browser
                                      session.

  **NFRU08**   Plain Language         All content shall be written in plain
               Standard               language: clear, simple, free of jargon,
                                      and understandable by the target
                                      audience on first reading. Easy-to-Read
                                      (ETR) versions shall be provided for all
                                      key welfare, rights, and application
                                      documents. Plain language applies across
                                      all three languages.

  **NFRU09**   Cognitive              The portal shall support users with
               Accessibility          cognitive and psychosocial disabilities
                                      through: short content blocks,
                                      step-by-step guided navigation, visual
                                      guides and icons alongside text, and a
                                      distraction-free interface option.

  **NFRU10**   Low-Stress Interface   A simplified, low-stimulation interface
               Mode                   mode shall be available, minimizing
                                      graphics, animations, and visual
                                      complexity, specifically designed for
                                      users with psychosocial disabilities or
                                      cognitive impairments.
  ----------------------------------------------------------------------------

## 

## 

## 

## 

## 

## 4.4 Maintainability & Scalability

-   The system shall be built using modular architecture enabling
    independent updates to each module without system-wide downtime.

-   The codebase shall adhere to documented coding standards with inline
    comments and full API documentation.

-   The infrastructure shall be horizontally scalable to accommodate
    traffic growth of up to 10x current projections.

-   A staging and test environment shall mirror production for
    pre-deployment validation of all updates.

# 5. Proposed System Architecture

## 5.1 High-Level Architecture Overview

The NDIP shall follow a three-tier web architecture with a decoupled
front-end and back-end, enabling independent scaling, maintenance, and
technology upgrades. The architecture prioritizes accessibility,
multilingual support, and low-bandwidth compatibility.

  ---------------------------------------------------------------------------
  **Layer**            **Components**
  -------------------- ------------------------------------------------------
  **Presentation       Responsive web application (React.js / Next.js);
  Layer**              Mobile-optimized design; Accessibility-first component
                       library; Multilingual i18n framework; Low-stress UI
                       mode; ETR content rendering

  **Application        RESTful API Gateway; CMS Backend (Headless CMS);
  Layer**              Authentication and Authorization Service; Search
                       Engine (Elasticsearch); Notification Service
                       (Email/SMS); Analytics Engine; Plain Language
                       Compliance Module; Crisis Referral Service

  **Data Layer**       Relational Database (PostgreSQL); File/Document
                       Storage (S3-compatible); Cache Layer (Redis); Audit
                       Log Store; Search Index (Elasticsearch)

  **Infrastructure**   Cloud hosting (AWS/Azure/local data center); CDN for
                       static assets; Load balancer with auto-scaling;
                       SSL/TLS certificate management; Automated daily
                       backup; Disaster recovery plan
  ---------------------------------------------------------------------------

## 5.2 Integration Points

  -----------------------------------------------------------------------------
  **Integration**       **Purpose**                              **Protocol**
  --------------------- ---------------------------------------- --------------
  National Digital      Integration for Phase 2 citizen account  OAuth 2.0
  Identity              authentication                           

  Government Grievance  Bi-directional complaint forwarding and  REST API
  Platform              status synchronisation                   

  Google Maps /         Geo Service Finder for interactive       Maps API
  OpenStreetMap         service location mapping                 

  SMS Gateway           Complaint tracking notifications and     SMS API
                        emergency alerts                         

  Email Service         Automated email notifications for        SMTP / API
  Provider              complaints and account activity          

  Analytics Platform    Usage tracking and accessibility         GA4 / Matomo
                        compliance reporting                     

  Crisis Helpline       Direct referral integration with mental  REST API
  Systems               health hotlines                          
  -----------------------------------------------------------------------------

# 6. Accessibility & Plain Language Requirements

Accessibility is a core design principle of the NDIP, not an
afterthought. The platform will be designed from the ground up to serve
users with a wide range of disabilities --- physical, sensory,
cognitive, and psychosocial. This section covers WCAG 2.2 compliance,
the plain language standard, and built-in assistive technology features.

## 6.1 WCAG 2.2 Compliance Checklist

  ----------------------------------------------------------------------------
  **Principle**    **Criterion**                                  **Status**
  ---------------- ---------------------------------------------- ------------
  Perceivable      Alt text for all images and icons              Required

  Perceivable      Captions for all video content                 Required

  Perceivable      Audio descriptions for all informational       Required
                   videos                                         

  Perceivable      Text resize to 200% without loss of content or Required
                   functionality                                  

  Operable         All functionality operable via keyboard        Required

  Operable         Focus indicators visible and high contrast     Required

  Operable         No content that flashes more than 3 times per  Required
                   second                                         

  Operable         Skip navigation links provided on all pages    Required

  Understandable   Language of page and components correctly      Required
                   declared in HTML                               

  Understandable   Error messages descriptive and actionable in   Required
                   plain language                                 

  Understandable   Labels associated with all form fields         Required

  Robust           Valid, semantic HTML5 structure throughout     Required

  Robust           ARIA roles and attributes correctly            Required
                   implemented                                    

  Robust           Compatible with current assistive technologies Required
  ----------------------------------------------------------------------------

## 

## 

## 

## 

## 6.2 Plain Language Standard

Plain language is a mandatory accessibility requirement for the NDIP. It
ensures that content is fully usable by people with learning
disabilities, low literacy, cognitive impairments, and all users
encountering complex government information for the first time. This
requirement was identified by the portal\'s advisory committee as
essential, particularly for persons with psychosocial and intellectual
disabilities.

Definition (PlainLanguage.gov): Plain language is communication that is
clear and easy to understand for your target audience, regardless of the
medium used to deliver it. It is communication your audience can
understand the first time they read or hear it.

**Plain Language Requirements for All NDIP Content:**

-   All content published on the portal shall be written in plain
    language across Sinhala, Tamil, and English

-   Sentences shall be short and direct; technical or legal jargon shall
    be avoided or explained in plain terms

-   Active voice shall be used wherever possible throughout all content

-   Headings and subheadings shall clearly describe the content that
    follows

-   Easy-to-Read (ETR) versions shall be produced for all key welfare
    benefit pages, eligibility guides, rights information pages, and
    application process documents

-   ETR versions shall use simple vocabulary, short sentences, and
    visual supports such as icons and images

-   All content editors in the CMS shall complete plain language
    training before being granted publishing rights

-   A plain language review step shall be included in the content
    approval workflow (FR-055)

-   The plain language standard applies equally to automated
    notifications, error messages, and form labels

## 

## 

## 

## 

## 6.3 Assistive Technology Features

**Built-in Accessibility Tools:**

-   Font size adjustment --- three levels: default, large, and
    extra-large --- persistent per session

-   High contrast mode --- toggleable with two variants: dark on light
    and light on dark

-   Text-to-speech --- compatible with browser-native TTS and all major
    screen readers

-   Sign language video supplements --- embedded for all key content
    pages

-   Voice search --- microphone input for the global smart search
    function

-   Reading guide cursor tool for users with dyslexia or cognitive
    impairments

-   Easy-to-Read (ETR) versions of all complex documents and eligibility
    guides

-   Distraction-free, low-stress interface mode for users with
    psychosocial disabilities

-   Step-by-step guided navigation mode with clear progress indicators

# 7. Psychosocial Disability Inclusion Requirements

This section defines requirements for the NDIP to be fully inclusive of
persons with psychosocial disabilities. Psychosocial disabilities arise
from mental health conditions --- including depression, anxiety,
post-traumatic stress disorder (PTSD), bipolar disorder, schizophrenia,
and other conditions --- that significantly impact a person\'s daily
functioning and participation in society.

These requirements were developed from expert input provided to the NDIP
development team by the Focal Point for Sri Lanka at Transforming
Communities for Inclusion --- Global (TCI-Global). They reflect
international best practices in psychosocial inclusion in digital
government services and are grounded in the principle that persons with
psychosocial disabilities have equal rights to accessible, dignified,
and non-stigmatizing information and services.

Persons with psychosocial disabilities may face: difficulty
concentrating or processing large amounts of information; sensory
overload or anxiety when navigating complex websites; challenges with
memory and organization affecting ability to track applications; stigma
preventing them from seeking help through formal channels; and trauma
from prior experiences with institutional systems. All design decisions
in this section respond directly to these realities.

## 7.1 Low-Stress User Interface

Complex or visually busy websites can trigger anxiety and cognitive
overload for persons with psychosocial disabilities. The NDIP shall
include a dedicated low-stress interface mode with the following
features:

-   Distraction-free interface option with minimal graphics and
    animations

-   Simplified navigation mode with reduced menu complexity

-   Step-by-step guided service access, removing the need for users to
    navigate large menus independently

-   Clear progress indicators for all multi-step application and service
    processes

-   Short content blocks instead of long paragraphs, throughout all
    sections of the portal

## 

## 

## 

## 7.2 Cognitive Accessibility

Information shall be presented in formats that are easier for people
with cognitive and psychosocial conditions to process. This extends the
plain language requirement (Section 6.2) with additional cognitive
accessibility measures:

-   Easy-to-Read (ETR) versions of all key content, using simple
    vocabulary and visual supports

-   Plain language explanations of all welfare benefits, rights, and
    application processes

-   Short summaries at the top of complex policy and legislative pages

-   Visual guides and icons placed alongside text instructions
    throughout the portal

-   Short explainer videos (under 3 minutes) for all key services and
    application processes

## 7.3 Mental Health and Psychosocial Support Section

A dedicated Mental Health and Psychosocial Support section shall be
created within the Healthcare and Rehabilitation module. This section
shall include:

-   Directory of mental health services --- government and private ---
    with contact details and geographic filtering

-   Community-based psychosocial support programs across provinces

-   Peer support networks and details of recovery communities

-   Recovery and self-help resources accessible without user
    registration

-   Crisis support contacts and hotlines, displayed prominently

-   Counselling hotlines --- national and regional --- with operating
    hours

## 7.4 Anonymous and Self-Help Resources

People with psychosocial disabilities often face stigma and may prefer
anonymous access to support rather than formal service pathways. The
portal shall provide:

-   Self-help guides accessible without user registration or login

-   A mental health resource library with downloadable materials

-   Stress management tools and guided exercises

-   Wellbeing guides and self-care tips

-   Peer stories and recovery experiences that normalize help-seeking

## 

## 

## 

## 

## 7.5 Online Peer Support and Community Spaces

Social isolation is common among persons with psychosocial disabilities.
To address this, the portal shall provide or directly link to:

-   Peer support groups --- both online and in-person --- with location
    and contact information

-   Moderated online support communities

-   Recovery storytelling platforms or curated content

Note: Any online community features integrated into the portal shall
include robust moderation and safeguarding measures to protect
vulnerable users from harmful content or interactions.

## 7.6 Guided Service Navigation

Bureaucratic systems can be overwhelming for persons with mental health
conditions. To reduce this barrier, the portal shall include a
question-based guided navigation feature:

-   An entry prompt --- \'What do you need help with today?\' ---
    displayed prominently on the homepage and within the Mental Health
    section

-   User-selectable options leading to: Income support; Mental health
    support; Assistive devices; Employment support; Legal help; Housing
    assistance

-   The system shall automatically guide users to the most relevant
    service or content based on their selections, eliminating the need
    to navigate complex menu structures

## 7.7 Crisis Support Integration

Crisis response information is an essential safety feature of the NDIP.
The portal shall implement the following:

-   A persistent \'Get Help Now\' button (FR-007) visible in the header
    or footer on every page of the portal

-   Clicking the button shall display, without navigating away from the
    current page: emergency mental health contacts; suicide prevention
    hotlines; immediate support services; 24/7 counselling services

-   Crisis support contacts shall be verified and updated at least every
    6 months by the CMS administrator

-   The \'Get Help Now\' button shall meet WCAG 2.2 AA requirements for
    visibility, colour contrast, and keyboard accessibility

## 7.8 Trauma-Informed Digital Design

People with psychosocial disabilities may have experienced trauma ---
including from institutional settings, discrimination, or adverse life
events. The portal shall follow trauma-informed digital design
principles throughout:

-   Respectful, non-clinical, non-stigmatizing language in all content
    and automated messages

-   No use of terms that perpetuate stigma around mental health
    conditions

-   Privacy protection: users are never required to disclose disability
    type to access general information

-   User control over information sharing at every stage of interaction

-   Option to exit any multi-step process quickly without losing
    progress

-   Non-judgmental tone in all automated responses, error messages, and
    notifications

## 7.9 AI Chat / Virtual Assistant --- Psychosocial Design Requirements

The planned AI Chat Assistant (future phase) shall be designed with
psychosocial inclusion as a core design principle, not an afterthought:

-   Calm, non-clinical conversational language throughout all
    interactions

-   Step-by-step guidance with the user in control at each stage

-   Non-judgmental responses to all queries, including sensitive mental
    health topics

-   Option to connect to a human support worker at any point in the
    conversation

-   Trauma-informed response protocols for sensitive topics such as
    crisis, self-harm, and discrimination

-   Clear privacy notice explaining how chat data is stored and used

## 7.10 Caregiver and Family Support Resources

Caring for a person with a psychosocial disability can create
significant and sustained stress for family members and caregivers. The
portal shall include a dedicated caregiver support sub-section that
covers:

-   Practical guidance for families of persons with psychosocial
    disabilities --- understanding conditions, supporting recovery,
    navigating services

-   Caregiver mental health and self-care resources, including
    information on preventing caregiver burnout

-   Information on supporting a person\'s recovery journey without
    enabling dependence

-   Directory of family support groups, both in-person and online

-   Information on caregiver allowances, financial support, and respite
    care services available in Sri Lanka

# 8. International Benchmark Analysis

The NDIP design draws from internationally recognized government
disability portals and disability community platforms. Each platform was
reviewed directly for its design approach, content architecture,
accessibility features, and user experience patterns. The following
analysis documents specific, real-world features observed on each
platform and maps them directly to requirements adopted in this
specification.

## 8.1 Benchmark Overview

  -----------------------------------------------------------------------------------
  **Country**   **Platform**        **URL**                       **Signature
                                                                  Features**
  ------------- ------------------- ----------------------------- -------------------
  Australia     Disability Gateway  disabilitygateway.gov.au      10 Areas of Life
                                                                  navigation; TTS
                                                                  (Readspeaker);
                                                                  Auslan sign
                                                                  language; 1800
                                                                  helpline; local
                                                                  service finder;
                                                                  multi-format
                                                                  documents

  United        GOV.UK Disability   gov.uk/browse/disabilities    Minimalist
  Kingdom       Services                                          single-topic pages;
                                                                  Benefits, Rights,
                                                                  Work sections;
                                                                  GOV.UK Design
                                                                  System; plain
                                                                  language standard;
                                                                  bilingual (Welsh)

  USA           USAGov Disability   usa.gov/disability-services   Benefit Finder
                Services                                          questionnaire;
                                                                  separate caregiver
                                                                  and individual
                                                                  pathways; employer
                                                                  resources; SSDI/SSI
                                                                  navigation

  Canada        CHRC Accessible     chrc-ccdp.gc.ca               Embedded ASL/LSQ
                Canada Portal                                     sign language
                                                                  videos; Accessible
                                                                  Canada Act
                                                                  framework;
                                                                  barrier-removal
                                                                  navigation;
                                                                  bilingual

  England       Scope, Able Here,   scope.org.uk; ablehere.com;   Peer support
  (Community    Disability Rights   disabilityrightsuk.org;       communities;
  Portals)      UK, RNIB, Mencap,   rnib.org.uk; mencap.org.uk;   specialist
                AccessAble          accessable.co.uk              disability portals;
                                                                  family hubs; venue
                                                                  accessibility
                                                                  guides; rights and
                                                                  career resources
  -----------------------------------------------------------------------------------

## 8.2 Australia --- Disability Gateway (disabilitygateway.gov.au)

The Disability Gateway is an Australian Government initiative serving as
a central point of entry for disability information, services, and
programs. It was specifically designed to reduce the fragmentation of
available disability information and ease navigation for PWDs, their
families, and carers.

### [Key Design Feature: 10 Areas of Life Navigation]{.underline}

The homepage is structured around 10 Areas of Life topic sections, each
addressing a distinct dimension of daily life: Money; Employment; Aids
and Equipment; Housing; Transport; Health; Day-to-day Living; Education;
Leisure; Rights and Legal. This model is directly adopted in the NDIP
sitemap as the top-level content taxonomy.

### [Accessibility Features Adopted in NDIP]{.underline}

-   Readspeaker TTS integration: a \'Listen\' button on every page reads
    content aloud --- adopted as NDIP\'s persistent text-to-speech
    toggle

-   Auslan sign language video supplements --- adopted as embedded Sri
    Lanka Sign Language (SL) videos on all key pages

-   Phone-first accessibility: the national helpline is prominently
    displayed on all pages --- adopted as NDIP\'s national disability
    hotline in the header and footer

-   Multi-format documents: Easy Read, Auslan, Braille, and audio
    alternatives --- adopted as NDIP\'s ETR versions, SL videos, and
    audio formats

-   Local service finder with geographic filtering --- directly adopted
    as NDIP\'s Geo Service Finder with province and district filtering

## 8.3 United Kingdom --- GOV.UK Disability Services (gov.uk/browse/disabilities)

GOV.UK is a globally recognized benchmark for government digital service
design. The disability section represents the UK Government Digital
Service (GDS) philosophy: maximum clarity with minimum complexity. Its
homepage contains four precise category cards --- Benefits and financial
support; Carers and disability benefits; Disabled students; Work and
disabled people --- linking to individual topic pages.

### [Key Design Feature: Minimalist High-Clarity Design]{.underline}

Every page addresses a single topic only. Users land on a benefit page
and immediately see: what the benefit is; who is eligible; how much they
can receive; and how to apply. Financial benefits are broken down
individually, each with its own dedicated page. This progressive
disclosure model prevents users from being overwhelmed with information.

### [GOV.UK Design Principles Adopted in NDIP]{.underline}

-   One topic per page: each NDIP benefit or service guide follows the
    single-topic page structure

-   Plain language standard: all NDIP content written to GOV.UK plain
    language specification --- clear, simple, no jargon

-   Rights as top-level navigation: \'Rights and Legal Support\' is a
    primary top-level menu item

-   Progressive disclosure: complex application processes broken into
    step-by-step single-action pages

-   Bilingual content model: GOV.UK\'s Welsh language parity is adapted
    in NDIP as trilingual parity across Sinhala, Tamil, and English

## 8.4 United Kingdom --- Community and Specialist Disability Portals

Beyond the official GOV.UK portal, England has a well-developed
ecosystem of disability community platforms. The following portals were
reviewed for NDIP benchmarking and provide important models for
community features, specialist content, and rights information:

  ----------------------------------------------------------------------------------
  **Portal**       **URL**                  **Relevance to NDIP**
  ---------------- ------------------------ ----------------------------------------
  **Scope**        scope.org.uk             Major UK disability charity providing
                                            extensive information, advice, and a
                                            popular free online community. Model for
                                            NDIP\'s community and support networks
                                            module.

  **Able Here**    ablehere.com             Free, user-driven social network for
                                            disabled people to share experiences,
                                            network, and find support. Model for
                                            NDIP\'s peer support and community
                                            features.

  **Disabled       disableduc.com           Online community operational since 2001
  United**                                  with forums for chat, advice, and
                                            integration support. Model for NDIP\'s
                                            moderated discussion spaces.

  **Disability     disabilityrightsuk.org   Rights information, career resources,
  Rights UK**                               and the Future Ready Hub for employment.
                                            Model for NDIP\'s rights and employment
                                            integration as equal top-level
                                            navigation items.

  **Mencap**       mencap.org.uk            Provides the \'Family Hub\' online
                                            community specifically for families of
                                            people with learning disabilities. Model
                                            for NDIP\'s caregiver support resources
                                            and family hub.

  **AccessAble**   accessable.co.uk         Detailed accessibility guide for
                                            thousands of venues across the UK. Model
                                            for NDIP\'s accessibility-rated service
                                            listings in the Geo Service Finder.

  **RNIB**         rnib.org.uk              Royal National Institute of Blind People
                                            --- comprehensive resources, technology
                                            support, and community for people with
                                            sight loss. Model for NDIP\'s visual
                                            impairment sub-section.

  **Sense**        sense.org.uk             Support for deafblind individuals and
                                            those with complex disabilities. Model
                                            for NDIP\'s multiple and complex
                                            disability content sections.
  ----------------------------------------------------------------------------------

### 

### [Key Features from UK Community Portals Adopted in NDIP]{.underline}

-   Moderated peer support community spaces --- inspired by Scope and
    Able Here

-   Specialist content sections by disability type --- inspired by RNIB
    (visual impairment) and Sense (deafblind and complex disabilities)

-   Dedicated family and caregiver community hub --- inspired by
    Mencap\'s Family Hub

-   Accessibility-rated venue and service listings --- inspired by
    AccessAble

-   Rights and employment as equal-prominence navigation items ---
    inspired by Disability Rights UK

## 8.5 USA --- USAGov Disability Services (usa.gov/disability-services)

The USAGov Disability Services portal provides comprehensive information
for people with disabilities and their families. Its most significant
design innovations are the separation of content pathways for
individuals versus caregivers, and the inclusion of an interactive
Benefit Finder questionnaire tool.

### [Key Design Feature: Benefit Finder Questionnaire Tool]{.underline}

The Benefit Finder tool presents users with a short series of questions
about their situation. Based on answers, the tool generates a
personalized list of government benefits the user may be eligible for.
This removes the burden of navigating a complex service catalog and
replaces it with a guided, personalized experience. This directly
inspired NDIP\'s Eligibility Checker requirement (FR-011) and guided
smart search (FR-001).

### [Key Design Feature: Separate User Pathways]{.underline}

The portal explicitly separates content for: individuals with
disabilities seeking their own benefits; caregivers and family members;
and employers. The caregiver section provides specific information on
how caregivers can be paid and supported --- a level of detail
frequently absent from other portals. NDIP adopts separate navigation
pathways for PWDs, Caregivers, and Employers based on this model.

## 8.6 Canada --- CHRC Accessible Canada Portal (chrc-ccdp.gc.ca)

The Canadian Human Rights Commission (CHRC) portal is built around the
Accessible Canada Act (2019), which set the goal of a barrier-free
Canada by 2040. It is the most advanced example of sign language
integration in government digital services among the four government
portals reviewed.

### [Key Design Feature: Embedded ASL/LSQ Sign Language Videos]{.underline}

The portal directly embeds American Sign Language (ASL) and Langue des
Signes Québécoise (LSQ) video content alongside written page content ---
not as downloadable files or external links, but as in-page video
players. The Accessible Canada Act formally recognizes ASL, LSQ, and
Indigenous sign languages as primary languages, not accommodations. This
is the direct model for NDIP\'s embedded Sri Lanka Sign Language (SL)
video requirement (NFRU06).

### [Key Design Feature: Proactive Barrier Removal]{.underline}

Organizations under the Act must proactively identify and remove
barriers --- not wait for complaints. This principle is directly adopted
in NDIP\'s accessibility posture: WCAG 2.2 AA is the minimum requirement
from day one of design, not a retrofit. The portal also adopts the
CHRC\'s inclusive definition of disability --- recognizing visible,
invisible, temporary, permanent, and episodic disabilities equally.

## 8.7 Design Lessons Summary Table

  -------------------------------------------------------------------------------------
  **Best Practice**     **Source**      **Application in NDIP**        **Req. ID**
  --------------------- --------------- ------------------------------ ----------------
  10 Areas of Life      Australia       NDIP primary content taxonomy  FR-001,
  Navigation                            --- 10 life areas mirror       FR-010--FR-034
                                        welfare, health, education,    
                                        employment, transport, legal,  
                                        assistive tech, community,     
                                        complaints, and resources      
                                        modules                        

  Text-to-Speech on     Australia       NDIP persistent accessibility  NFRU02, FR004
  every page                            toolbar includes TTS toggle on 
                                        all pages                      

  Phone helpline on     Australia       National disability hotline    FR-006
  every page                            prominently displayed in NDIP  
                                        header/footer on all pages     

  Local area service    Australia       Geo Service Finder with        FR-022, FR-023
  finder with                           province/district filtering    
  geo-filter                            and interactive map            

  Multi-format          Australia       SL video, Easy Read, and audio NFRU06, FR013
  documents                             format for all key documents   

  Single-topic pages    UK (GOV.UK)     Each NDIP benefit or service   FR-010--FR-013
                                        guide is a dedicated           
                                        single-topic page              

  Plain language        UK (GOV.UK) /   All content written to plain   NFRU08, FR055
  content standard      Advisory input  language standard in all 3     
                                        languages; ETR versions        
                                        required                       

  Rights as top-level   UK (GOV.UK)     NDIP \'Rights and Legal        FR-007, FR-025
  navigation                            Support\' is a primary         
                                        navigation item                

  Peer support          UK (Scope, Able Moderated peer support spaces  F-08
  communities           Here)           included in NDIP community     
                                        module                         

  Specialist content by UK (RNIB,       Disability-type sub-sections   Section 2.3
  disability type       Sense)          within NDIP healthcare and     
                                        resources modules              

  Caregiver family hub  UK (Mencap)     Dedicated caregiver support    Section 3.7
                                        section with distinct content  (future)
                                        from PWD content               

  Accessibility-rated   UK (AccessAble) Accessibility-rated service    FR-022
  venue listings                        listings in NDIP Geo Service   
                                        Finder                         

  Benefit Finder        USA             NDIP Eligibility Checker and   FR-001, FR-011
  questionnaire                         guided smart search            

  Separate caregiver    USA             NDIP dedicated caregiver       F-08
  pathway                               section with distinct content  

  Employer resources    USA             NDIP Employer Resources        FR-032
  section                               sub-section with hiring        
                                        guidelines                     

  Embedded SL videos    Canada          Embedded SL video directly on  NFRU06
  in-page                               welfare benefit, rights, and   
                                        application guide pages        

  Proactive barrier     Canada          Accessibility designed-in from NFRU01--NFRU10
  removal                               day one; WCAG 2.2 AA minimum   
                                        from first page                

  Human rights and      Advisory input  Disability rights as top-level FR-025
  disability rights     (sources.txt)   navigation; human rights       
  integration                           directory in Section 4.2       

  Plain language /      Advisory input  Plain language standard        NFRU08, NFRU09
  cognitive             (sources.txt)   elevated to mandatory          
  accessibility                         requirement; ETR versions for  
                                        all key documents              
  -------------------------------------------------------------------------------------

# 9. Implementation Roadmap

## 9.1 Phased Implementation Plan

  ------------------------------------------------------------------------------------------
  **Phase**   **Name**          **Timeline**   **Activities**              **Deliverable**
  ----------- ----------------- -------------- --------------------------- -----------------
  **1**       **Needs           Months 1--2    Stakeholder consultations   Stakeholder
              Assessment**                     including disability        sign-off on
                                               community and psychosocial  requirements
                                               disability representatives; 
                                               User research with PWD      
                                               communities; Accessibility  
                                               requirement analysis; Plain 
                                               language requirement        
                                               scoping; Content audit of   
                                               existing government sources 

  **2**       **System Design** Months 3--4    UX/UI design with           Approved design
                                               accessibility review;       prototypes
                                               Psychosocial-inclusive      
                                               design review; Content      
                                               architecture and taxonomy;  
                                               Plain language style guide  
                                               production; Information     
                                               architecture; API           
                                               integration design          

  **3**       **Development**   Months 5--9    Frontend and backend        Functional beta
                                               development; CMS setup and  system
                                               configuration; Psychosocial 
                                               module development; Crisis  
                                               support integration; Plain  
                                               language content entry;     
                                               Multilingual content        
                                               migration                   

  **4**       **Testing &       Month 10       WCAG 2.2 accessibility      Accessibility
              Accessibility                    audit; Plain language       compliance
              Audit**                          review of all key pages;    certificate
                                               User acceptance testing     
                                               with PWD community          
                                               including psychosocial      
                                               disability representatives; 
                                               Security penetration        
                                               testing; Performance load   
                                               testing                     

  **5**       **Pilot Launch**  Month 11       Soft launch to selected     Pilot feedback
                                               user groups; Feedback       report
                                               collection from disability  
                                               communities; Staff training 
                                               for CMS users; Plain        
                                               language content review     
                                               cycle                       

  **6**       **National        Month 12       Public launch; Nationwide   Live portal ---
              Rollout**                        awareness campaign; Media   public access
                                               and ministry                
                                               communications; Advisory    
                                               committee public            
                                               acknowledgement             
  ------------------------------------------------------------------------------------------

## 9.2 Key Milestones

-   M1 --- Approved SRS and Project Kickoff

-   M2 --- Completed UX/UI design with ministry sign-off, including
    psychosocial inclusion review

-   M3 --- Beta version ready for internal testing

-   M4 --- WCAG 2.2 audit passed and plain language review completed for
    all critical pages

-   M5 --- Pilot launch with disability community feedback collected

-   M6 --- National public launch

# 10. Acceptance Criteria

The system shall be formally accepted upon successful demonstration of
all the following criteria. Critical and High priority items must all
pass before acceptance. Acceptance testing shall include direct
participation by persons with disabilities, including representatives
with psychosocial disabilities.

  --------------------------------------------------------------------------------
  **AC ID**  **Criterion**                                           **Measure**
  ---------- ------------------------------------------------------- -------------
  **AC01**   All Critical and High priority functional requirements  Pass / Fail
             (FR-001 to FR-055) are implemented and pass User        
             Acceptance Testing (UAT)                                

  **AC02**   WCAG 2.2 Level AA automated audit score of 95% or       Score
             higher using Axe or equivalent tool                     

  **AC03**   Manual accessibility testing with PWD users ---         Percentage
             including psychosocial disability representatives ---   
             demonstrates a task completion rate of 90% or higher    

  **AC04**   Page load time of 3 seconds or less on a 4G connection  Seconds
             for all core pages                                      

  **AC05**   System sustains 5,000 concurrent users in load testing  Pass / Fail
             without error rate exceeding 0.1%                       

  **AC06**   Security penetration test report shows no critical or   Pass / Fail
             high severity vulnerabilities                           

  **AC07**   All three languages --- Sinhala, Tamil, English ---     Pass / Fail
             display correctly across all pages and modules          

  **AC08**   Complaint submission, unique reference number           Pass / Fail
             generation, and complaint tracking workflow complete    
             end-to-end without errors                               

  **AC09**   CMS role-based access controls verified and functioning Pass / Fail
             correctly for all four user roles                       

  **AC10**   Analytics dashboard displays usage statistics and       Pass / Fail
             accessibility compliance metrics correctly              

  **AC11**   Plain language review completed and documented for all  Pass / Fail
             key welfare, rights, and application pages; ETR         
             versions available in all three languages               

  **AC12**   Persistent \'Get Help Now\' crisis support button       Pass / Fail
             visible and functional on every page of the portal; all 
             hotline links verified and active                       

  **AC13**   Psychosocial disability module fully functional: mental Pass / Fail
             health services directory populated; peer support links 
             active; crisis integration operational; low-stress UI   
             mode functional                                         

  **AC14**   Human rights and disability rights directory (FR-025)   Pass / Fail
             fully populated with verified links to relevant         
             institutions                                            

  **AC15**   Advisory committee members credited in the About        Pass / Fail
             section of the live portal                              
  --------------------------------------------------------------------------------

# 11. About the Portal & Advisory Committee

## 11.1 About the Portal

The National Disability Information Portal (NDIP) is a centralized,
accessible digital platform developed by the Ministry of Rural
Development, Social Security and Community Empowerment of Sri Lanka. The
portal serves as the primary national digital resource for persons with
disabilities, their families, caregivers, and the organizations that
support them.

The NDIP was developed in response to a well-documented gap: while
several government institutions in Sri Lanka provide services for
persons with disabilities, the information is currently scattered across
multiple agencies, making it difficult for individuals and caregivers to
locate accurate and up-to-date information. The NDIP addresses this by
providing a single trusted, accessible, and multilingual source of
information.

## 11.2 Vision and Mission

**Vision:**

A fully inclusive Sri Lanka where every person with a disability can
access information, services, and opportunities with dignity, ease, and
without barriers.

**Mission:**

To provide a centralized, accessible, multilingual digital platform that
connects persons with disabilities to government welfare programs,
healthcare, education, employment, legal support, assistive technology,
and community resources --- and that is designed from the outset to be
inclusive of all disability types, including psychosocial disabilities.

## 11.3 Role of the Ministry

The Ministry of Rural Development, Social Security and Community
Empowerment holds ownership and governance responsibility for the NDIP.
The Ministry is responsible for:

-   Strategic direction and policy oversight of the portal

-   Content accuracy review and official approval of all published
    information

-   Coordination with government agencies, departments, and service
    providers

-   Sustainability planning and long-term resource allocation

-   Monitoring and evaluation of portal performance against acceptance
    criteria

-   Ensuring the advisory committee is engaged throughout development
    and post-launch

## 

## 11.4 Advisory Committee

The NDIP has been developed with the meaningful participation of persons
with disabilities and disability experts. The involvement of people with
lived experience is not a consultation checkbox --- it is a fundamental
requirement for a portal of this nature to be effective, respectful, and
genuinely useful to its primary users.

The Advisory Committee has provided expert guidance on accessibility
requirements, content design, psychosocial disability inclusion, plain
language standards, and benchmark analysis. Their contributions are
reflected throughout this SRS document and are integral to the quality
of the portal.

**Recognition of Advisory Committee Members:**

The members of the Advisory Committee shall be formally credited in the
About section of the published live portal. People who contribute their
expertise, time, knowledge, and lived experience to this work deserve
public acknowledgement and recognition. This is a matter of professional
respect, transparency, and good governance.

  ------------------------------------------------------------------------
  **Name**              **Role / Organisation**     **Area of Expertise**
  --------------------- --------------------------- ----------------------
  **Chinthaka J.        Focal Point -- Sri Lanka,   Psychosocial
  Munasinghe**          Transforming Communities    disability inclusion;
                        for Inclusion -- Global     digital design for
                        (TCI-Global)                mental health;
                                                    trauma-informed
                                                    services

  \[To be completed by  \[To be completed by the    \[To be completed by
  the Ministry\]        Ministry\]                  the Ministry\]

  \[To be completed by  \[To be completed by the    \[To be completed by
  the Ministry\]        Ministry\]                  the Ministry\]

  \[To be completed by  \[To be completed by the    \[To be completed by
  the Ministry\]        Ministry\]                  the Ministry\]
  ------------------------------------------------------------------------

*Note to the Ministry: The table above should be completed with the full
names, organisations, and areas of expertise of all individuals who
contributed to the development of this portal. This includes community
advisors, disability advocates, government reviewers, and any other
persons whose knowledge shaped this document or the portal design.
Acknowledging their work is a matter of equity and respect.*

## 

## 

## 

## 11.5 National Policy and Legal Framework

The NDIP is grounded in the following national and international policy
and legal frameworks:

-   Protection of the Rights of Persons with Disabilities Act No. 28 of
    1996 (Sri Lanka)

-   National Policy on Disability (Sri Lanka)

-   Personal Data Protection Act (PDPA) 2022 (Sri Lanka)

-   UN Convention on the Rights of Persons with Disabilities (UNCRPD)

-   Accessible Canada Act (2019) --- reference for barrier-removal
    framework

## 11.6 Partners and Stakeholders

-   Ministry of Rural Development, Social Security and Community
    Empowerment

-   Department of Social Services

-   Ministry of Health

-   Ministry of Education

-   Transforming Communities for Inclusion -- Global (TCI-Global)

-   Disability advocacy organizations in Sri Lanka

-   \[Additional partners and stakeholders to be listed by the
    Ministry\]

# 12. Appendices

## Appendix A --- Full Website Sitemap

**1. Home**

-   Welcome Message

-   Quick Access Services (Benefits, Apply, Assistive Devices,
    Employment, Mental Health, Complaints)

-   Latest Announcements

-   Emergency Information / Crisis Support Button

-   Featured Welfare Programs

-   Accessibility Settings (font size, high contrast, TTS, low-stress
    mode)

-   Smart Search Bar

-   Quick Links

**2. About the Portal**

-   Vision and Mission

-   Role of the Ministry

-   National Policy on Disability

-   UNCRPD Reference

-   National Disability Statistics

-   Advisory Committee Members

-   Partners and Stakeholders

**3. Disability Welfare Benefits**

-   3.1 Financial Assistance --- Disability Allowance, Social Security,
    Pension, Financial Aid

-   3.2 Assistive Device Support --- Wheelchairs, Hearing Aids,
    Prosthetics, Mobility Aids

-   3.3 Housing Assistance --- Accessible Housing Programs, Grants, Home
    Modifications

-   3.4 Transport Assistance --- Concessions, Accessible Transport,
    Travel Subsidies

-   3.5 Application Guides --- Plain language and ETR versions; Online
    and Downloadable Forms

**4. Government Services Directory**

-   4.1 Central Government Services

-   4.2 Provincial and District Services

-   4.3 Disability Service Centers

-   4.4 Human Rights and Disability Rights Directory

-   4.5 Contact Directory with Interactive Maps

**5. Healthcare and Rehabilitation**

-   5.1 Medical Services --- Disability Assessment, Rehabilitation
    Hospitals, Therapy

-   5.2 Mental Health Support --- Counselling, Psychological Support
    Programs

-   5.3 Community Rehabilitation Programs

-   5.4 Mental Health and Psychosocial Support Section (NEW)

**6. Mental Health and Psychosocial Support (NEW)**

-   Mental Health Services Directory

-   Community-Based Psychosocial Support Programs

-   Peer Support Networks

-   Recovery Resources and Self-Help Library

-   Crisis Support Contacts and Hotlines

-   Caregiver Mental Health Resources

-   Anonymous Self-Help Tools

**7. Education and Skills Development**

-   Inclusive Education Policies and Schools

-   Scholarships and Grants

-   Vocational Training Centers

-   Digital Literacy Training

**8. Employment and Entrepreneurship**

-   Job Opportunities Board

-   Entrepreneurship Support and Microfinance

-   Employer Resources and Inclusive Hiring Guidelines

**9. Assistive Technology**

-   Assistive Devices Directory by Category

-   Government and Private Suppliers

-   Technology Innovations Feed

**10. Rights and Legal Support**

-   National Legislation

-   UNCRPD Reference

-   Human Rights Framework

-   Legal Aid Services

-   Policy and Regulations

**11. Community and Support Networks**

-   Disability Organizations Database

-   Peer Support Communities

-   Caregiver Support Resources

-   Volunteer Opportunities

**12. Complaints and Feedback**

-   Submit a Complaint

-   Service Requests

-   Track Complaint Status

**13. Accessibility Tools**

-   Accessibility Statement

-   Website Accessibility Features Guide

-   Sign Language Support

-   Screen Reader Guide

**14. Help and Support**

-   Frequently Asked Questions

-   User Guide

-   Contact Help Desk

-   Emergency Contacts

**15. Citizen Account (Phase 2)**

-   User Registration

-   Apply for Benefits Online

-   Track Applications

-   Notification and Reminder Preferences

-   Saved Services

## Appendix B --- Glossary of Disability Types

  -----------------------------------------------------------------------
  **Disability       **Description**
  Type**             
  ------------------ ----------------------------------------------------
  **Physical         Impairments affecting mobility, physical function,
  Disability**       or dexterity, including cerebral palsy, amputations,
                     and spinal cord injuries.

  **Visual           Partial or total loss of sight, including blindness
  Impairment**       and low vision conditions.

  **Hearing          Partial or total loss of hearing, including deafness
  Impairment**       and hard of hearing conditions.

  **Intellectual     Significant limitations in intellectual functioning
  Disability**       and adaptive behaviour, affecting daily life skills
                     and learning.

  **Psychosocial     Disability arising from mental health conditions
  Disability**       that significantly impact daily functioning,
                     including depression, anxiety, PTSD, bipolar
                     disorder, and schizophrenia. The NDIP recognizes
                     psychosocial disability as a distinct category
                     requiring specific design and content responses.

  **Autism Spectrum  A developmental condition affecting social
  Disorder**         interaction, communication, and behaviour, varying
                     widely across individuals.

  **Multiple         A combination of two or more disability types
  Disabilities**     requiring multi-dimensional support and
                     cross-sectoral services.

  **Episodic         A disability that occurs intermittently or
  Disability**       fluctuates over time rather than being constant.
                     Recognized as a valid and important disability
                     category in the NDIP, consistent with international
                     best practice.
  -----------------------------------------------------------------------

## 

## 

## 

## 

## Appendix C --- Regulatory and Reference Framework

  -----------------------------------------------------------------------
  **Reference**               **Relevance to NDIP**
  --------------------------- -------------------------------------------
  **Protection of the Rights  Primary national legislation governing
  of Persons with             disability rights and services in Sri
  Disabilities Act No. 28 of  Lanka.
  1996 (Sri Lanka)**          

  **National Policy on        Policy framework guiding government action
  Disability (Sri Lanka)**    on disability inclusion.

  **Personal Data Protection  Governs collection, processing, and storage
  Act (PDPA) 2022 (Sri        of personal data on the NDIP.
  Lanka)**                    

  **UN Convention on the      International treaty ratified by Sri Lanka;
  Rights of Persons with      provides rights framework for all NDIP
  Disabilities (UNCRPD)**     content.

  **Web Content Accessibility Technical accessibility standard; NDIP
  Guidelines (WCAG) 2.2 ---   minimum requirement is Level AA compliance.
  W3C**                       

  **IEEE 830 --- Standard for Documentation standard followed in
  Software Requirements       preparing this SRS.
  Specifications**            

  **ISO/IEC 29148:2018 ---    International standard for requirements
  Systems and Software        engineering, followed in this document.
  Engineering Requirements**  

  **Accessible Canada Act     Reference for barrier-removal framework and
  (2019)**                    sign language integration model.

  **PlainLanguage.gov ---     International plain language definition and
  Plain Language Standard**   standards adopted for all NDIP content.

  **GOV.UK Content Design     Plain language and single-topic page design
  Guide**                     standards adopted from UK Government
                              Digital Service.
  -----------------------------------------------------------------------

## 

## 

## 

## 

## 

## 

## 

## 

## Appendix D --- UK Community Portal Reference List

The following United Kingdom disability community portals were reviewed
as part of the international benchmark analysis for the NDIP:

  ------------------------------------------------------------------------------------
  **Portal**        **URL**                      **Focus Area**
  ----------------- ---------------------------- -------------------------------------
  **Scope**         scope.org.uk                 Disability information, advice, and
                                                 online community

  **Able Here**     ablehere.com                 User-driven social network for
                                                 disabled people

  **Disabled        disableduc.com               Online community and forums since
  United**                                       2001

  **Disability      disabilityrightsuk.org       Rights information and employment
  Rights UK**                                    resources

  **Mencap**        mencap.org.uk                Support for people with learning
                                                 disabilities and their families

  **AccessAble**    accessable.co.uk             Accessibility guide for venues across
                                                 the UK

  **Sociability**   sociability.app              Verified accessibility information
                                                 for cafes, bars, and restaurants

  **RNIB**          rnib.org.uk                  Resources and support for people with
                                                 sight loss

  **Sense**         sense.org.uk                 Support for deafblind individuals and
                                                 complex disabilities

  **Enable**        enable.org.uk                Social care, community, and
                                                 employment information

  **GOV.UK          gov.uk/browse/disabilities   Official government portal for
  Disability                                     benefits, employment, and rights
  Support**                                      

  **Disabled        disabledholidays.com         Accessible accommodation and travel
  Holidays**                                     support
  ------------------------------------------------------------------------------------

**National Disability Information Portal (NDIP) --- Software
Requirements Specification v2.0**

*Prepared for the Ministry of Rural Development, Social Security and
Community Empowerment \| Sri Lanka \| 2025*

**--- End of Document ---**
