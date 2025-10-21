# Contentful Content Model: Hero Section

## Content Type: Hero Section

### Content Type ID: `heroSection`

### Display Field: `headline`

---

## Fields

### 1. **Headline** (Short text)
- **Field ID:** `headline`
- **Field Name:** Headline
- **Required:** Yes
- **Help Text:** Main headline displayed prominently on the hero section
- **Example:** "Crafted with purpose experienced with heart"

### 2. **Subheadline** (Long text)
- **Field ID:** `subheadline`
- **Field Name:** Subheadline
- **Required:** No
- **Help Text:** Optional descriptive text below the headline
- **Example:** "We design journeys, events, and experiences where precision meets emotion."

### 3. **CTA Button Text** (Short text)
- **Field ID:** `ctaButtonText`
- **Field Name:** CTA Button Text
- **Required:** Yes
- **Help Text:** Text displayed on the call-to-action button
- **Example:** "Craft with us"

### 4. **CTA Button Link** (Short text)
- **Field ID:** `ctaButtonLink`
- **Field Name:** CTA Button Link
- **Required:** Yes
- **Help Text:** URL where the CTA button should link to
- **Example:** "/contact" or "https://example.com/contact"

### 5. **Dynamic Words** (JSON Object)
- **Field ID:** `dynamicWords`
- **Field Name:** Dynamic Words
- **Required:** Yes
- **Help Text:** Array of words that will cycle through in the text loop animation
- **Validation:** Must be a JSON array of strings
- **Example:** `["Experiences", "Events", "Travel", "Celebrations", "Journeys", "Concierge"]`

### 6. **Carousel Images** (Media - Multiple files)
- **Field ID:** `carouselImages`
- **Field Name:** Carousel Images
- **Required:** Yes
- **Help Text:** Images for the background carousel. Upload multiple images for smooth transitions
- **Validation:** 
  - Minimum: 2 images
  - Maximum: 10 images
  - Allowed file types: JPG, PNG, WebP
  - Recommended dimensions: 1920x1080px or higher
  - Aspect ratio: 16:9

### 7. **Image Transition Duration** (Number)
- **Field ID:** `imageTransitionDuration`
- **Field Name:** Image Transition Duration (seconds)
- **Required:** No
- **Help Text:** Duration for each image in the carousel before transitioning to the next
- **Default Value:** 5
- **Validation:** 
  - Minimum: 2
  - Maximum: 15
- **Example:** 5 (5 seconds per image)

### 8. **Fade Transition Duration** (Number)
- **Field ID:** `fadeTransitionDuration`
- **Field Name:** Fade Transition Duration (milliseconds)
- **Required:** No
- **Help Text:** Duration of the fade transition between images
- **Default Value:** 1000
- **Validation:** 
  - Minimum: 500
  - Maximum: 3000
- **Example:** 1000 (1 second fade)

### 9. **Text Animation Speed** (Number)
- **Field ID:** `textAnimationSpeed`
- **Field Name:** Text Animation Speed (milliseconds)
- **Required:** No
- **Help Text:** Speed of the text loop animation for dynamic words
- **Default Value:** 2000
- **Validation:** 
  - Minimum: 1000
  - Maximum: 5000
- **Example:** 2000 (2 seconds per word)

### 10. **Overlay Opacity** (Number)
- **Field ID:** `overlayOpacity`
- **Field Name:** Overlay Opacity (0-100)
- **Required:** No
- **Help Text:** Opacity of the dark overlay on top of images (0 = transparent, 100 = fully opaque)
- **Default Value:** 40
- **Validation:** 
  - Minimum: 0
  - Maximum: 100
- **Example:** 40 (40% opacity)

### 11. **Logo Image** (Media - Single file)
- **Field ID:** `logoImage`
- **Field Name:** Logo Image
- **Required:** Yes
- **Help Text:** Company logo displayed in the center of the hero section
- **Validation:** 
  - Allowed file types: SVG, PNG, WebP
  - Recommended dimensions: 400x200px or higher
  - Aspect ratio: 2:1 (landscape)

### 12. **Is Active** (Boolean)
- **Field ID:** `isActive`
- **Field Name:** Is Active
- **Required:** Yes
- **Help Text:** Whether this hero section is currently active and should be displayed
- **Default Value:** true

### 13. **Sort Order** (Number)
- **Field ID:** `sortOrder`
- **Field Name:** Sort Order
- **Required:** No
- **Help Text:** Order in which this hero section should appear (if multiple exist)
- **Default Value:** 0
- **Example:** 0 (first), 1 (second), etc.

---

## Content Type Settings

### **Name:** Hero Section
### **Description:** Main hero section with image carousel and dynamic text animation
### **API Identifier:** `heroSection`

---

## Sample Content Entry

```json
{
  "headline": "Crafted with purpose experienced with heart",
  "subheadline": "We design journeys, events, and experiences where precision meets emotion.",
  "ctaButtonText": "Craft with us",
  "ctaButtonLink": "/contact",
  "dynamicWords": [
    "Experiences",
    "Events", 
    "Travel",
    "Celebrations",
    "Journeys",
    "Concierge"
  ],
  "carouselImages": [
    {
      "url": "https://images.ctfassets.net/.../hero-image-1.webp",
      "title": "Luxury Travel Experience",
      "description": "Beautiful destination for corporate retreats"
    },
    {
      "url": "https://images.ctfassets.net/.../hero-image-2.webp", 
      "title": "Elegant Event Setup",
      "description": "Sophisticated event design and execution"
    },
    {
      "url": "https://images.ctfassets.net/.../hero-image-3.webp",
      "title": "Celebration Venue",
      "description": "Perfect setting for special celebrations"
    }
  ],
  "imageTransitionDuration": 5,
  "fadeTransitionDuration": 1000,
  "textAnimationSpeed": 2000,
  "overlayOpacity": 40,
  "logoImage": {
    "url": "https://images.ctfassets.net/.../logo.svg",
    "title": "Crafted Experiences Logo",
    "description": "Company logo"
  },
  "isActive": true,
  "sortOrder": 0
}
```

---

## Implementation Notes

### **Frontend Integration Considerations:**

1. **Image Carousel:**
   - Use CSS transitions for smooth fade effects
   - Preload next image for seamless transitions
   - Implement lazy loading for performance

2. **Dynamic Text Animation:**
   - Use CSS animations or JavaScript for smooth word transitions
   - Implement fade-in/fade-out effects
   - Ensure accessibility with proper ARIA labels

3. **Responsive Design:**
   - Ensure images scale properly on all devices
   - Adjust text sizes for mobile/tablet/desktop
   - Test carousel performance on mobile devices

4. **Performance:**
   - Optimize images for web (WebP format preferred)
   - Implement image compression
   - Consider using Contentful's image transformation API

5. **Accessibility:**
   - Add alt text for all images
   - Ensure proper color contrast
   - Implement keyboard navigation for carousel
   - Add screen reader support for dynamic text

### **Content Management Tips:**

1. **Image Guidelines:**
   - Use high-quality, professional images
   - Maintain consistent aspect ratios
   - Optimize file sizes for web performance
   - Use descriptive titles and alt text

2. **Text Content:**
   - Keep headlines concise and impactful
   - Ensure dynamic words are relevant to your services
   - Test text length on different screen sizes
   - Consider localization if needed

3. **A/B Testing:**
   - Create multiple hero sections with different content
   - Test different image combinations
   - Experiment with different CTA button text
   - Monitor performance metrics

This content model provides flexibility for content managers while maintaining the technical requirements for the smooth carousel and text animation features you requested.
