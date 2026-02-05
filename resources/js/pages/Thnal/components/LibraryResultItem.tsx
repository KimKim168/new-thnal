interface LibraryResultItemProps {
    item: {
        id: number;
        title: string;
        authors: string[];
        summary: string;
        language: string;
        year: number;
        publisher: string;
        location?: string;
        thumbnail: string;
        format?: string;
        externalLink?: string;
    };
}

export default function LibraryResultItem({ item }: LibraryResultItemProps) {
    return (
        <div className="hover:shadow-gray flex gap-6 border-b p-6 transition-all duration-500 hover:scale-105 hover:shadow-lg">
            {/* Left: Book Cover */}
            <div className="w-32 shrink-0">
                <img src={item.thumbnail} alt={item.title} className="w-full" />
            </div>

            {/* Right: Content */}
            <a
                href="/book-detail/1"
                // href={item?.externalLink}
                className="flex-1"
            >
                {/* Title */}
                <h2 className="cursor-pointer text-lg font-semibold text-blue-600 hover:underline">{item.title}</h2>

                {/* Authors */}
                <div className="mt-1 text-sm">
                    <span className="font-semibold">Authors:</span>{' '}
                    {item.authors.map((author, index) => (
                        <span key={author} className="cursor-pointer text-blue-600 hover:underline">
                            {author}
                            {index < item.authors.length - 1 && ', '}
                        </span>
                    ))}
                </div>

                {/* Summary */}
                <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Description:</span> {item.summary}
                </p>

                <button className="mt-1 flex items-center gap-1 text-sm text-blue-600 hover:underline">Show more</button>

                {/* Metadata */}
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 font-medium">📘 {item.format ?? 'eBook'}</span>
                    <span>
                        {item.language}, {item.year}
                    </span>
                </div>

                {/* Publisher */}
                <div className="mt-2 text-sm">
                    <span className="font-semibold">Publisher:</span> {item.publisher}
                    {item.location && `, ${item.location}`}
                </div>
            </a>
        </div>
    );
}
