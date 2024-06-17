import Layout from './layouts/Layout'
function App() {

  return (
    <>
      <Layout>
      <div className="bg-gray-100 min-h-screen">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Scootric</div>
            <div>
              <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Features</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 mx-2">About</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gray-200 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Unleash the Electric Elegance</h1>
            <p className="text-gray-600 mb-8">
              Designed to seamlessly integrate into your daily routine, the Scootric electric scooter
              will take you to your destination with style and effortlessness.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">Explore Now</button>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Introducing the future of mobility</h2>
            <p className="text-gray-600">
              Crafted with passion and precision, this scooter seamlessly blends sleek design with
              cutting-edge technology to provide an unforgettable riding experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="path/to/image1.jpg" alt="Scootric Image 1" className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
              <p className="text-gray-600">Description of feature 1.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img src="path/to/image2.jpg" alt="Scootric Image 2" className="w-full h-48 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature 2</h3>
              <p className="text-gray-600">Description of feature 2.</p>
            </div>
          </div>
        </section>
      </div>
      </Layout>
    </>
  )
}

export default App
