'use client';

import { useState } from 'react';
import { H2, Button, DualRangeSlider, CountrySelector, PhoneInput } from '@/components/ui';
import { useGeolocation } from '@/hooks';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const [activeTab, setActiveTab] = useState<'corporate' | 'individuals'>('individuals');
  const [corporateBudget, setCorporateBudget] = useState({ min: 2000, max: 100000 });
  const [individualBudget, setIndividualBudget] = useState({ min: 500, max: 50000 });
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  // Get user's location for default values
  const { country: userCountry, currency: userCurrency } = useGeolocation();

  const handleCountryChange = (countries: string | string[]) => {
    if (Array.isArray(countries)) {
      setSelectedCountries(countries);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: userCurrency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className={`bg-sand p-6 sm:p-8 lg:p-10 ${className}`}>
      {/* Form Title and Tabs */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6 space-y-4 lg:space-y-0">
        <div className="text-center lg:text-left">
          <H2 className="text-charcoal text-xl sm:text-2xl font-display uppercase tracking-wide">
            {activeTab === 'individuals' ? 'YOUR TRIP' : 'YOUR SERVICE'}
          </H2>
        </div>
        
        {/* Tab Selector */}
        <div className="flex space-x-1 bg-cream/20 p-1 mx-auto lg:mx-0">
          <button
            type="button"
            onClick={() => setActiveTab('individuals')}
            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'individuals'
                ? 'bg-charcoal text-white'
                : 'text-black hover:bg-cream/10'
            }`}
          >
            For Individuals
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('corporate')}
            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeTab === 'corporate'
                ? 'bg-charcoal text-white'
                : 'text-black hover:bg-cream/10'
            }`}
          >
            For Corporate
          </button>
        </div>
      </div>

      <form className="space-y-8">
        {/* Dynamic Content Based on Tab */}
        {activeTab === 'individuals' ? (
          /* YOUR TRIP Section - For Individuals */
          <div className="space-y-6">

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Where would you like to go?
                </label>
                <CountrySelector
                  value={selectedCountries}
                  onChange={handleCountryChange}
                  placeholder="Select countries"
                  multiple={true}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  When would you like to go?
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  How long for?
                </label>
                <input
                  type="text"
                  placeholder="Duration of trip"
                  className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  How many people are travelling?
                </label>
                <select className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20">
                  <option>Select a number</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3-4</option>
                  <option>5-6</option>
                  <option>7+</option>
                </select>
              </div>
            </div>

             <div>
               <label className="block text-sm font-medium text-charcoal mb-2">
                 How much would you like to spend on your trip?
               </label>
                 <DualRangeSlider
                   min={500}
                   max={50000}
                   step={500}
                   value={individualBudget}
                   onChange={setIndividualBudget}
                   formatValue={formatCurrency}
                 />
             </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Any other comments or requests?
              </label>
              <textarea
                placeholder="E.g. special occasion, any must dos or don'ts"
                rows={4}
                className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 resize-none"
              />
            </div>
          </div>
        ) : (
          /* YOUR SERVICE Section - For Corporate */
          <div className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Select the service you&apos;re interested in
              </label>
              <select className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20">
                <option>Select a service</option>
                 <option>Trade Shows</option>
                <option>Conferences</option>
                <option>Incentive Trips</option>
                <option>Team Building</option>
                <option>Product Launches</option>
                <option>Custom Corporate Experience</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Number of Attendees
                </label>
                <select className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20">
                  <option>Select number of attendees</option>
                  <option>10-25</option>
                  <option>26-50</option>
                  <option>51-100</option>
                  <option>101-250</option>
                  <option>250+</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
              </div>

               <div>
                 <label className="block text-sm font-medium text-charcoal mb-2">
                   Budget Range
                 </label>
                 <DualRangeSlider
                   min={2000}
                   max={100000}
                   step={1000}
                   value={corporateBudget}
                   onChange={setCorporateBudget}
                   formatValue={formatCurrency}
                 />
               </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Event Objectives & Requirements
              </label>
              <textarea
                placeholder="Please describe your event objectives, special requirements, venue preferences, and any other details..."
                rows={4}
                className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20 resize-none"
              />
            </div>
          </div>
        )}

        {/* YOUR DETAILS Section */}
        <div className="space-y-6">
          <H2 className="text-charcoal text-xl font-display uppercase tracking-wide">
            YOUR DETAILS
          </H2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal mb-2">
                Your Name
              </label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                />
              </div>
            </div>

                 <div>
                   <label className="block text-sm font-medium text-charcoal mb-2">
                     Email Address
                   </label>
                   <input
                     type="email"
                     placeholder="example@email.com"
                     className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20"
                   />
                 </div>
          </div>

               <div>
                 <label className="block text-sm font-medium text-charcoal mb-2">
                   Telephone
                 </label>
                 <PhoneInput
                   value={phoneNumber}
                   onChange={setPhoneNumber}
                   placeholder="Phone number"
                   defaultCountry={userCountry}
                 />
               </div>

          <div>
            <label className="block text-sm font-medium text-charcoal mb-2">
              How did you hear about us?
            </label>
            <select className="w-full px-3 py-2 border border-soft-gray rounded-none bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-charcoal/20">
              <option>Select</option>
              <option>Google Search</option>
              <option>Social Media</option>
              <option>Referral</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
          </div>

        </div>

        {/* Submit Button */}
        <div className="text-center pt-6">
          <Button
            type="submit"
            size="lg"
            className="bg-charcoal text-cream hover:bg-charcoal/90 font-semibold px-8 py-3 text-lg uppercase tracking-wide"
          >
            Submit Enquiry
          </Button>
        </div>
      </form>
    </div>
  );
}
