export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <div className="px-4 w-150">
                <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r text-center">Get In <span className='text-yellow-300'>Touch</span>
                <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mt-4 mx-auto w-50 rounded-full transition-all duration-700" />
                </h2>

                <form action="" className="space-y-6">
                    <div className="relative">
                        <input type="text" id="name" name="name" required className="w-full bg-white/10 border-2 border-white/100 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-300"
                        placeholder="Name:"
                        />
                    </div>

                    <div className="relative">
                        <input type="email" id="email" name="email" required className="w-full bg-white/10 border-2 border-white/100 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-300"
                        placeholder="example@gmail.com"
                        />
                    </div>

                    <div className="relative">
                        <textarea name="message" id="message" required rows={5} className="w-full bg-white/10 border-2 border-white/100 rounded px-4 py-3 text-white transition focus:outline-none focus:border-yellow-300"
                        placeholder="Your Message...">
                        </textarea>
                    </div>

                    <button type="submit" className="w-full bg-transparent text-white py-3 px-6 rounded-4xl border-1 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:text-yellow-300 cursor-pointer hover:bg-white/10">Send Message</button>
                </form>
            </div>
        </section>
    );
};