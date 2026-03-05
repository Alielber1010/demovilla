"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Select from "react-select";
import { Home, Heart, ChevronDown, MapPin, Search, X, SlidersHorizontal, Building2, CircleDollarSign, Bed } from "lucide-react";

const locationOptions = [
  { value: "auckland", label: "Auckland, NZ" },
  { value: "wellington", label: "Wellington, NZ" },
  { value: "christchurch", label: "Christchurch, NZ" },
  { value: "queenstown", label: "Queenstown, NZ" },
  { value: "hamilton", label: "Hamilton, NZ" },
  { value: "tauranga", label: "Tauranga, NZ" },
];

export default function App() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [purpose, setPurpose] = useState('Rent');
  const [propertyType, setPropertyType] = useState('All');
  const [beds, setBeds] = useState('All');

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-5 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-slate-900 p-2 rounded-full flex items-center justify-center">
            <Home className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Buddy <span className="text-emerald-500 font-medium">Estates</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
          <a href="#" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">Properties</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">Map</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">News</a>
          <a href="#" className="hover:text-emerald-500 transition-colors">About</a>
        </div>

        {/* Right Nav */}
        <div className="flex items-center gap-6">
          <button className="text-slate-500 hover:text-red-500 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-4 mx-auto max-w-7xl mb-16 relative z-30">
        <div className="relative h-[500px] flex flex-col items-center justify-center">
          {/* Background image container with hidden overflow so it doesn't clip children positioned outside */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-sm">
            <Image
              src="/hero.png"
              alt="Hero Property"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay to darken image slightly for text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative z-40 flex flex-col items-center gap-8 w-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-sm">
              Find your dream property!
            </h1>

            {/* New Search Bar Component (PropertyGuru style) */}
            <div className="relative w-full max-w-4xl z-50 flex flex-col gap-4">

              {/* Top Row: Location Input + Save Search Button */}
              <div className="flex gap-4 items-center w-full">
                <div className="flex-1 bg-white p-2 pl-4 flex items-center shadow-lg rounded-full border border-slate-200 h-[60px]">
                  <Search className="w-5 h-5 text-slate-400 mr-2" />
                  <div className="flex-1 z-50">
                    <Select
                      options={locationOptions}
                      placeholder="Search Location..."
                      isClearable
                      styles={{
                        control: (base) => ({
                          ...base,
                          border: 0,
                          boxShadow: 'none',
                          backgroundColor: 'transparent',
                          minHeight: '44px',
                          cursor: 'text'
                        }),
                        placeholder: (base) => ({
                          ...base,
                          color: '#94a3b8',
                          fontSize: '16px'
                        }),
                        singleValue: (base) => ({
                          ...base,
                          fontWeight: 500,
                          color: '#0f172a'
                        }),
                        indicatorSeparator: () => ({ display: 'none' })
                      }}
                    />
                  </div>
                </div>

                <button className="hidden md:flex h-[60px] px-8 bg-white border border-slate-200 text-slate-800 rounded-full font-bold shadow-lg items-center gap-2 hover:bg-slate-50 transition-colors">
                  <Heart className="w-5 h-5" />
                  Save Search
                </button>
              </div>

              {/* Bottom Row: Filter Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <button onClick={() => setIsFilterModalOpen(true)} className="bg-white border border-slate-200 hover:border-slate-300 shadow-sm text-slate-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm">
                  <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
                  Filters
                </button>
                <button onClick={() => setIsFilterModalOpen(true)} className="bg-white border border-slate-200 hover:border-slate-300 shadow-sm text-slate-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm">
                  <Building2 className="w-4 h-4 text-emerald-600" />
                  Property Type
                </button>
                <button onClick={() => setIsFilterModalOpen(true)} className="bg-white border border-slate-200 hover:border-slate-300 shadow-sm text-slate-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm">
                  <CircleDollarSign className="w-4 h-4 text-emerald-600" />
                  Price
                </button>
                <button onClick={() => setIsFilterModalOpen(true)} className="bg-white border border-slate-200 hover:border-slate-300 shadow-sm text-slate-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm">
                  <Bed className="w-4 h-4 text-emerald-600" />
                  Bedroom
                </button>
                <button onClick={() => setIsFilterModalOpen(true)} className="bg-white border border-slate-200 hover:border-slate-300 shadow-sm text-slate-700 px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm relative pr-8">
                  Everyone Welc...
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>

              {/* Center Modal for Filters */}
              {isFilterModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                  {/* Backdrop */}
                  <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setIsFilterModalOpen(false)}
                  />

                  {/* Modal Container */}
                  <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh]">

                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-900 text-white">
                      <h2 className="text-xl font-bold">Filters</h2>
                      <button
                        onClick={() => setIsFilterModalOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Scrollable Body */}
                    <div className="p-6 overflow-y-auto flex flex-col gap-8 flex-1">

                      {/* Purpose Toggle */}
                      <div className="bg-slate-100 p-1 rounded-full flex w-fit">
                        <button
                          onClick={() => setPurpose('Buy')}
                          className={`px-8 py-2.5 rounded-full font-bold text-sm transition-colors ${purpose === 'Buy' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                          Buy
                        </button>
                        <button
                          onClick={() => setPurpose('Rent')}
                          className={`px-8 py-2.5 rounded-full font-bold text-sm transition-colors ${purpose === 'Rent' ? 'bg-slate-900 shadow-sm text-white' : 'text-slate-500 hover:text-slate-700'}`}
                        >
                          Rent
                        </button>
                      </div>

                      {/* Property Type */}
                      <div className="flex flex-col gap-3">
                        <h3 className="font-bold text-slate-800 flex items-center justify-between">
                          Property Type
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {['All', 'Villa', 'Apartment', 'Townhouse'].map((type) => (
                            <button
                              key={type}
                              onClick={() => setPropertyType(type)}
                              className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${propertyType === type
                                  ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                                  : 'border-slate-300 text-slate-600 hover:border-slate-400 bg-white'
                                }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price Matrix */}
                      <div className="flex flex-col gap-3 border-t border-slate-100 pt-6">
                        <h3 className="font-bold text-slate-800 flex items-center justify-between">
                          Price
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </h3>
                        <div className="flex gap-4 items-center w-full mt-1">
                          <div className="flex-1 flex flex-col gap-1.5">
                            <span className="text-xs font-bold text-slate-500 uppercase">Minimum</span>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">$</span>
                              <input type="text" placeholder="Min" className="w-full pl-9 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-800 bg-white" />
                            </div>
                          </div>

                          <div className="flex-1 flex flex-col gap-1.5">
                            <span className="text-xs font-bold text-slate-500 uppercase">Maximum</span>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">$</span>
                              <input type="text" placeholder="Max" className="w-full pl-9 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-800 bg-white" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bedroom Pills */}
                      <div className="flex flex-col gap-3 border-t border-slate-100 pt-6 mb-2">
                        <h3 className="font-bold text-slate-800 flex items-center justify-between">
                          Bedroom
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {['All', '1-2 Beds', '3-4 Beds', '5+ Beds'].map((bedOpt) => (
                            <button
                              key={bedOpt}
                              onClick={() => setBeds(bedOpt)}
                              className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all ${beds === bedOpt
                                  ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                                  : 'border-slate-300 text-slate-600 hover:border-slate-400 bg-white'
                                }`}
                            >
                              {bedOpt}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Fixed Footer */}
                    <div className="p-5 border-t border-slate-100 bg-white flex items-center justify-center gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] relative z-10">
                      <button
                        onClick={() => setIsFilterModalOpen(false)}
                        className="flex-1 py-3.5 px-6 rounded-full border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors"
                      >
                        Clear
                      </button>
                      <button
                        onClick={() => setIsFilterModalOpen(false)}
                        className="flex-1 py-3.5 px-6 rounded-full bg-[#d60000] hover:bg-[#b00000] text-white font-bold shadow-lg transition-colors border-2 border-[#d60000] hover:border-[#b00000]"
                      >
                        Apply
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <h2 className="text-2xl font-bold text-center mb-10 text-slate-900">
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Property 1 */}
          <Link href="/property/1264" className="group cursor-pointer block">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image
                src="/prop1.png"
                alt="45 Green Lane"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                <Home className="w-4 h-4 text-slate-700" />
                <span className="font-bold text-sm text-slate-900">1264</span>
              </div>
            </div>
            <div className="flex justify-between items-start px-1">
              <div>
                <h3 className="text-slate-900 font-medium">45 Green Lane</h3>
                <p className="text-slate-500 text-sm mt-1">Foxborough, FG34 5HJ</p>
              </div>
              <div className="text-slate-300 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </Link>

          {/* Property 2 */}
          <Link href="/property/1668" className="group cursor-pointer block">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image
                src="/prop2.png"
                alt="32 Elmwood Street"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                <Home className="w-4 h-4 text-slate-700" />
                <span className="font-bold text-sm text-slate-900">1668</span>
              </div>
            </div>
            <div className="flex justify-between items-start px-1">
              <div>
                <h3 className="text-slate-900 font-medium">32 Elmwood Street</h3>
                <p className="text-slate-500 text-sm mt-1">Kingsbridge, KB67 8LM</p>
              </div>
              <div className="text-red-500 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5 fill-current" />
              </div>
            </div>
          </Link>

          {/* Property 3 */}
          <Link href="/property/1417" className="group cursor-pointer block">
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <Image
                src="/prop3.png"
                alt="12 Birchwood Close"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-md flex items-center gap-2 shadow-sm">
                <Home className="w-4 h-4 text-slate-700" />
                <span className="font-bold text-sm text-slate-900">1417</span>
              </div>
            </div>
            <div className="flex justify-between items-start px-1">
              <div>
                <h3 className="text-slate-900 font-medium">12 Birchwood Close</h3>
                <p className="text-slate-500 text-sm mt-1">Summerhill, SH34 7GH</p>
              </div>
              <div className="text-slate-300 hover:text-red-500 transition-colors">
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div >
  );
}
