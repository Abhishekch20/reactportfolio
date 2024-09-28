import { RiReactjsLine } from "react-icons/ri"
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
        <h1 className="my-20 text-center text-4xl bg-gradient-to-l from-pink-500  via-slate-500 to-purple-500 bg-clip-text text-transparent">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className="text-4xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className="text-4xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className="text-4xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className="text-4xl text-cyan-400" />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className="text-4xl text-cyan-400" />
            </div>
        </div>
    </div>
  )
}

export default Technologies