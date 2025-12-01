import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const images = [
    "2309_KITCHENS_NORWAY_111.jpg",
    "2309_KITCHENS_NORWAY_112.jpg",
    "2309_KITCHENS_NORWAY_115.jpg",
    "2309_KITCHENS_NORWAY_117.jpg",
    "2309_KITCHENS_NORWAY_118.jpg",
    "2309_KITCHENS_NORWAY_126.jpg",
    "Carl Hilmer Henriksson _ senior bartender .jpg",
    "Enrico Manfredo Mazzanti _ senior bartender .jpg",
    "HIMKOKRTD13.jpg",
    "HIMKOKRTD18.jpg",
    "HIMKOKRTD3.jpg",
    "HIMKOKRTD6.jpg",
    "HIMKOKRTD9.jpg",
    "Himkok_260824_0012.jpg",
    "Himkok_260824_0020.jpg",
    "image00031.jpeg",
    "image00034.jpeg",
    "image00042.jpeg",
    "image00057.jpeg",
    "image00058.jpeg",
    "image00063.jpeg",
];

export default function BrandPage() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-text-primary mb-2">
                    Brand Assets
                </h1>
                <p className="text-text-secondary">
                    Official logos and imagery for Himkok.
                </p>
            </div>

            <div className="space-y-8">
                {/* Logos Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">Logos</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card className="bg-black/90">
                            <CardHeader>
                                <CardTitle className="text-white">White Logo</CardTitle>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center p-8">
                                <img
                                    src="/logo/himkok-logo-white-new.png"
                                    alt="Himkok Logo White"
                                    className="h-16 w-auto"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Images Section */}
                <section>
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">Photography</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {images.map((image) => (
                            <Card key={image} className="overflow-hidden">
                                <div className="aspect-video relative">
                                    <img
                                        src={`/images/${image}`}
                                        alt={image}
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <CardContent className="p-4">
                                    <p className="text-xs text-text-secondary truncate" title={image}>
                                        {image}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
