import Navbar from "@/components/Navbar";

const drinks = [
  {
    name: "Peach Coffee",
    desc: "Sweet peach with specialty espresso",
    price: "140 THB",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c",
  },
  {
    name: "Dirty Coffee",
    desc: "Creamy layered espresso",
    price: "130 THB",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
  },
  {
    name: "Cold Brew",
    desc: "Slow extracted smooth coffee",
    price: "120 THB",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86",
  },
];

export default function MenuPage() {
  return (
    <main className="bg-[#F5F1EA] min-h-screen text-black">
      <Navbar />

      <section className="pt-40 px-6 md:px-20">
        <h1 className="text-6xl mb-16">
          Signature Menu
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {drinks.map((drink) => (
            <div
              key={drink.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:-translate-y-2 transition duration-500"
            >
              <img
                src={drink.image}
                className="h-[350px] w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-3xl mb-3">
                  {drink.name}
                </h2>

                <p className="text-gray-600 mb-4">
                  {drink.desc}
                </p>

                <p className="text-lg">
                  {drink.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}