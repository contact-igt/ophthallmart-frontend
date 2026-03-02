import React from 'react';

const CLIENTS = [
    { id: 1, name: "Client 1", img: "/assets/Home/Clients/patreon1.png" },
    { id: 2, name: "Client 2", img: "/assets/Home/Clients/patreon2.png" },
    { id: 3, name: "Client 3", img: "/assets/Home/Clients/patreon3.png" },
    { id: 4, name: "Client 4", img: "/assets/Home/Clients/patreon4.png" },
    { id: 5, name: "Client 5", img: "/assets/Home/Clients/patreon5.png" },
    { id: 6, name: "Client 6", img: "/assets/Home/Clients/patreon6.png" },
    { id: 7, name: "Client 7", img: "/assets/Home/Clients/patreon7.png" },
    { id: 8, name: "Client 8", img: "/assets/Home/Clients/patreon8.png" },
    { id: 9, name: "Client 9", img: "/assets/Home/Clients/patreon9.png" },
    { id: 10, name: "Client 10", img: "/assets/Home/Clients/patreon10.png" },
    { id: 11, name: "Client 11", img: "/assets/Home/Clients/patreon11.png" },
    { id: 12, name: "Client 12", img: "/assets/Home/Clients/patreon12.png" },
    { id: 13, name: "Client 13", img: "/assets/Home/Clients/patreon13.png" },
    { id: 14, name: "Client 14", img: "/assets/Home/Clients/patreon14.png" },
    { id: 15, name: "Client 15", img: "/assets/Home/Clients/patreon15.png" },







];

const ClientsSection = () => {
    return (
        <section className="bg-white py-16 sm:py-24 border-t border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                <h2 className="text-3xl font-bold text-[#0B2C4D]">Our Clients</h2>
                <p className="text-slate-500 mt-2">Trusted by leading hospitals and eye care professionals</p>
            </div>

            <div className="relative group w-full overflow-hidden flex">
                <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 35s linear infinite;
            width: max-content;
          }
          .group:hover .animate-infinite-scroll {
            animation-play-state: paused;
          }
        `}</style>

                <div className="flex animate-infinite-scroll items-center gap-12 sm:gap-20 px-6 sm:px-10">
                    {[...CLIENTS, ...CLIENTS].map((client, index) => (
                        <div key={index} className="flex-none flex justify-center items-center w-[150px] md:w-[200px] h-32">
                            <img
                                src={client.img}
                                alt={client.name}
                                className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 drop-shadow-sm"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
