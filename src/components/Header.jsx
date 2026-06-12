import { ListIcon, RocketLaunchIcon } from "@phosphor-icons/react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[100]">
            <div className="mx-auto max-w-[1440px] px-6 py-5">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl px-6 py-4">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500/30">
                            <RocketLaunchIcon size={20} weight="duotone" />
                        </div>

                        <div>
                            <h3 className="font-bold text-xl tracking-wide text-white">
                                MotionLab
                            </h3>
                            <p className="text-xs text-gray-400">
                                Animation Framework
                            </p>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-10">
                        {[
                            "Features",
                            "Technology",
                            "Showcase",
                            "Pricing"
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
                            >
                                {item}

                                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        <button className="hidden md:flex px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30">
                            Start Now
                        </button>

                        <button className="md:hidden">
                            <ListIcon size={32} color="#ffff"/>
                        </button>

                    </div>
                </div>
            </div>
        </header>
    );
}
