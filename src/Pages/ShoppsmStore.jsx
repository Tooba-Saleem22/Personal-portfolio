import React from "react";
import { motion } from "framer-motion";

const Store = () => {
  return (
    <div className="w-full bg-white text-black px-4 md:px-12 md:mt-40 mt-32 select-none">
      {/* Heading */}
      <div className="flex justify-center text-center mb-10">
        <motion.h1
          className="text-4xl md:text-7xl font-bold uppercase"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Shoppsm Store
        </motion.h1>
      </div>

      {/* Main Image */}
      <motion.div
        className="w-full flex justify-center mb-8"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/assets/shoppsm-cover.jpg" // apni screenshot lagani hai
          alt="Shoppsm Store"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-cover rounded-2xl"
          draggable={false}
        />
      </motion.div>

      {/* Details */}
      <motion.div
        className="max-w-[1000px] mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 mb-6 text-center"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div>
          <p className="text-gray-700 text-xs">Project Name</p>
          <h3 className="text-sm font-light">Shoppsm Store</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Platform</p>
          <h3 className="text-sm font-light">WordPress (WooCommerce)</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Industry</p>
          <h3 className="text-sm font-light">E-Commerce</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Products</p>
          <h3 className="text-sm font-light">Multi-category Store</h3>
        </div>

        <div>
          <p className="text-gray-700 text-xs">Timeline</p>
          <h3 className="text-sm font-light">2-3 Weeks</h3>
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
        <p className="text-sm md:text-base leading-relaxed mb-3">
          Shoppsm Store is a fully functional e-commerce website developed using
          WordPress and WooCommerce. The platform is designed to provide a
          seamless shopping experience across multiple product categories
          including electronics, perfumes, fashion, home appliances, and more.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          The website features a modern UI with product filtering, wishlist
          functionality, category navigation, and responsive design. It is
          optimized for both desktop and mobile users, ensuring smooth browsing
          and purchasing experience.
        </p>
      </motion.div>

      {/* Project Image */}
      <motion.div
        className="max-w-[1100px] mx-auto mt-8 flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <img
          src="/assets/shoppsm-mock.jpg" // second image
          alt="Shoppsm UI"
          className="w-full max-w-[95%] md:max-w-[1100px] h-[300px] md:h-[550px] object-cover rounded-2xl"
          draggable={false}
        />
      </motion.div>

      {/* Features */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Key Features</h2>
        <ul className="text-sm md:text-base leading-relaxed list-disc pl-5 space-y-2">
          <li>
            Multi-category product system (Electronics, Fashion, Beauty, etc.)
          </li>
          <li>Wishlist and user authentication</li>
          <li>Product variations (sizes, colors)</li>
          <li>Responsive and mobile-friendly design</li>
          <li>Fast checkout and cart system</li>
          <li>Discount banners and featured products</li>
        </ul>
      </motion.div>

      {/* Stack */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Technologies / Stack Used
        </h2>

        <div className="flex flex-wrap gap-3">
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">
            WordPress
          </span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">
            WooCommerce
          </span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">
            Elementor
          </span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">PHP</span>
          <span className="bg-gray-100 px-4 py-1 text-sm rounded">MySQL</span>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="max-w-[1000px] mx-auto mt-8 mb-10 flex gap-4 flex-col sm:flex-row"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <a
          href="https://store.shoppsm.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
        >
          View Live Store
        </a>
      </motion.div>
    </div>
  );
};

export default Store;
