export default function OperatorId({
    callSign
}: {
    callSign: string
}) {
    return (
        <div className="flex items-center justify-between">
            <span className="preset-6 text-neutral-600">operator id</span>

            {callSign ? (
                <span className="preset-7 text-white">{callSign}</span>
            ) : (
                <span className="preset-6 text-neutral-600">unassigned</span>
            )}
        </div>
    )
}