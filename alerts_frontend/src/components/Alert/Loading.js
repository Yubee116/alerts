export default function Loading(){
    return(
        <div className="flex items-center justify-center">
            <div
                className="inline-block m-12 h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
            </div>
        </div>
    )
}