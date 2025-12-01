'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { BookOpen, Wine, Scroll, Award, Users } from 'lucide-react';

export function CourseCatalog() {
    const courses = [
        {
            title: 'Professional Techniques',
            desc: 'Advanced cocktail creation and mixology methods.',
            icon: Wine,
            color: 'text-pink-500'
        },
        {
            title: 'Norwegian Aquavit Culture',
            desc: 'History, production, and cultural significance.',
            icon: Scroll,
            color: 'text-amber-500'
        },
        {
            title: 'Recipe Development',
            desc: 'From concept to balanced flavor profiles.',
            icon: BookOpen,
            color: 'text-blue-500'
        },
        {
            title: 'Bartender Education',
            desc: 'Comprehensive training for industry professionals.',
            icon: Users,
            color: 'text-green-500'
        },
        {
            title: 'Certification Programs',
            desc: 'Official Himkok Academy certification.',
            icon: Award,
            color: 'text-purple-500'
        }
    ];

    return (
        <Card className="glass-card h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Course Curriculum
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 gap-4">
                    {courses.map((course, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-surface-elevated/50 border border-white/5 hover:bg-white/5 transition-colors group">
                            <div className={`p-2 rounded-lg bg-white/5 ${course.color} group-hover:scale-110 transition-transform`}>
                                <course.icon size={20} />
                            </div>
                            <div>
                                <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors">
                                    {course.title}
                                </h4>
                                <p className="text-sm text-text-secondary mt-1">
                                    {course.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
