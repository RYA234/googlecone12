"use client"

import Link from "next/link";
import {usePathname,useSearchParams} from "next/navigation";
import { BsChevronRight } from "react-icons/bs";


export default function PaginationButton(){
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const startIndex = +searchParams.get("satrt");

    return(
        <div className="">
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col cursor-pointer items-center hover:underline">
            <BsChevronRight className="h-5" />
            <p>Next</p>
          </div>
        </Link>
      )}
        </div>
    )
}