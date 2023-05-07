export default function WebSearchResults({results}){
   return(
    <div>
        <p className="text-gray-600 text-sm mb-5 mt-3">
            About {results.searchInformation?.formattedTotalResults}
            results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>  
    </div>
   ) 
}