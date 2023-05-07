import Link from "next/link";

export default function WebSearchResults({results}){
   return(
    <div>
        <p className="text-gray-600 text-sm mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults}
            results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>  
        {results.items?.map((result) => (
            <div className="mb-8 max-w-xl" key={result.link}>
                <div className="group flex flex-col">
                    <Link className="text-sm truncate" href={result.link}>
                        {result.formattedUrl}
                    </Link>
                    <Link className="group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-900" href={result.link}>
                        {result.title}
                    </Link>
                    <p className="text-gray-600">
                        {result.htmlSnippet}
                    </p>
                </div>
            </div>
        ))}
    </div>
   ) 
}