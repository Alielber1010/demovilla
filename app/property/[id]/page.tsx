import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Heart, Share, Star, MapPin, Bed, Bath, Maximize, Calendar, User } from "lucide-react";

export default function PropertyPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 pb-24">
            {/* Navigation Bar (simplified for inner page) */}
            <nav className="flex items-center justify-between px-8 py-5 mx-auto max-w-7xl">
                <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                    <span className="font-medium">Back to search</span>
                </Link>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors font-medium text-sm">
                        <Share className="w-4 h-4" /> Share
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50 rounded-full transition-colors font-medium text-sm">
                        <Heart className="w-4 h-4" /> Save
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-8 mt-4">
                {/* Title Section */}
                <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Modern Villa with Pool</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1 font-medium text-slate-900">
                            <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                            <span>4.96</span>
                        </div>
                        <span className="text-slate-300">•</span>
                        <a href="#" className="underline font-medium hover:text-slate-900">128 reviews</a>
                        <span className="text-slate-300">•</span>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>Foxborough, New Zealand</span>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[50vh] min-h-[400px] mb-12 rounded-2xl overflow-hidden">
                    <div className="relative h-full w-full">
                        <Image
                            src="/prop1.png"
                            alt="Main property view"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                    </div>
                    <div className="hidden md:grid grid-rows-2 gap-4 h-full">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <div className="relative h-full w-full">
                                <Image src="/prop2.png" alt="Interior view" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="relative h-full w-full">
                                <Image src="/prop3.png" alt="Patio view" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                        <div className="relative h-full w-full">
                            <Image src="/hero.png" alt="Exterior evening" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-start pb-6 border-b border-slate-200">
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Entire villa hosted by Buddy Estates</h2>
                                <div className="flex gap-4 text-slate-600">
                                    <span>8 guests</span>
                                    <span>•</span>
                                    <span>4 bedrooms</span>
                                    <span>•</span>
                                    <span>5 beds</span>
                                    <span>•</span>
                                    <span>3 baths</span>
                                </div>
                            </div>
                            <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white">
                                <User className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Quick Amenities */}
                        <div className="py-8 border-b border-slate-200 grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <Bed className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Room for everyone</h3>
                                    <p className="text-sm text-slate-500">4 spacious bedrooms with king beds.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Bath className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Luxury bathrooms</h3>
                                    <p className="text-sm text-slate-500">3 full baths with premium amenities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Maximize className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Spacious living</h3>
                                    <p className="text-sm text-slate-500">Over 3,000 sq ft of indoor/outdoor space.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Star className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="font-semibold">Highly rated</h3>
                                    <p className="text-sm text-slate-500">Recent guests loved the location.</p>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="py-8 border-b border-slate-200">
                            <h2 className="text-xl font-bold mb-4">About this space</h2>
                            <div className="text-slate-600 space-y-4 leading-relaxed">
                                <p>
                                    Experience luxury living in this stunning modern villa. Perfectly blending indoor and outdoor living,
                                    this architectural masterpiece features floor-to-ceiling glass doors that open up to a pristine
                                    swimming pool and beautifully landscaped gardens.
                                </p>
                                <p>
                                    The open-concept living area boasts a chef's kitchen with high-end appliances, a spacious dining
                                    area bathed in natural light, and a comfortable lounge perfect for evening relaxation.
                                </p>
                            </div>
                            <button className="text-emerald-600 font-semibold underline mt-4 hover:text-emerald-700">
                                Show more
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Booking Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8 bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
                            <div className="flex items-end justify-between mb-6">
                                <div>
                                    <span className="text-2xl font-bold">$450</span>
                                    <span className="text-slate-500"> / night</span>
                                </div>
                            </div>

                            {/* Form Inputs (Visual Only) */}
                            <div className="border border-slate-300 rounded-xl overflow-hidden mb-4">
                                <div className="flex border-b border-slate-300">
                                    <div className="flex-1 p-3 border-r border-slate-300">
                                        <div className="text-[10px] font-bold uppercase text-slate-800">Check-in</div>
                                        <div className="text-sm text-slate-500 mt-1">Add date</div>
                                    </div>
                                    <div className="flex-1 p-3">
                                        <div className="text-[10px] font-bold uppercase text-slate-800">Checkout</div>
                                        <div className="text-sm text-slate-500 mt-1">Add date</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="text-[10px] font-bold uppercase text-slate-800">Guests</div>
                                    <div className="text-sm text-slate-500 mt-1">1 guest</div>
                                </div>
                            </div>

                            <button className="w-full bg-[#65b32e] hover:bg-[#5aa128] text-white py-4 rounded-xl font-bold text-lg transition-colors mb-4">
                                Request to Book
                            </button>

                            <div className="text-center text-sm text-slate-500 mb-6">
                                You won't be charged yet
                            </div>

                            {/* Price Breakdown */}
                            <div className="space-y-3 pb-6 border-b border-slate-200">
                                <div className="flex justify-between text-slate-600">
                                    <span className="underline">$450 x 5 nights</span>
                                    <span>$2,250</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span className="underline">Cleaning fee</span>
                                    <span>$120</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span className="underline">Service fee</span>
                                    <span>$315</span>
                                </div>
                            </div>
                            <div className="flex justify-between font-bold text-lg pt-6">
                                <span>Total</span>
                                <span>$2,685</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
