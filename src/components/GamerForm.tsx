import Input from "./Input"
import tickIcon from "../assets/images/icon-tick-16.svg"

type GamerFormProps = {
    callSign: string
    setCallSign: (callSign: string) => void
    email: string
    setEmail: (email: string) => void
    password: string
    setPassword: (password: string) => void
    confirmPassword: string
    setConfirmPassword: (confirmPassword: string) => void
}

export default function GamerForm({
    callSign,
    setCallSign,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword
}: GamerFormProps) {
    return (
        <form className="bg-neutral-900 border border-neutral-600 px-4 py-8 flex flex-col gap-5">
            <div className="preset-6 flex items-center justify-between">
                <span className="text-white">new operator</span>
                <span className="text-neutral-600">all required</span>
            </div>

            <div className="w-full h-px bg-neutral-800"></div>

            <Input
                id={'callSign'}
                value={callSign}
                setValue={setCallSign}
                label={'callsign'}
                placeholder={'e.g. Vortex_07'}
                helperText={'3-20 characters: letters, numbers, _ or -'}
            />

            <Input
                id={'email'}
                type={'email'}
                value={email}
                setValue={setEmail}
                label={'email'}
                placeholder={'you@example.com'}
            />

            <Input
                id={'password'}
                type={'password'}
                value={password}
                setValue={setPassword}
                label={'password'}
                className="tracking-[0.16em]"
            />

            <Input
                id={'confirmPassword'}
                type={'password'}
                value={confirmPassword}
                setValue={setConfirmPassword}
                label={'confirm password'}
                className="tracking-[0.16em]"
            />

            <div className="flex items-start gap-3">
                <label
                    htmlFor="terms"
                    className="relative flex items-center gap-2 cursor-pointer h-6"
                >
                    <input
                        type="checkbox"
                        id="terms"
                        value="accept"
                        required
                        className="peer appearance-none w-5 h-5 shrink-0 rounded-none bg-neutral-950 border border-neutral-600 checked:bg-lime-500 checked:border-lime-500 cursor-pointer transition-all"
                    />

                    <img
                        src={tickIcon}
                        alt=""
                        aria-hidden="true"
                        className="absolute left-0 w-5 h-5 p-0.5 hidden peer-checked:block pointer-events-none"
                    />
                </label>

                <span className="preset-5 text-neutral-600">
                    I accept the <a className="text-lime-500 cursor-pointer" href="#">Terms</a> and <a className="text-lime-500 cursor-pointer" href="#">Privacy Policy</a>
                </span>
            </div>

            <button type="submit" className="preset-5-bold w-full py-2 cursor-pointer bg-lime-500 text-neutral-950">
                initialize account
            </button>

            <span className="text-center preset-5 text-neutral-400">Already an operator? <a className="text-lime-500 cursor-pointer" href="#">Log in</a></span>
        </form>
    )
}