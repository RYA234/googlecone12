import Link from "next/link";

export default function ImageSearchPage({results}){
    return(
        <div className="pb-24 mt-4">
            <div>
                {results.items.map((result) => (
                    <div key={result.link} className="">
                        <div className="group">
                            <Link href={result.image.contextLink}>
                                <img 
                                    src={result.link} 
                                    alt={result.title} 
                                    className=""
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