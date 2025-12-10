import React from 'react';
import { Clock, Users, DollarSign } from 'lucide-react';

export const InstructorSection: React.FC = () => {
    const stats = [
        { value: "6+", label: "YEARS EXP", icon: <Clock size={20} className="text-brand-orange" /> },
        { value: "25,000+", label: "STUDENTS", icon: <Users size={20} className="text-brand-orange" /> },
        { value: "$3M+", label: "GENERATED", icon: <DollarSign size={20} className="text-brand-orange" /> }
    ];

    return (
        <section className="py-20 bg-brand-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tag */}
                <div className="text-center mb-6">
                    <span className="inline-block px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full text-brand-orange text-sm font-semibold uppercase tracking-wider">
                        Meet Your Instructor
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                    Who Is Behind AI Business Mastery?
                </h2>

                <div className="bg-brand-card border border-brand-gray rounded-2xl p-8 md:p-12">
                    {/* Photo */}
                    <div className="flex justify-center mb-8">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-brand-orange/30 shadow-lg shadow-brand-orange/10">
                            <img
                                src="/kenny.jpg.jpeg"
                                alt="Kenny Nwokoye"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white text-center mb-6">Kenny Nwokoye</h3>

                    {/* Bio */}
                    <div className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto text-center">
                        <p>
                            I'm not just another "AI Expert" who popped up yesterday. I'm an internet entrepreneur who has built real businesses to scale. I spent years doing things the hard way—manually writing copy, designing funnels, and creating content—before realizing there was a better way.
                        </p>
                        <p>
                            I built this system because I needed it. Now, I'm handing you the exact playbook I use to run a simple, high-profit AI powered operation whether you have a team or not.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-brand-gray">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    {stat.icon}
                                    <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                                </div>
                                <span className="text-xs text-gray-500 font-semibold tracking-wider">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
