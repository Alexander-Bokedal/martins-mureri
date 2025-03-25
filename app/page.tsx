import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-stone-500  text-white py-20 text-center">

        <h1 className="text-4xl font-bold text-stone-950">Martins Mureri</h1>
        <p className="mt-2 text-lg text-stone-900">Mureri och badrum</p>

      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Om mig</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Med 100 år i branchen så vet jag exakt hur man ska göra för att göra saker rätt. Ring mig. Eller inte.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Tjänster</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Renvoering</h3>
            <p className="mt-2 text-gray-700">Renoveringar av badrum och andra våtutrymmen</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Mureri</h3>
            <p className="mt-2 text-gray-700">Renovering och nybygge av murar</p>
          </div>
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Reparationer</h3>
            <p className="mt-2 text-gray-700">Reparera dina gamla saker</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">Kontakt</h2>
        <p className="mt-4">Ring mig på <strong>(123) 456-7890</strong>eller maila på <strong>info@contractor.com</strong></p>
      </section>
    </div>
  );
};

export default Home;
