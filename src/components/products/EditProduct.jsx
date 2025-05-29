import React from "react";
import { useState } from "react";

export default function EditProduct({ product, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    price: product.price,
    company: product.company,
    status: product.status,
    image: product.image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...product,
      ...formData
    });
    onClose();
  };

  return (
    <div style={{ padding: '24px', color: '#fff' }}>
      <h2 style={{ marginBottom: '24px', fontSize: '20px', fontWeight: 600 }}>Edit Product</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Product name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              background: '#131d38',
              border: '1px solid #232b43',
              borderRadius: '6px',
              color: '#fff'
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Product Image
          </label>
          <div style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#131d38',
              border: '1px solid #232b43'
            }}>
              <img 
                src={formData.image} 
                alt="Product"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Enter image URL"
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#131d38',
                  border: '1px solid #232b43',
                  borderRadius: '6px',
                  color: '#fff'
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              background: '#131d38',
              border: '1px solid #232b43',
              borderRadius: '6px',
              color: '#fff'
            }}
          >
            <option value="Accessories">Accessories</option>
            <option value="Telecommunication">Telecommunication</option>
            <option value="Note Book">Note Book</option>
            <option value="Digital">Digital</option>
          </select>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Price (in $)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              background: '#131d38',
              border: '1px solid #232b43',
              borderRadius: '6px',
              color: '#fff'
            }}
          />
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Company
          </label>
          <select
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              background: '#131d38',
              border: '1px solid #232b43',
              borderRadius: '6px',
              color: '#fff'
            }}
          >
            <option value="Google">Google</option>
            <option value="Webflow">Webflow</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitter">Twitter</option>
          </select>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              background: '#131d38',
              border: '1px solid #232b43',
              borderRadius: '6px',
              color: '#fff'
            }}
          >
            <option value="In Stock">In Stock</option>
            <option value="Out of stock">Out of stock</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '8px 16px',
              background: '#232b43',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={{
              padding: '8px 16px',
              background: '#cb3cff',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
