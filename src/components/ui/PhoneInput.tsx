'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { getCountries, getCountryCallingCode, isValidPhoneNumber } from 'libphonenumber-js';
import countries from 'world-countries';
import ReactCountryFlag from 'react-country-flag';

interface PhoneInputProps {
  value?: string;
  onChange?: (phoneNumber: string) => void;
  placeholder?: string;
  className?: string;
  defaultCountry?: string;
}

export function PhoneInput({
  value = '',
  onChange,
  placeholder = 'Phone number',
  className = '',
  defaultCountry = 'GB',
}: PhoneInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState(value);

  // Update selected country when defaultCountry prop changes
  React.useEffect(() => {
    setSelectedCountry(defaultCountry);
  }, [defaultCountry]);

  // Get countries with phone codes
  const countriesWithPhoneCodes = useMemo(() => {
    const phoneCountries = getCountries();
    return countries
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter(country => phoneCountries.includes(country.cca2 as any))
      .map(country => ({
        ...country,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callingCode: getCountryCallingCode(country.cca2 as any),
      }))
      .sort((a, b) => a.callingCode.localeCompare(b.callingCode));
  }, []);

  // Filter countries based on search term
  const filteredCountries = useMemo(() => {
    return countriesWithPhoneCodes
      .filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.callingCode.includes(searchTerm)
      )
      .slice(0, 50); // Limit to 50 results for performance
  }, [countriesWithPhoneCodes, searchTerm]);

  const selectedCountryData = countriesWithPhoneCodes.find(
    country => country.cca2 === selectedCountry
  );

  const handleCountrySelect = useCallback((countryCode: string) => {
    setSelectedCountry(countryCode);
    setIsOpen(false);
    setSearchTerm('');
  }, []);

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPhoneNumber(newValue);
    
    // Combine country code with phone number
    const fullNumber = selectedCountryData 
      ? `+${selectedCountryData.callingCode}${newValue}`
      : newValue;
    
    onChange?.(fullNumber);
  }, [selectedCountryData, onChange]);

  const getCountryFlag = useCallback((countryCode: string) => {
    return (
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        style={{
          width: '1.2em',
          height: '0.8em',
          borderRadius: '2px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
        }}
      />
    );
  }, []);

  const isValid = useMemo(() => {
    if (!phoneNumber || !selectedCountryData) return true;
    try {
      const fullNumber = `+${selectedCountryData.callingCode}${phoneNumber}`;
      return isValidPhoneNumber(fullNumber);
    } catch {
      return true;
    }
  }, [phoneNumber, selectedCountryData]);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Inline Phone Input */}
      <div className="flex gap-2">
        {/* Country Code Selector - Smaller */}
        <div className="relative flex-shrink-0 w-32">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 text-left flex items-center justify-between"
          >
            <div className="flex items-center space-x-2">
              {selectedCountryData && (
                <div className="flex-shrink-0">
                  {getCountryFlag(selectedCountryData.cca2)}
                </div>
              )}
              <span className="text-charcoal">
                {selectedCountryData ? `+${selectedCountryData.callingCode}` : 'Select'}
              </span>
            </div>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Country Dropdown */}
          {isOpen && (
            <div className="absolute z-50 w-80 mt-1 bg-white border border-soft-gray shadow-lg max-h-60">
              {/* Search Input */}
              <div className="p-2 border-b border-soft-gray">
                <input
                  type="text"
                  placeholder="Search countries or codes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2 py-1 text-sm border border-soft-gray rounded-none focus:outline-none focus:ring-1 focus:ring-charcoal/20"
                  autoFocus
                />
              </div>

              {/* Country List */}
              <div className="max-h-48 overflow-y-auto">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.cca2}
                      type="button"
                      onClick={() => handleCountrySelect(country.cca2)}
                      className={`w-full px-3 py-2 text-left hover:bg-soft-gray/20 flex items-center space-x-3 text-sm ${
                        selectedCountry === country.cca2 ? 'bg-charcoal/10' : ''
                      }`}
                    >
                      <div className="flex-shrink-0">
                        {getCountryFlag(country.cca2)}
                      </div>
                      <span className="text-charcoal flex-1">{country.name.common}</span>
                      <span className="text-charcoal/70">+{country.callingCode}</span>
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-2 text-sm text-gray-500">
                    No countries found
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Backdrop */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* Phone Number Input - Larger */}
        <div className="relative flex-1">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 ${
              isValid ? 'border-soft-gray' : 'border-red-500'
            }`}
          />
          {!isValid && phoneNumber && (
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Validation Message */}
      {!isValid && phoneNumber && (
        <p className="text-xs text-red-500">
          Please enter a valid phone number
        </p>
      )}
    </div>
  );
}
