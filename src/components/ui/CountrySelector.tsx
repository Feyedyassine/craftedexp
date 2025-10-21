'use client';

import { useState, useMemo } from 'react';
import countries from 'world-countries';
import ReactCountryFlag from 'react-country-flag';

interface CountrySelectorProps {
  value?: string | string[];
  onChange?: (countryCode: string | string[]) => void;
  placeholder?: string;
  className?: string;
  multiple?: boolean;
}

export function CountrySelector({
  value,
  onChange,
  placeholder = "Select a country",
  className = "",
  multiple = false,
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter countries based on search term
  const filteredCountries = useMemo(() => {
    return countries
      .filter(country => 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 50); // Limit to 50 results for performance
  }, [searchTerm]);

  const selectedCountries = useMemo(() => {
    if (multiple && Array.isArray(value)) {
      return countries.filter(country => value.includes(country.cca2));
    } else if (!multiple && typeof value === 'string') {
      return countries.filter(country => country.cca2 === value);
    }
    return [];
  }, [value, multiple]);

  const getCountryFlag = (countryCode: string) => {
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
  };

  const handleCountrySelect = (countryCode: string) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(countryCode)
        ? currentValues.filter(code => code !== countryCode)
        : [...currentValues, countryCode];
      onChange?.(newValues);
    } else {
      onChange?.(countryCode);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const isCountrySelected = (countryCode: string) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(countryCode);
    } else if (!multiple && typeof value === 'string') {
      return value === countryCode;
    }
    return false;
  };

  return (
    <div className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 text-left flex items-center justify-between"
      >
        <div className="flex items-center space-x-2">
          {selectedCountries.length > 0 ? (
            <div className="flex items-center space-x-1">
              {selectedCountries.slice(0, 3).map((country) => (
                <div key={country.cca2} className="flex-shrink-0">
                  {getCountryFlag(country.cca2)}
                </div>
              ))}
              {selectedCountries.length > 3 && (
                <span className="text-sm text-charcoal">+{selectedCountries.length - 3}</span>
              )}
            </div>
          ) : null}
          <span className={selectedCountries.length > 0 ? 'text-charcoal' : 'text-gray-500'}>
            {selectedCountries.length > 0 
              ? multiple 
                ? `${selectedCountries.length} countr${selectedCountries.length === 1 ? 'y' : 'ies'} selected`
                : selectedCountries[0].name.common
              : placeholder
            }
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

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-soft-gray shadow-lg max-h-60">
          {/* Search Input */}
          <div className="p-2 border-b border-soft-gray">
            <input
              type="text"
              placeholder="Search countries..."
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
                    isCountrySelected(country.cca2) ? 'bg-charcoal/10' : ''
                  }`}
                >
                  <div className="flex-shrink-0">
                    {getCountryFlag(country.cca2)}
                  </div>
                  <span className="text-charcoal flex-1">{country.name.common}</span>
                  {isCountrySelected(country.cca2) && (
                    <svg className="w-4 h-4 text-charcoal" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
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
  );
}
