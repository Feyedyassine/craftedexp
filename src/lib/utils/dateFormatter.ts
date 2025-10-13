/**
 * Format date string to readable format
 * Examples:
 * - "2024-08-20" -> "20 August 2024"
 * - "August 20, 2024" -> "20 August 2024"
 * - "20-08-2024" -> "20 August 2024"
 */
export function formatDate(dateString: string): string {
  // Try to parse the date
  const date = new Date(dateString);
  
  // Check if date is valid
  if (isNaN(date.getTime())) {
    // If not a valid date, return original string
    return dateString;
  }
  
  // Format: "20 August 2024"
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  
  return `${day} ${month} ${year}`;
}

/**
 * Format date range string
 * Example: "April 17 – May 3, 2025" -> "17 April – 3 May 2025"
 */
export function formatDateRange(dateString: string): string {
  // Check if it's a date range (contains dash or hyphen)
  if (dateString.includes('–') || dateString.includes('-')) {
    // Try to parse as range
    const parts = dateString.split(/[–-]/);
    if (parts.length === 2) {
      const startDate = parts[0].trim();
      const endDate = parts[1].trim();
      
      try {
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
          const startDay = start.getDate();
          const startMonth = start.toLocaleString('en-US', { month: 'long' });
          const endDay = end.getDate();
          const endMonth = end.toLocaleString('en-US', { month: 'long' });
          const year = end.getFullYear();
          
          if (start.getMonth() === end.getMonth()) {
            // Same month: "17–3 May 2025"
            return `${startDay}–${endDay} ${endMonth} ${year}`;
          } else {
            // Different months: "17 April – 3 May 2025"
            return `${startDay} ${startMonth} – ${endDay} ${endMonth} ${year}`;
          }
        }
      } catch (_error) {
        // If parsing fails, return original
        return dateString;
      }
    }
  }
  
  // Single date
  return formatDate(dateString);
}

