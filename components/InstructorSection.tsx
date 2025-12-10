import React from 'react';
import { Award } from 'lucide-react';

export const InstructorSection: React.FC = () => {
    return (
        <section className="py-16 bg-brand-dark">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Who's Teaching
                    </h2>
                    <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 bg-brand-card border border-brand-gray rounded-2xl p-8">
                    {/* Photo */}
                    <div className="shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-brand-orange to-red-600 p-1">
                            <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center overflow-hidden">
                                {/* Placeholder - replace with actual photo */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                    <span className="text-4xl md:text-5xl font-bold text-brand-orange">K</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 rounded-full text-brand-orange text-sm font-medium mb-3">
                            <Award size={14} />
                            AI Systems Expert
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Kenny Nwokoye</h3>
                        <p className="text-gray-400 leading-relaxed max-w-lg">
                            Kenny has helped hundreds of Nigerian business owners leverage AI to create content faster,
                            automate their workflows, and scale their businesses without burning out.
                            He's the go-to expert for making AI work in the Nigerian context.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
