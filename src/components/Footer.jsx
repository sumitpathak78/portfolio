import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi"

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6 mt-40">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center">

                    {/* logo and description */}
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                        Sumit Pathak

                    </h2>
                    {/* scroll links */}

                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-purple-200">
                            Connect
                        </h3>
                        <div className="flex space-x-4">

                            <a
                                className="text-gray-700 hover:text-violet-400 transition-colors"
                                href="https://www.instagram.com/sumit_pandit78/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiInstagram className="w-5 h-5" />
                            </a>

                            <a
                                className="text-gray-700 hover:text-violet-400 transition-colors"
                                href="https://www.linkedin.com/in/sumit-pandi78/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </a>

                            <a
                                className="text-gray-700 hover:text-violet-400 transition-colors"
                                href="https://github.com/sumitpathak78"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>

                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

                    <p className="text-gray-500 text-sm">
                       Ⓒ  Sumit Pathak. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a className="text-gray-500 hover:text-white text-sm transition-colors"

                            href="#">
                            Privacy Policy
                        </a>

                        <a className="text-gray-500 hover:text-white text-sm transition-colors"

                            href="#">
                            Terms of Service
                        </a>

                    </div>
                </div>




            </div>


        </footer>
    )
}

export default Footer
