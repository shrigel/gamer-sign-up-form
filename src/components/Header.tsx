import NCLogo from "./NCLogo";
import OperatorId from "./OperatorId";

export default function Header({
    callSign
}: {
    callSign: string
}) {
    return (
        <header>
            <div className="flex items-center justify-between mb-6">
                <NCLogo />
                <span className="preset-6 text-neutral-600">0/5 ready</span>
            </div>

            <h1 className="preset-1 text-white mb-3"><span className="text-lime-500">//</span> Join the Nexus</h1>
            <p className="preset-6 text-neutral-400 mb-6">initialize your neoncore identity</p>

            <div className="w-full h-px bg-neutral-800 my-4"></div>

            <OperatorId
                callSign={callSign}
            />
        </header>
    )
}