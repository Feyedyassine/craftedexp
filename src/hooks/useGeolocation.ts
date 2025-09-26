'use client';

import { useState, useEffect } from 'react';

interface GeolocationData {
  country: string;
  currency: string;
  loading: boolean;
  error: string | null;
}

// Country to currency mapping
const countryToCurrency: Record<string, string> = {
  'GB': 'GBP',
  'US': 'USD',
  'CA': 'CAD',
  'AU': 'AUD',
  'DE': 'EUR',
  'FR': 'EUR',
  'IT': 'EUR',
  'ES': 'EUR',
  'NL': 'EUR',
  'BE': 'EUR',
  'AT': 'EUR',
  'IE': 'EUR',
  'PT': 'EUR',
  'FI': 'EUR',
  'GR': 'EUR',
  'LU': 'EUR',
  'MT': 'EUR',
  'CY': 'EUR',
  'SI': 'EUR',
  'SK': 'EUR',
  'EE': 'EUR',
  'LV': 'EUR',
  'LT': 'EUR',
  'JP': 'JPY',
  'KR': 'KRW',
  'CN': 'CNY',
  'IN': 'INR',
  'BR': 'BRL',
  'MX': 'MXN',
  'AR': 'ARS',
  'CL': 'CLP',
  'CO': 'COP',
  'PE': 'PEN',
  'ZA': 'ZAR',
  'NG': 'NGN',
  'EG': 'EGP',
  'KE': 'KES',
  'MA': 'MAD',
  'DZ': 'DZD',
  'TN': 'TND',
  'RU': 'RUB',
  'TR': 'TRY',
  'IL': 'ILS',
  'AE': 'AED',
  'SA': 'SAR',
  'QA': 'QAR',
  'KW': 'KWD',
  'BH': 'BHD',
  'OM': 'OMR',
  'JO': 'JOD',
  'LB': 'LBP',
  'SY': 'SYP',
  'IQ': 'IQD',
  'IR': 'IRR',
  'AF': 'AFN',
  'PK': 'PKR',
  'BD': 'BDT',
  'LK': 'LKR',
  'NP': 'NPR',
  'BT': 'BTN',
  'MV': 'MVR',
  'TH': 'THB',
  'VN': 'VND',
  'KH': 'KHR',
  'LA': 'LAK',
  'MM': 'MMK',
  'MY': 'MYR',
  'SG': 'SGD',
  'ID': 'IDR',
  'PH': 'PHP',
  'TW': 'TWD',
  'HK': 'HKD',
  'MO': 'MOP',
  'NZ': 'NZD',
  'FJ': 'FJD',
  'PG': 'PGK',
  'SB': 'SBD',
  'VU': 'VUV',
  'NC': 'XPF',
  'PF': 'XPF',
  'WF': 'XPF',
  'CH': 'CHF',
  'NO': 'NOK',
  'SE': 'SEK',
  'DK': 'DKK',
  'IS': 'ISK',
  'PL': 'PLN',
  'CZ': 'CZK',
  'HU': 'HUF',
  'RO': 'RON',
  'BG': 'BGN',
  'HR': 'HRK',
  'RS': 'RSD',
  'BA': 'BAM',
  'MK': 'MKD',
  'AL': 'ALL',
  'ME': 'EUR',
  'XK': 'EUR',
  'MD': 'MDL',
  'UA': 'UAH',
  'BY': 'BYN',
  'GE': 'GEL',
  'AM': 'AMD',
  'AZ': 'AZN',
  'KZ': 'KZT',
  'UZ': 'UZS',
  'KG': 'KGS',
  'TJ': 'TJS',
  'TM': 'TMT',
  'MN': 'MNT',
};

// Default fallback values
const DEFAULT_COUNTRY = 'GB';
const DEFAULT_CURRENCY = 'GBP';

// Cache key for localStorage
const CACHE_KEY = 'geolocation_data';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

interface CachedData {
  country: string;
  currency: string;
  timestamp: number;
}

export function useGeolocation(): GeolocationData {
  const [country, setCountry] = useState<string>(DEFAULT_COUNTRY);
  const [currency, setCurrency] = useState<string>(DEFAULT_CURRENCY);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        // Check cache first
        const cached = getCachedData();
        if (cached) {
          setCountry(cached.country);
          setCurrency(cached.currency);
          setLoading(false);
          return;
        }

        // Try primary service (ipapi.co)
        try {
          const response = await fetch('https://ipapi.co/json/', {
            timeout: 5000,
          } as RequestInit);
          
          if (response.ok) {
            const data = await response.json();
            const detectedCountry = data.country_code || DEFAULT_COUNTRY;
            const detectedCurrency = countryToCurrency[detectedCountry] || DEFAULT_CURRENCY;
            
            setCountry(detectedCountry);
            setCurrency(detectedCurrency);
            
            // Cache the result
            setCachedData(detectedCountry, detectedCurrency);
            setLoading(false);
            return;
          }
        } catch (primaryError) {
          console.warn('Primary geolocation service failed:', primaryError);
        }

        // Try fallback service (ip-api.com)
        try {
          const response = await fetch('http://ip-api.com/json/', {
            timeout: 5000,
          } as RequestInit);
          
          if (response.ok) {
            const data = await response.json();
            const detectedCountry = data.countryCode || DEFAULT_COUNTRY;
            const detectedCurrency = countryToCurrency[detectedCountry] || DEFAULT_CURRENCY;
            
            setCountry(detectedCountry);
            setCurrency(detectedCurrency);
            
            // Cache the result
            setCachedData(detectedCountry, detectedCurrency);
            setLoading(false);
            return;
          }
        } catch (fallbackError) {
          console.warn('Fallback geolocation service failed:', fallbackError);
        }

        // If all services fail, use defaults
        setCountry(DEFAULT_COUNTRY);
        setCurrency(DEFAULT_CURRENCY);
        setError('Unable to detect location, using default values');
        setLoading(false);

      } catch (error) {
        console.error('Geolocation error:', error);
        setCountry(DEFAULT_COUNTRY);
        setCurrency(DEFAULT_CURRENCY);
        setError('Geolocation service unavailable');
        setLoading(false);
      }
    };

    fetchGeolocation();
  }, []);

  return { country, currency, loading, error };
}

// Helper functions for caching
function getCachedData(): CachedData | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const data: CachedData = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is expired
    if (now - data.timestamp > CACHE_EXPIRY) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    
    return data;
  } catch (error) {
    console.warn('Failed to read cached geolocation data:', error);
    return null;
  }
}

function setCachedData(country: string, currency: string): void {
  try {
    const data: CachedData = {
      country,
      currency,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to cache geolocation data:', error);
  }
}
