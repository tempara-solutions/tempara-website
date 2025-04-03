"use client";

/**
 * Smoothly scrolls to the specified element ID with improved smoothness
 * @param {string} elementId - The ID of the element to scroll to
 * @param {number} offset - Optional offset from the top of the element (default: 0)
 * @param {Event} event - Optional event to prevent default behavior
 */
export const smoothScrollTo = (elementId, offset = 0, event = null) => {
  // Prevent default anchor click behavior only if event is provided
  if (event) {
    event.preventDefault();
  }
  
  // Guard clause - prevent scrolling if elementId is empty or undefined
  if (!elementId || elementId.trim() === '') {
    console.warn('No elementId provided to smoothScrollTo');
    return;
  }
  
  // Track if this was from a user action (important for preventing random scrolls)
  const isUserAction = event !== null;
  
  // Don't allow programmatic scrolls without user interaction
  if (!isUserAction && !window.userInitiatedScroll) {
    return;
  }
  
  const element = document.getElementById(elementId);
  
  // Only scroll if element exists
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;
    
    // Use the built-in scrollTo with a custom behavior
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else {
    console.warn(`Element with id "${elementId}" not found`);
  }
};

/**
 * A component that wraps links and adds smooth scrolling behavior with enhanced transitions
 */
export const SmoothLink = ({ href, children, className, offset = 80, onClick }) => {
  const handleClick = (e) => {
    // Set a flag for user-initiated scrolling
    window.userInitiatedScroll = true;
    
    // If there's an additional onClick handler, call it
    if (onClick) onClick(e);
    
    // Only proceed with smooth scrolling for anchor links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      // Only attempt to scroll if targetId is not empty
      if (targetId && targetId.trim() !== '') {
        // Pass the event to smoothScrollTo
        smoothScrollTo(targetId, offset, e);
      }
    }
    
    // Reset the user-initiated flag after a moment
    setTimeout(() => {
      window.userInitiatedScroll = false;
    }, 1000);
  };
  
  return (
    <a 
      href={href || '#'} 
      onClick={handleClick} 
      className={`${className} transition-all duration-300`}
    >
      {children}
    </a>
  );
}; 