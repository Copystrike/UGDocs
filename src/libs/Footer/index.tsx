export const Footer = () => {

    // Create a footer that will be at the bottom of the page
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center">
                <p className="font-thin text-center">
                    <p className="text-gray-500">This website is hosted on <a className="underline underline-offset-1" href="https://github.com/Copystrike/UGDocs">Github</a>.<br /> </p>

                    <p className="mt-1 text-xs text-slate-400">Please leave a ⭐ if you like it, it means alot to me.</p>

                </p>
            </div>
        </div>
    )
}
