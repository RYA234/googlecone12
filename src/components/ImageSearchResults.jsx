import Link from "next/link";

export default function ImageSearchPage({results}){
    return(
        <div className="pb-24 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {results.items.map((result) => (
                    <div key={result.link} className="">
                        <div className="group">
                            <Link href={result.image.contextLink}>
                                <img 
                                    src={result.link} 
                                    alt={result.title} 
                                    className="h-60 w-full object-contain"
                                />
                            </Link>
                            <Link href={result.image.contextLink}>
                                <h2 className="">
                                    {result.title}
                                </h2>
                            </Link>
                            <Link href={result.image.contextLink}>
                                <p className="">
                                    {result.displayLink}
                                </p>
                            </Link>                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}