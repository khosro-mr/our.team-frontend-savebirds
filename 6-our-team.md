<h1 align="center">SaveBirds.app Our Team Page</h1>

# 1. Overview
Create the Our Team page for SaveBirds.app using Vue 3 and Bootstrap 5. This page showcases the team members who contributed to the development and research of the SaveBirds application, including their profiles, positions, and professional contact information.

# 2. Design Requirements

## 2.1. Layout Structure
The Our Team page should consist of two main sections:
- **Team Overview**: Title and introduction
- **Team Members Profiles**: Grid of team member cards

## 2.2. Visual Reference
![Our Team Page Design](images/Our-Team.png)

# 3. Component Specifications

## 3.1. Team Overview
- **Title**:
  - Text: "Our Team"
  - Font: Large, bold, centered (display-4 or similar class)
  - Position: Top of the content area
  - Styling: Clean, professional appearance with appropriate spacing

## 3.2. Team Members Profiles

### 3.2.1. Team Member Card Component
Create a reusable card component for displaying team member information with the following elements:

- **Profile Image**:
  - Style: Circular profile image (180px diameter)
  - Border: Subtle border or shadow effect
  - Quality: High-resolution but optimized for web
  - Alt text: "Profile photo of [Name]"

- **Name**:
  - Font: Bold, larger font size than other text
  - Position: Below the profile image

- **Position/Title**:
  - Font: Regular weight, professional styling
  - Position: Below the name

- **Department/Program**:
  - Font: Regular weight
  - Position: Below the position/title

- **Organization/University**:
  - Font: Regular weight
  - Position: Below the department/program

- **Social/Professional Links**:
  - Display: Horizontal row of icon buttons
  - Icons:
    - Website (globe icon)
    - Email (envelope icon)
    - LinkedIn (LinkedIn logo)
    - Google Scholar (scholar icon)
  - Behavior: 
    - Clickable icons that open links in a new tab
    - Hover effects for better user experience
  - Position: Below the organization information

### 3.2.2. Team Members Data
Include the following team members with their details:

#### 3.2.2.1. Mostafa M. Rezaee
- **Position:** Ph.D. Candidate
- **Department:** Data Science Program
- **Organization:** Bowling Green State University
- **Links:**
  - Website: https://mostafa-mr.com/
  - Email: rezaeem@bgsu.edu
  - LinkedIn: https://www.linkedin.com/in/mostafa-m-rezaee/
  - Google Scholar: https://scholar.google.com/citations?user=jvcCIJYAAAAJ&hl=en

#### 3.2.2.2. Robert C. Green II
- **Position:** Associate Professor
- **Department:** Computer & Data Science
- **Organization:** Bowling Green State University
- **Links:**
  - Website: https://rgreen13.gitlab.io/
  - LinkedIn: https://www.linkedin.com/in/rob-green-6371772/
  - Google Scholar: https://scholar.google.com/citations?hl=en&user=jNzxwwEAAAAJ

#### 3.2.2.3. Andrew Gregory
- **Position:** Assistant Professor
- **Department:** Conservation Biology and Landscape Ecology
- **Organization:** University of North Texas
- **Links:**
  - Website: https://biology.unt.edu/people/andrew-gregory
  - LinkedIn: https://www.linkedin.com/in/andrew-gregory-b1aa51159/
  - Google Scholar: https://scholar.google.com/citations?hl=en&user=I7rG0ksAAAAJ

#### 3.2.2.4. Hamid Shojaei
- **Position:** Senior Data Science Advisor
- **Organization:** Excelacom Inc.
- **Links:**
  - LinkedIn: https://www.linkedin.com/in/hamid-shojaei/
  - Google Scholar: https://scholar.google.com/citations?hl=en&user=RY50kBoAAAAJ

# 4. Responsive Behavior
- **Desktop View**:
  - Grid layout with 4 cards per row on large screens
  - Adequate spacing between cards
  - Consistent card heights

- **Medium Screen View**:
  - Grid layout with 2 cards per row
  - Maintained spacing and alignment

- **Mobile View**:
  - Single-column layout (1 card per row)
  - Full-width cards with appropriate padding
  - Scrollable view with properly sized elements for touch interaction

# 5. Implementation Notes
- Create as a Vue component in `views/OurTeamView.vue`
- Create a reusable TeamMemberCard component in `components/team/TeamMemberCard.vue`
- Use Bootstrap 5 grid system for responsive layout
- Use Bootstrap's card component as a base for the team member cards
- Store team member data in a separate data file or as a computed property
- Ensure all profile images are properly optimized for web (compressed without significant quality loss)
- Implement accessibility features for all interactive elements
- Add hover effects for a better user experience

# 6. Component Data Structure
```javascript
// Team member data structure
const teamMembers = [
  {
    id: 1,
    name: "Mostafa M. Rezaee",
    position: "Ph.D. Candidate",
    department: "Data Science Program",
    organization: "Bowling Green State University",
    image: "images/team/mostafa-rezaee.jpg",
    links: {
      website: "https://mostafa-mr.com/",
      email: "rezaeem@bgsu.edu",
      linkedin: "https://www.linkedin.com/in/mostafa-m-rezaee/",
      googleScholar: "https://scholar.google.com/citations?user=jvcCIJYAAAAJ&hl=en"
    }
  },
  // Additional team members...
]
```

# 7. Code Structure
- Use semantic HTML5 elements (`<section>`, `<article>`, etc.)
- Implement as a single-file component with template, script, and style sections
- Style using Bootstrap classes with minimal custom CSS
- For any custom styles, use scoped CSS to avoid conflicts
- Use v-for directive to iterate through team member data
- Implement appropriate conditional rendering for links (only show links that exist)

# 8. Technical Considerations
- Preload profile images for better performance
- Implement lazy loading for images that are not in the initial viewport
- Use appropriate image formats (WebP with JPEG fallback) for optimal loading
- Ensure all links open in a new tab with proper rel attributes for security
- Use Bootstrap Icons for social media icons
- Ensure consistent sizing of profile photos by standardizing dimensions before implementation
