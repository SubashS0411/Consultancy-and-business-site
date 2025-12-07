# Consulting / Business Solutions Website - Master Frontend Project Prompt

Create a comprehensive, modern consulting and business solutions website with 9 complete HTML pages. This is a fully functional frontend application for a professional consulting firm offering business solutions, client management, and project tracking with both consultant and client interfaces.

## Core Requirements

### Technology Stack
- **HTML5** with semantic markup
- **Tailwind CSS** via CDN for styling (use only core utility classes - no custom config)
- **Vanilla JavaScript** for all interactions
- **Responsive Design** - Mobile-first approach
- **RTL Support** - Bidirectional language toggle
- **Modern UI/UX** - Contemporary corporate design with professional aesthetics

### Design Principles
- Professional, trustworthy corporate aesthetic
- Sophisticated color palette (navy blues, deep teals, or slate grays with gold/teal accents)
- Clean, spacious layouts with strategic use of whitespace
- Subtle animations and transitions
- Data visualization elements
- Modern card-based and grid layouts
- Premium feel with glassmorphism and gradient accents

## Pages to Create

### 1. **index.html** - Main Landing Page
**Purpose:** Primary homepage showcasing consulting services and value proposition

**Sections:**
- Hero section with:
  - Powerful headline: "Transform Your Business with Strategic Excellence"
  - Compelling subheadline about business transformation
  - Two CTA buttons (Get Started, Our Services)
  - Background: Subtle animated gradient or professional business image
  - Use image: `https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920` (business meeting)
- Trust indicators bar:
  - Years of experience
  - Clients served
  - Projects completed
  - Success rate percentage
  - Industry awards
- Core services section (4-6 service cards):
  - Strategy Consulting (icon + brief description)
  - Digital Transformation
  - Operations Excellence
  - Financial Advisory
  - Risk Management
  - Change Management
  - Each card: icon, title, description, "Learn More" link
  - Use images: 
    - Strategy: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800`
    - Digital: `https://images.unsplash.com/photo-1551434678-e076c223a692?w=800`
    - Operations: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800`
- "Why Choose Us" section:
  - 4 key differentiators in alternating layout
  - Expert Team, Proven Methodology, Industry Expertise, Results-Driven
  - Each with icon, stats, and description
  - Background image: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920`
- Case studies carousel/grid (3-4 featured projects):
  - Client logo placeholder
  - Industry tag
  - Challenge summary
  - Results achieved (percentage improvements)
  - "Read Case Study" link
  - Images: 
    - `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600`
    - `https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600`
    - `https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600`
- Client testimonials section:
  - Slider with 4-5 testimonials
  - Client photo, name, position, company
  - Quote and rating stars
  - Client images: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150` (and variations)
- Industries served:
  - Icon grid of industries (Finance, Healthcare, Technology, Manufacturing, Retail, Energy)
  - Hover effects showing brief description
- Client logos section:
  - "Trusted by leading organizations" header
  - Grid of 12+ client logos (grayscale, color on hover)
  - Use placeholder: `https://via.placeholder.com/150x80/cccccc/666666?text=Client+Logo`
- Newsletter/Contact CTA section:
  - "Ready to Transform Your Business?"
  - Email signup or consultation request form
  - Background: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920` with overlay
- Footer with social links, Privacy Policy (#), Terms (#)

**Features:**
- Sticky navigation with glass effect on scroll
- Smooth scroll to sections
- Animated counters for statistics
- Auto-playing testimonial carousel with manual controls
- Parallax effects on background images
- Fade-in animations on scroll

---

### 2. **index2.html** - Alternative Landing Page
**Purpose:** Different design approach emphasizing methodology and results

**Sections:**
- Split hero section:
  - Left: Headline, description, CTA buttons
  - Right: Professional business illustration or image
  - Image: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200`
- "Our Approach" section:
  - 4-step consulting methodology with visual flow
  - Discover → Strategize → Implement → Optimize
  - Each step: number, icon, title, description
  - Connected with animated line/arrows
- Service deep-dive:
  - Tabbed interface showing detailed service offerings
  - Each tab: description, benefits list, typical deliverables
  - Image per service: 
    - `https://images.unsplash.com/photo-1552664730-d307ca884978?w=800`
    - `https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800`
- Results showcase:
  - Large statistics with icons
  - $500M+ value created
  - 95% client retention
  - 200+ successful projects
  - Background: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920`
- Team expertise section:
  - "Meet Our Experts" heading
  - Grid of 6 consultant profiles
  - Photo, name, title, expertise areas, LinkedIn icon
  - Team images: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400` (and variations)
- Resource center preview:
  - Latest insights (3 blog cards)
  - Whitepapers/eBooks download cards
  - Webinar signup
  - Images: `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600`
- Interactive ROI calculator:
  - Simple inputs (company size, current revenue, pain points)
  - Estimated potential savings/growth
  - "Schedule Consultation" CTA
- Partner ecosystem:
  - Technology and strategic partners
  - Partner logos with brief descriptions
- Footer

**Differences from index.html:**
- Different layout structure and visual hierarchy
- More detailed service information
- Team-focused presentation
- Interactive calculator element
- Methodology-driven narrative

---

### 3. **about.html** - Company Information
**Purpose:** Comprehensive information about the consulting firm

**Sections:**
- Page hero:
  - "About Us" headline
  - Mission statement
  - Background image: `https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920`
- Company story timeline:
  - Visual timeline of company milestones
  - Founded date, key achievements, growth phases
  - Office expansion, notable projects, awards
- Mission, Vision, Values section:
  - Three columns with icons
  - Detailed descriptions
  - Background: subtle gradient
- Leadership team:
  - Executive profiles with larger photos
  - Name, title, bio, expertise
  - Contact/LinkedIn links
  - Images: 
    - CEO: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500`
    - CFO: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500`
    - COO: `https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500`
    - CTO: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500`
- Global presence:
  - World map with office locations marked
  - Office addresses and contact info
  - "Serving clients in 50+ countries"
  - Map image: `https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200`
- Awards and recognition:
  - Grid of awards/certifications
  - Industry recognition badges
  - Partnership certifications
  - Logo placeholders: `https://via.placeholder.com/200x150/f0f0f0/999999?text=Award`
- Culture and values:
  - Office photos showing team collaboration
  - Core values with descriptions
  - Diversity and inclusion statement
  - Images: 
    - `https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800`
    - `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800`
- Career opportunities CTA:
  - "Join Our Team" section
  - Brief overview of career benefits
  - "View Open Positions" button
  - Background: `https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920`
- Company statistics:
  - Team size, years in business, client satisfaction
  - Animated counters
- Footer

**Features:**
- Interactive timeline with hover effects
- Smooth transitions between sections
- Expandable team bios
- Animated statistics
- Video placeholder for company culture

---

### 4. **services.html** - Service Offerings
**Purpose:** Detailed breakdown of all consulting services

**Sections:**
- Page hero:
  - "Our Services" headline
  - "End-to-end business solutions tailored to your needs"
  - Background: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920`
- Services overview navigation:
  - Sticky sidebar or top tabs
  - Quick jump to each service section
- Detailed service sections (6-8 services):
  
  **1. Strategy Consulting**
  - Icon and title
  - Comprehensive description
  - Key offerings (bullet points)
  - Typical deliverables
  - Case study example with results
  - "Request Consultation" CTA
  - Image: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000`
  
  **2. Digital Transformation**
  - Description of digital strategy and implementation
  - Technology assessment, roadmap development, implementation support
  - Benefits list
  - Image: `https://images.unsplash.com/photo-1551434678-e076c223a692?w=1000`
  
  **3. Operations Excellence**
  - Process optimization, lean methodology, supply chain
  - Efficiency improvement metrics
  - Image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000`
  
  **4. Financial Advisory**
  - CFO services, financial planning, M&A support
  - Risk assessment and compliance
  - Image: `https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000`
  
  **5. Change Management**
  - Organizational transformation
  - Stakeholder engagement, training programs
  - Image: `https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000`
  
  **6. Risk Management**
  - Enterprise risk assessment
  - Compliance and governance
  - Image: `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000`

- Service delivery methodology:
  - Visual diagram of consulting process
  - Phase-by-phase breakdown
  - Timeline expectations
- Industry-specific solutions:
  - How services adapt to different industries
  - Industry cards with icons
- Pricing structure information:
  - Engagement models (project-based, retainer, hourly)
  - Transparent pricing approach
  - "Request Quote" form
- Technology and tools:
  - Platforms and tools used in delivery
  - Partner technologies
  - Logos: `https://via.placeholder.com/150x100/e0e0e0/888888?text=Tech+Partner`
- FAQ accordion:
  - 8-10 common questions about services
  - Engagement process, timelines, pricing
- Contact CTA:
  - "Not sure which service you need?"
  - Schedule consultation button
  - Background: `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920`
- Footer

**Features:**
- Smooth scroll navigation
- Expandable service details
- Interactive methodology diagram
- Service comparison table
- Filterable by industry
- Sticky CTA button
- Animated icons and graphics

---

### 5. **contact.html** - Contact Page
**Purpose:** Multiple ways to get in touch with the consulting firm

**Sections:**
- Page hero:
  - "Get In Touch" headline
  - "Let's discuss how we can help transform your business"
  - Background: `https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920`
- Contact methods cards:
  - Schedule Consultation (calendar icon)
  - Call Us (phone icon)
  - Email Us (email icon)
  - Visit Office (location icon)
  - Each card: icon, title, details, action button
- Consultation request form:
  - Name (First, Last)
  - Company Name
  - Email (required)
  - Phone Number
  - Company Size (dropdown: 1-10, 11-50, 51-200, 201-500, 500+)
  - Industry (dropdown: Finance, Healthcare, Technology, Manufacturing, Retail, Other)
  - Service Interest (checkboxes: Strategy, Digital, Operations, Financial, Risk, Change)
  - Budget Range (dropdown)
  - Project Timeline (dropdown: Immediate, 1-3 months, 3-6 months, 6+ months)
  - Message (textarea)
  - Preferred Contact Method (radio: Email, Phone, Video Call)
  - How did you hear about us? (dropdown)
  - Submit button
- Office locations:
  - Cards for each office (3-4 locations)
  - Address, phone, email, working hours
  - "Get Directions" link
  - Office images:
    - NYC: `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600`
    - London: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600`
    - Singapore: `https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600`
- Interactive map:
  - Map placeholder showing office locations
  - Use: `https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200` with office markers overlay
- Business hours and response time:
  - Expected response timeline
  - Emergency contact information
  - Time zone information
- Social media section:
  - "Connect With Us" heading
  - Social media icons with follower counts
  - LinkedIn, Twitter, Facebook, Instagram
- Newsletter signup:
  - "Stay Informed" section
  - Email input and subscribe button
  - Privacy notice
- FAQ quick links:
  - "Common Questions" section
  - 4-5 most asked questions with brief answers
  - Link to full FAQ
- Footer

**Features:**
- Real-time form validation with error messages
- Success message after submission
- Form field animations
- Click-to-copy contact details
- Phone number formatting
- Email validation
- Required field indicators
- Loading spinner on submit
- Map zoom on office card hover

---

### 6. **login.html** - Authentication Page
**Purpose:** Secure login for clients and consultants

**Sections:**
- Split screen layout:
  - Left side (40%): Login form
  - Right side (60%): Brand image and messaging
  - Right image: `https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200`
- Login card:
  - Company logo
  - "Welcome Back" heading
  - "Log in to access your dashboard"
  - Email/Username input
  - Password input with show/hide toggle
  - "Remember me" checkbox
  - "Forgot password?" link (modal trigger)
  - Login button
  - Divider with "or"
  - Social login options (Google, Microsoft, LinkedIn - placeholder buttons)
  - "Don't have an account? Request Access" link
- Brand messaging (right side):
  - Tagline: "Transforming Businesses, Delivering Results"
  - Key benefits list
  - Client testimonial
  - Background overlay on image
- Forgot password modal:
  - Email input
  - "Send Reset Link" button
  - Success confirmation
- Request access modal:
  - Name, email, company
  - Role (Client, Consultant, Partner)
  - Message
  - Submit button
- Footer (minimal)

**Features:**
- Form validation with inline errors
- Password strength indicator
- Password visibility toggle (eye icon)
- Demo credentials display:
  - **Client:** client@company.com / client123
  - **Consultant:** consultant@firm.com / consultant123
- Redirect logic based on role
- Animated form transitions
- Loading state on login
- Remember me functionality (localStorage)
- Social login buttons (non-functional placeholders)
- Responsive layout (stacked on mobile)

---

### 7. **admin-dashboard.html** - Consultant Dashboard
**Purpose:** Internal dashboard for consultants to manage projects and clients

**Sections:**
- Top header:
  - Company logo
  - Search bar (global search)
  - Notification bell with badge
  - Messages icon
  - Consultant profile dropdown
    - Profile photo: `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100`
    - Name and role
    - View Profile
    - Settings
    - Logout
- Sidebar navigation (collapsible):
  - Dashboard (icon: home)
  - Projects (icon: briefcase)
  - Clients (icon: users)
  - Team (icon: people)
  - Calendar (icon: calendar)
  - Reports (icon: chart)
  - Documents (icon: folder)
  - Billing (icon: dollar)
  - Settings (icon: gear)
  - Each with icon and label
- Main dashboard content (Overview):
  
  **KPI Cards Row:**
  - Active Projects (number with trend)
  - Total Clients (number with trend)
  - Revenue This Month ($ amount with percentage)
  - Team Utilization (percentage with gauge)
  - Each card: icon, title, main number, trend indicator
  
  **Charts Section:**
  - Revenue chart (line chart - 6 months)
  - Project distribution (pie chart by status)
  - Use Chart.js or create with SVG/CSS
  - Or use placeholder images: `https://via.placeholder.com/600x300/f8f9fa/333333?text=Revenue+Chart`
  
  **Active Projects Table:**
  - Columns: Project Name, Client, Status, Progress, Deadline, Assigned Team, Actions
  - 5-7 rows with mock data
  - Status badges (In Progress, Planning, On Hold, Completed)
  - Progress bars
  - Action dropdown (View, Edit, Report)
  - Sortable headers
  
  **Recent Activity Feed:**
  - Timeline of recent actions
  - User avatars, action description, timestamp
  - "New client added", "Project milestone completed", etc.
  
  **Upcoming Meetings:**
  - Card list of scheduled meetings
  - Client name, meeting type, date/time, link to join
  - "View Calendar" link
  
  **Quick Actions:**
  - Buttons for common tasks
  - Create New Project
  - Add Client
  - Generate Report
  - Schedule Meeting

- Secondary views (accessed via sidebar):
  
  **Projects View:**
  - Filter/search bar
  - Kanban board or table view toggle
  - Project cards with details
  - Create new project button
  
  **Clients View:**
  - Client directory table
  - Contact information
  - Projects associated
  - Last interaction date
  - Add new client button
  
  **Calendar View:**
  - Monthly calendar layout
  - Meeting and deadline markers
  - Day/Week/Month view toggle
  
  **Reports View:**
  - Report templates
  - Generate custom report
  - Recent reports list
  - Export options

- Footer (minimal)

**Features:**
- Collapsible sidebar (toggle button)
- Responsive data tables with pagination
- Sortable table columns
- Filter dropdowns
- Search functionality
- Modal for creating new projects/clients
- Notification dropdown
- Real-time data updates (simulated)
- Chart animations on load
- Hover effects on interactive elements
- Mobile-responsive layout
- Dark mode toggle (bonus)

---

### 8. **user-dashboard.html** - Client Dashboard
**Purpose:** Portal for clients to track their projects and access resources

**Sections:**
- Top header:
  - Company logo
  - Dashboard title
  - Notification bell
  - Client profile dropdown
    - Profile photo: `https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100`
    - Name and company
    - Account Settings
    - Logout
- Welcome section:
  - "Welcome back, [Client Name]"
  - Account manager card with photo and contact button
  - Manager image: `https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150`
- Quick stats cards:
  - Active Projects
  - Upcoming Deliverables
  - Hours Invested
  - Team Members Assigned
  - Each with icon and number
- My Projects section:
  - Tab navigation: Active, Completed, All
  - Project cards showing:
    - Project name and description
    - Progress bar with percentage
    - Status badge
    - Key milestones
    - Next deadline
    - Assigned consultant team (avatars)
    - "View Details" button
  - 3-4 project cards
  - Project images:
    - `https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400`
    - `https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400`
- Upcoming milestones timeline:
  - Visual timeline of next 5 deliverables
  - Date, milestone name, project
  - Status indicator
- Recent documents section:
  - List of shared documents/reports
  - Document name, type, upload date, size
  - Download button
  - Icons for file types (PDF, Excel, PowerPoint)
- Messages/Communication:
  - Recent messages from consulting team
  - Quick reply option
  - "View All Messages" link
- Invoices and billing:
  - Recent invoices table
  - Invoice number, date, amount, status (Paid/Pending)
  - Download invoice button
  - "View All Invoices" link
- Meeting schedule:
  - Upcoming meetings with consultant team
  - Date, time, meeting title, participants
  - "Join Meeting" button (video call placeholder)
- Resources section:
  - Links to reports, best practices, templates
  - Industry insights
  - Case studies
  - Icon cards with titles
- Request support/consultation:
  - "Need Help?" card
  - Quick contact form or "Schedule Call" button
- Feedback section:
  - "How are we doing?" prompt
  - Star rating
  - Comment box
  - Submit button
- Footer

**Features:**
- Responsive card layouts
- Tab switching for projects
- Filterable document list
- Downloadable invoices (mock download)
- Real-time project updates (simulated)
- Interactive timeline
- Message notifications
- Collapsible sections
- Mobile-optimized interface
- Print-friendly project reports (CSS)

---

### 9. **404.html** - Error Page
**Purpose:** User-friendly error page with helpful navigation

**Sections:**
- Centered content:
  - Large "404" text with gradient or animation
  - Error illustration or icon
  - Use image: `https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800` (abstract/minimal)
- Error message:
  - "Oops! Page Not Found"
  - Friendly description: "The page you're looking for seems to have moved or doesn't exist."
- Search bar:
  - "Search our site" placeholder
  - Search button
  - Functional search (redirects to services page with query)
- Helpful links:
  - Button grid:
    - Back to Home
    - Our Services
    - Contact Us
    - View Resources
  - Each button with icon
- Popular pages:
  - "You might be interested in" section
  - Links to:
    - Strategy Consulting
    - About Us
    - Case Studies
    - Client Login
- Recent blog posts or resources:
  - 3 cards with titles and brief descriptions
  - Images: `https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400`
- Contact support:
  - "Still can't find what you need?"
  - Quick contact form or support email
- Minimal footer

**Features:**
- Animated 404 text
- Smooth transitions
- Functional search redirects
- Browser back button integration
- Breadcrumb trail
- Responsive layout
- Engaging visuals
- Clear call-to-actions

---

### 10. **coming-soon.html** - Launch Page
**Purpose:** Pre-launch page for new services or features

**Sections:**
- Full-screen layout:
  - Background image: `https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920` with overlay
- Centered content:
  - Company logo
  - "Coming Soon" badge
  - Feature/service title
  - Tagline or description
- Countdown timer:
  - Days, Hours, Minutes, Seconds
  - Large, prominent display
  - Animated digits
  - Target date: 30 days from current date
- Email notification signup:
  - "Be the first to know" heading
  - Email input field
  - "Notify Me" button
  - Success message on submit
  - Privacy notice
- Teaser information:
  - 3-4 feature highlights
  - Icons with brief descriptions
  - What to expect from the new service/feature
- Social media follow:
  - "Stay Connected" heading
  - Social media icons with links
  - Follower count displays
- Progress indicator:
  - Visual bar showing development progress
  - "75% Complete" or similar
- Alternative action:
  - "Explore our current services"
  - Link to main website
- Minimal footer:
  - Copyright
  - Privacy (#)
  - Terms (#)

**Features:**
- Live countdown timer (JavaScript)
- Email validation
- Form submission success state
- Animated background (subtle movement or particles)
- Responsive design
- Smooth fade-in animations on load
- Parallax scrolling effect
- Progressbar animation
- LocalStorage for email entered (prevent duplicate signups)

---

## Shared Components

### Navigation Bar (All Pages Except Login/404/Coming Soon)
- Company logo (left) - text logo: "APEX Consulting" or use: `https://via.placeholder.com/150x40/1e3a8a/ffffff?text=APEX+Consulting`
- Menu items:
  - Home
  - About
  - Services (dropdown with service list)
  - Industries (dropdown)
  - Insights (dropdown: Blog, Case Studies, Whitepapers)
  - Contact
- Right side:
  - Search icon (opens search modal)
  - Language/RTL toggle
  - "Client Login" button
  - "Get Started" CTA button (primary color)
- Mobile:
  - Hamburger menu
  - Full-screen overlay menu
- Sticky navigation with backdrop blur and shadow on scroll
- Active page highlighting

### Footer (All Pages Except Login/Coming Soon)
**Layout:** Four columns + bottom bar

**Column 1: About**
- Company logo and name
- Brief tagline (2-3 sentences)
- Social media icons (LinkedIn, Twitter, Facebook, Instagram, YouTube)

**Column 2: Services**
- Strategy Consulting
- Digital Transformation
- Operations Excellence
- Financial Advisory
- Risk Management
- Change Management

**Column 3: Company**
- About Us
- Our Team
- Careers
- Case Studies
- Partners
- Contact Us

**Column 4: Resources**
- Blog & Insights
- Whitepapers
- Webinars
- FAQ
- Support
- Newsletter Signup (email input + button)

**Bottom Bar:**
- Copyright © 2024 APEX Consulting. All rights reserved.
- Privacy Policy (#)
- Terms of Service (#)
- Cookie Policy (#)
- Sitemap

**Design:**
- Dark background (navy/charcoal)
- White/light text
- Hover effects on links
- Newsletter signup with validation

---

### Shared UI Components

**Buttons:**
- **Primary:** Solid color, white text, hover lift and darken
- **Secondary:** Outline style, colored border and text, hover fill
- **Ghost:** Transparent, text only, hover background
- Sizes: Small, Medium, Large
- States: Default, Hover, Active, Disabled, Loading

**Cards:**
- White background, subtle shadow
- Rounded corners (8px-12px)
- Hover effect: lift (transform translateY) and shadow increase
- Optional image at top
- Padding: 24px-32px
- Border on hover (accent color)

**Forms:**
- Label above input
- Input fields: border, rounded, padding, focus state (ring)
- Placeholder text (gray)
- Error state: red border, error message below
- Success state: green checkmark
- Required field indicator (*)
- Help text in gray
- Consistent height and spacing

**Modals:**
- Backdrop with blur
- Centered white card
- Close button (X) top-right
- Smooth fade and scale animation
- Click outside to close
- ESC key to close

**Badges:**
- **Status:** Colored background, rounded-full
  - Success (green), Warning (yellow), Error (red), Info (blue), Neutral (gray)
- **Category:** Outline style, smaller
- **Count:** Circle with number

**Tables:**
- Striped rows (alternate background)
- Hover row highlight
- Sortable headers with icons
- Pagination controls
- Responsive (scroll or cards on mobile)
- Action column with dropdown

**Loaders:**
- Spinner (rotating circle)
- Skeleton screens for content loading
- Progress bars for multi-step processes
- Button loading state (spinner inside button)

**Toasts/Alerts:**
- Fixed position (top-right)
- Auto-dismiss after 5 seconds
- Close button
- Icon based on type
- Slide-in animation
- Types: Success, Error, Warning, Info

**Tooltips:**
- Appear on hover
- Small dark background, white text
- Arrow pointing to element
- Short helpful text

**Accordions:**
- Expandable sections
- Chevron icon (rotates on open)
- Smooth height transition
- One or multiple open at once

**Tabs:**
- Horizontal tab list
- Active tab indicator (underline or background)
- Content area below
- Smooth transition between tabs

---

## JavaScript Functionality (main.js)

### Core Features Required

**1. Navigation**
```javascript
// Mobile menu toggle
// Sticky header with scroll effects
// Dropdown menus (desktop)
// Active page highlighting
// Smooth scroll to anchors
// Search modal open/close
```

**2. Forms**
```javascript
// Real-time validation
// Error message display
// Success states
// Form submission handling (mock)
// Multi-step form navigation (register)
// File upload handling (mock)
// Password strength indicator
// Password visibility toggle
```

**3. Modals**
```javascript
// Open/close functionality
// Backdrop click to close
// ESC key to close
// Focus trapping
// Prevent body scroll when open
// Animation on open/close
```

**4. Tabs & Accordions**
```javascript
// Tab switching with active states
// Accordion expand/collapse
// URL hash navigation for tabs
// Keyboard navigation
```

**5. Carousels/Sliders**
```javascript
// Auto-play testimonials/case studies
// Manual navigation (arrows,