/**
 * Get the latest Monday from the current date
 * Used for adjusting lesson schedules to the current week
 */
export const getLatestMonday = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
  const latestMonday = new Date(today);
  latestMonday.setDate(today.getDate() - daysSinceMonday);
  return latestMonday;
};

/**
 * Adjust lesson schedule to the current week
 * @param lessons Array of lessons with title, start, and end dates
 * @returns Adjusted lessons for the current week
 */
export const adjustScheduleToCurrentWeek = (
  lessons: { title: string; start: Date; end: Date }[]
): { title: string; start: Date; end: Date }[] => {
  const latestMonday = getLatestMonday();

  return lessons.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();
    const daysFromMonday = lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1;

    const adjustedStartDate = new Date(latestMonday);
    adjustedStartDate.setDate(latestMonday.getDate() + daysFromMonday);
    adjustedStartDate.setHours(
      lesson.start.getHours(),
      lesson.start.getMinutes(),
      lesson.start.getSeconds()
    );

    const adjustedEndDate = new Date(adjustedStartDate);
    adjustedEndDate.setHours(
      lesson.end.getHours(),
      lesson.end.getMinutes(),
      lesson.end.getSeconds()
    );

    return {
      title: lesson.title,
      start: adjustedStartDate,
      end: adjustedEndDate,
    };
  });
};

/**
 * Format date to string (YYYY-MM-DD)
 */
export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

/**
 * Format date and time to string (YYYY-MM-DD HH:MM)
 */
export const formatDateTime = (date: Date): string => {
  return date.toISOString().slice(0, 16).replace('T', ' ');
};

/**
 * Generate a random OTP code
 */
export const generateOTP = (length: number = 6): string => {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * digits.length)];
  }
  return otp;
};

/**
 * Generate a random username
 */
export const generateUsername = (name: string, surname: string): string => {
  const randomNum = Math.floor(Math.random() * 10000);
  return `${name.toLowerCase()}.${surname.toLowerCase()}${randomNum}`;
};

/**
 * Generate a random password
 */
export const generatePassword = (length: number = 12): string => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
};

/**
 * Slugify a string (convert to URL-friendly format)
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

/**
 * Calculate age from birthday
 */
export const calculateAge = (birthday: Date): number => {
  const today = new Date();
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Check if date is in the past
 */
export const isPast = (date: Date): boolean => {
  return new Date(date) < new Date();
};

/**
 * Check if date is in the future
 */
export const isFuture = (date: Date): boolean => {
  return new Date(date) > new Date();
};

/**
 * Add days to a date
 */
export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

/**
 * Calculate days between two dates
 */
export const daysBetween = (date1: Date, date2: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000;
  return Math.round(Math.abs((date1.getTime() - date2.getTime()) / oneDay));
};

/**
 * Truncate text to specified length
 */
export const truncate = (text: string, length: number): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};

/**
 * Capitalize first letter of each word
 */
export const capitalize = (text: string): string => {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * Parse JSON safely
 */
export const safeJsonParse = <T>(json: string, defaultValue: T): T => {
  try {
    return JSON.parse(json) as T;
  } catch {
    return defaultValue;
  }
};

/**
 * Generate UUID v4
 */
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * Sleep for specified milliseconds
 */
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Retry a function with exponential backoff
 */
export const retry = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delayMs: number = 1000
): Promise<T> => {
  let lastError: Error | undefined;
  
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      if (attempt < maxAttempts) {
        await sleep(delayMs * Math.pow(2, attempt - 1));
      }
    }
  }
  
  throw lastError;
};

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
};

/**
 * Deep clone an object
 */
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

/**
 * Remove undefined and null values from object
 */
export const cleanObject = <T extends Record<string, any>>(obj: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined && value !== null)
  ) as Partial<T>;
};
