import ncLogo from '../assets/images/logo.svg';

export default function NCLogo({
    className
}: {
    className?: string
}) {
    return (
        <>
            <img src={ncLogo} alt="logo" className={className} />
        </>
    )
}