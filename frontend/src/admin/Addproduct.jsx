import React, { useState } from "react";
// import { FaTrashAlt } from "react-icons/fa";

export default function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      alert("You can only upload a maximum of 5 images.");
      return;
    }

    const updatedImages = [...images, ...files];
    setImages(updatedImages);
  };

  const removeImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 bg-white shadow rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Add Product</h1>

      <form className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            rows="5"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Image Upload */}
        <div className="border-2 border-dashed border-green-300 rounded p-6 text-center bg-green-50">
          <div className="text-green-600 text-3xl mb-2">📷</div>
          <p className="font-semibold">Upload Product Image</p>
          <p className="text-sm text-gray-500 mb-3">
            maximum of 5 images are allowed
          </p>
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            id="image-upload"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="image-upload"
            className="inline-block mt-2 px-5 py-1.5 bg-green-500 text-white text-sm rounded cursor-pointer hover:bg-green-600 transition"
          >
            Browse
          </label>
        </div>

        {/* Preview Images */}
        <div className="flex flex-wrap gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative w-20 h-20 border rounded overflow-hidden"
            >
              <img
                src={URL.createObjectURL(img)}
                alt={`upload-${index}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-red-500 rounded-full p-1 shadow"
              >
                {/* <FaTrashAlt size={14} /> */}
                <div>dd</div>
              </button>
            </div>
          ))}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Price ($)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
