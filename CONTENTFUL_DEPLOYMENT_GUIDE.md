# Contentful CMS - Deployment & Content Update Guide

## 🚀 How Content Updates Work

Your site now uses **Incremental Static Regeneration (ISR)** with a 60-second revalidation period.

---

## ⏱️ How ISR Works

### **What Happens When You Add/Edit Content:**

1. **You update content in Contentful** (add service, edit case study, etc.)
2. **Production site doesn't update immediately**
3. **After 60 seconds**, the next visitor triggers a rebuild
4. **Page regenerates in background** with fresh Contentful data
5. **New content appears** for all subsequent visitors

### **Timeline Example:**
```
12:00 PM - You add a new service in Contentful
12:00 PM - Visitor sees old content (cached)
12:01 PM - Visitor sees old content (still cached)
12:02 PM - Next visitor triggers rebuild
12:02 PM - Background: Page rebuilds with new service
12:02 PM - This visitor still sees old content
12:03 PM - All new visitors see NEW content ✅
```

---

## 📋 Content Update Scenarios

### **Scenario 1: Quick Update Needed (< 1 minute)**

**Option A: Manual Revalidation (Instant)**
1. Go to your hosting dashboard (Vercel/Netlify/etc.)
2. Trigger a manual redeploy
3. Wait 2-3 minutes for build
4. Content appears immediately ✅

**Option B: API Route Revalidation** (Advanced - requires setup)
- Use Next.js On-Demand Revalidation
- See implementation below

### **Scenario 2: Normal Update (Can wait 1-2 minutes)**

1. Update content in Contentful
2. Wait 60 seconds
3. Visit the page once to trigger rebuild
4. Refresh page
5. New content appears ✅

### **Scenario 3: Multiple Updates Throughout Day**

- ISR handles this automatically
- Each page refreshes independently every 60 seconds
- No manual action needed ✅

---

## 🔄 Revalidation Settings by Page

| Page | Revalidation | Why |
|------|-------------|-----|
| Homepage | 60 seconds | Services, case studies, testimonials update frequently |
| Case Studies List | 60 seconds | New case studies added regularly |
| Case Study Detail | 60 seconds | Content edits and new studies |
| For Corporate | 60 seconds | Services may be added/updated |
| For Individuals | 60 seconds | Services may be added/updated |

---

## 🎯 Adjusting Revalidation Time

### **Make Updates Faster:**
Change `60` to `30` for 30-second updates:
```typescript
export const revalidate = 30;
```

### **Save Server Resources:**
Change to `300` for 5-minute updates:
```typescript
export const revalidate = 300;
```

### **For High-Traffic Sites:**
```typescript
export const revalidate = 3600; // 1 hour
```

---

## 🔧 Option 3: On-Demand Revalidation (Advanced)

For instant updates when you publish in Contentful:

### **Step 1: Create Revalidation API Route**

Create `src/app/api/revalidate/route.ts`:

```typescript
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // Verify secret token for security
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Revalidate all content pages
    revalidatePath('/');
    revalidatePath('/case-studies');
    revalidatePath('/for-corporate');
    revalidatePath('/for-individuals');
    
    // Revalidate all case study pages
    revalidatePath('/case-studies/[slug]', 'page');

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}
```

### **Step 2: Add Environment Variable**

Add to `.env.local`:
```env
REVALIDATION_SECRET=your_random_secret_key_here
```

### **Step 3: Set Up Contentful Webhook**

1. Go to Contentful → **Settings** → **Webhooks**
2. Click **Add webhook**
3. **Name**: Revalidate Production
4. **URL**: `https://your-domain.com/api/revalidate?secret=your_random_secret_key_here`
5. **Trigger on**: 
   - ✅ Publish
   - ✅ Unpublish
   - ✅ Delete
6. **Filter by content type**: 
   - Select: caseStudy, service, testimonial
7. Click **Save**

### **Result:**
- ✅ Instant updates when you publish in Contentful
- ✅ No waiting for revalidation period
- ✅ Secure with secret token

---

## 🎯 Recommended Approach

### **For Most Sites (Your Current Setup):**
✅ **Use ISR with 60-second revalidation**
- Simple
- No webhooks needed
- Works great for most use cases
- Content updates within 1-2 minutes

### **For High-Traffic or Time-Sensitive Sites:**
✅ **Add On-Demand Revalidation**
- Instant updates
- Better user experience
- Requires webhook setup

---

## 🔍 How to Check if ISR is Working

### **Test ISR Locally:**
1. Start production server: `npm run build && npm start`
2. Visit a page
3. Update content in Contentful
4. Wait 60 seconds
5. Refresh the page
6. Content should update!

### **Test in Production:**
1. Deploy your site with ISR enabled
2. Update Contentful content
3. Wait 60 seconds
4. Visit the page
5. Wait for background rebuild (see old content)
6. Refresh page
7. See new content! ✅

---

## 💡 Pro Tips

### **Immediate Production Update:**
1. Update content in Contentful
2. Go to hosting dashboard
3. Trigger redeploy
4. Wait 2-3 minutes
5. Content is live ✅

### **Scheduled Content:**
- ISR works perfectly for scheduled updates
- Just publish in Contentful at your desired time
- Content appears within 60 seconds automatically

### **Cache Busting:**
- Clear browser cache if content doesn't update
- Use incognito mode to test
- Check Network tab for stale responses

---

## ✅ What's Been Updated

I've added `export const revalidate = 60` to:
- ✅ Homepage (`/`)
- ✅ Case Studies listing (`/case-studies`)
- ✅ Case Study detail pages (`/case-studies/[slug]`)
- ✅ For Corporate page (`/for-corporate`)
- ✅ For Individuals page (`/for-individuals`)

---

## 🎊 Summary

### **Current Behavior:**
- Content updates appear within **1-2 minutes** automatically
- No manual intervention needed
- Works for all content types (case studies, services, testimonials)

### **To Get Updates Faster:**
1. **Manual redeploy** (instant, but manual)
2. **Reduce revalidation time** to 30 seconds
3. **Add webhooks** for on-demand revalidation (instant, automatic)

Your production site will now automatically update with new Contentful content! 🚀

