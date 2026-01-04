export default function Footer() {
    return (
        <footer className="bg-charcoal text-vapor border-t border-white/10 py-12 md:py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12">

                    {/* Logo area */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-display font-bold uppercase italic text-stroke">Stride <span className="text-lime">&</span> Soul</h3>
                        <p className="text-sm text-vapor/60 max-w-xs">
                            Redefining urban mobility through advanced materials and futuristic aesthetics.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 text-sm tracking-widest uppercase">
                        <div>
                            <h4 className="font-bold mb-6 text-lime">Shop</h4>
                            <ul className="space-y-4 text-vapor/60">
                                <li className="hover:text-vapor cursor-pointer transition-colors">New Arrivals</li>
                                <li className="hover:text-vapor cursor-pointer transition-colors">Best Sellers</li>
                                <li className="hover:text-vapor cursor-pointer transition-colors">Accessories</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-lime">Support</h4>
                            <ul className="space-y-4 text-vapor/60">
                                <li className="hover:text-vapor cursor-pointer transition-colors">FAQ</li>
                                <li className="hover:text-vapor cursor-pointer transition-colors">Returns</li>
                                <li className="hover:text-vapor cursor-pointer transition-colors">Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-lime">Social</h4>
                            <ul className="space-y-4 text-vapor/60">
                                <li className="hover:text-vapor cursor-pointer transition-colors">Instagram</li>
                                <li className="hover:text-vapor cursor-pointer transition-colors">Twitter</li>
                                <li className="hover:text-vapor cursor-pointer transition-colors">TikTok</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-vapor/40 uppercase tracking-widest gap-4">
                    <p>&copy; 2026 Stride & Soul. All rights reserved.</p>
                    <p>Designed by AR</p>
                </div>
            </div>
        </footer>
    )
}
