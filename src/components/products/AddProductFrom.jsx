import React, { useState } from "react";
import { Star, Image, Tag, DollarSign, Building2, AlertCircle } from "lucide-react";

const AddProductForm = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Accessories",
    price: "",
    company: "Google",
    status: "In Stock",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewProduct({ ...newProduct, image: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({
      name: "",
      category: "Accessories",
      price: "",
      company: "Google",
      status: "In Stock",
      image: null,
    });
  };

  return (
    <div style={{ background: '#0A0F1C', borderRadius: 16, padding: 24 }}>
      <h2 style={{ color: '#fff', marginBottom: 24, fontSize: 18 }}>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 8, fontSize: 14 }}>
            <Star size={16} style={{ marginRight: 8 }} /> Product name
          </label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #1E2842', background: '#0A0F1C', color: '#fff' }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 8, fontSize: 14 }}>
            <Image size={16} style={{ marginRight: 8 }} /> Product photo
          </label>
          <div style={{
            width: '100%',
            height: 120,
            border: '1px dashed #1E2842',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            background: '#0A0F1C',
            cursor: 'pointer'
          }}>
            <input
              type="file"
              onChange={handleImageChange}
              style={{ display: 'none' }}
              id="file-input"
            />
            <label htmlFor="file-input" style={{ cursor: 'pointer', textAlign: 'center' }}>
              {newProduct.image ? (
                <img src={newProduct.image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 8 }} />
              ) : (
                <>
                  <Image size={24} style={{ color: '#C85FFC', marginBottom: 8 }} />
                  <div style={{ color: '#8E95A9', fontSize: 12 }}>Click to upload or drag and drop</div>
                  <div style={{ color: '#8E95A9', fontSize: 12 }}>SVG, PNG, JPG or GIF (max. 800 x 400px)</div>
                </>
              )}
            </label>
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 8, fontSize: 14 }}>
            <Tag size={16} style={{ marginRight: 8 }} /> Category
          </label>
          <select
            name="category"
            value={newProduct.category}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #1E2842', background: '#0A0F1C', color: '#fff' }}
          >
            <option value="Accessories">Accessories</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Note Book">Note Book</option>
            <option value="Digital">Digital</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Light">Light</option>
          </select>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 8, fontSize: 14 }}>
            <DollarSign size={16} style={{ marginRight: 8 }} /> Price (in $)
          </label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #1E2842', background: '#0A0F1C', color: '#fff' }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 8, fontSize: 14 }}>
            <Building2 size={16} style={{ marginRight: 8 }} /> Company
          </label>
          <select
            name="company"
            value={newProduct.company}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #1E2842', background: '#0A0F1C', color: '#fff' }}
          >
            <option value="Google">Google</option>
            <option value="Webflow">Webflow</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
            <option value="YouTube">YouTube</option>
            <option value="Reddit">Reddit</option>
            <option value="Spotify">Spotify</option>
            <option value="Pinterest">Pinterest</option>
            <option value="Twitch">Twitch</option>
          </select>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'flex', alignItems: 'center', color: '#fff', marginBottom: 8, fontSize: 14 }}>
            <AlertCircle size={16} style={{ marginRight: 8 }} /> Status
          </label>
          <select
            name="status"
            value={newProduct.status}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid #1E2842', background: '#0A0F1C', color: '#fff' }}
          >
            <option value="In Stock">In Stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: '#C85FFC',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
