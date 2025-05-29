import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Search, ChevronLeft, ChevronRight, Star, CheckSquare, Tag, DollarSign, Building2, AlertCircle, Edit2, Trash2 } from "lucide-react";
import "./Products.css";
import AddProductForm from "../components/products/AddProductFrom";
import EditProduct from "../components/products/EditProduct";
const productImages = {
  "Watch": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQIJ1BQRuLYJ4GTec5XoelGIqDRH9rAwJD7KS2cIcVYcaOdRjb7eqDBS8vvOeqSJl01-5RfzGxlEPrybSB2pSxybUwhnYc8BLvspJHnZlEB3jHXTG6BPPjpcBY",
  "Mobile": "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1744283328/Croma%20Assets/Communication/Mobiles/Images/314881_0_wp8tuj.png?tr=w-1000",
  "Laptop": "https://m.media-amazon.com/images/W/MEDIAX_1215821-T2/images/I/51YTTw5zR4L._SX300_SY300_QL70_FMwebp_.jpg",
  "TV": "https://cdn-icons-png.flaticon.com/512/2921/2921825.png",
  "Camera": "https://cdn-icons-png.flaticon.com/512/2921/2921826.png",
  "Perfume": "https://cdn-icons-png.flaticon.com/512/2921/2921827.png",
  "Ear pods": "https://cdn-icons-png.flaticon.com/512/2921/2921828.png",
  "Wireless Charger": "https://cdn-icons-png.flaticon.com/512/2921/2921829.png",
  "Torch": "https://cdn-icons-png.flaticon.com/512/2921/2921830.png",
};

const companyLogos = {
  Google: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
  Webflow: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  Facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  Twitter: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  YouTube: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
  Reddit: "https://cdn-icons-png.flaticon.com/512/2111/2111589.png",
  Spotify: "https://cdn-icons-png.flaticon.com/512/174/174872.png",
  Pinterest: "https://cdn-icons-png.flaticon.com/512/733/733646.png",
  Twitch: "https://cdn-icons-png.flaticon.com/512/5968/5968819.png",
};

export default function Products() {
  const initialProducts = [
    {
      id: 1,
      name: "Watch",
      category: "Accessories",
      price: 20,
      company: "Google",
      status: "In Stock",
      image: productImages["Watch"],
      companyLogo: companyLogos["Google"],
    },
    {
      id: 2,
      name: "Mobile",
      category: "Telecommunication",
      price: 500,
      company: "Webflow",
      status: "Out of stock",
      image: productImages["Mobile"],
      companyLogo: companyLogos["Webflow"],
    },
    {
      id: 3,
      name: "Laptop",
      category: "Note Book",
      price: 800,
      company: "Facebook",
      status: "Out of stock",
      image: productImages["Laptop"],
      companyLogo: companyLogos["Facebook"],
    },
    {
      id: 4,
      name: "TV",
      category: "Digital",
      price: 250,
      company: "Twitter",
      status: "In Stock",
      image: productImages["TV"],
      companyLogo: companyLogos["Twitter"],
    },
    {
      id: 5,
      name: "Camera",
      category: "Digital",
      price: 100,
      company: "YouTube",
      status: "Out of stock",
      image: productImages["Camera"],
      companyLogo: companyLogos["YouTube"],
    },
    {
      id: 6,
      name: "Perfume",
      category: "Cosmetics",
      price: 25,
      company: "Reddit",
      status: "In Stock",
      image: productImages["Perfume"],
      companyLogo: companyLogos["Reddit"],
    },
    {
      id: 7,
      name: "Ear pods",
      category: "Digital",
      price: 45,
      company: "Spotify",
      status: "Out of stock",
      image: productImages["Ear pods"],
      companyLogo: companyLogos["Spotify"],
    },
    {
      id: 8,
      name: "Wireless Charger",
      category: "Digital",
      price: 10,
      company: "Pinterest",
      status: "In Stock",
      image: productImages["Wireless Charger"],
      companyLogo: companyLogos["Pinterest"],
    },
    {
      id: 9,
      name: "Torch",
      category: "Light",
      price: 20,
      company: "Twitch",
      status: "Out of stock",
      image: productImages["Torch"],
      companyLogo: companyLogos["Twitch"],
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleAddProduct = (newProduct) => {
    const productWithId = {
      ...newProduct,
      id: products.length + 1,
      image: productImages[newProduct.name] || productImages["Watch"],
      companyLogo: companyLogos[newProduct.company]
    };
    setProducts([productWithId, ...products]);
    setShowAddForm(false);
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setEditingProduct(productToEdit);
  };

  const handleSaveEdit = (updatedProduct) => {
    setProducts(products.map(product => 
      product.id === updatedProduct.id ? updatedProduct : product
    ));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <main className="main-content">
        {showAddForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              width: '90%',
              maxWidth: '500px',
              position: 'relative'
            }}>
              <button
                onClick={() => setShowAddForm(false)}
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '20px',
                  cursor: 'pointer',
                  zIndex: 1001
                }}
              >
                ×
              </button>
              <AddProductForm onAddProduct={handleAddProduct} />
            </div>
          </div>
        )}

        {editingProduct && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{
              width: '90%',
              maxWidth: '500px',
              background: '#101935',
              borderRadius: '12px',
              position: 'relative'
            }}>
              <EditProduct 
                product={editingProduct}
                onSave={handleSaveEdit}
                onClose={() => setEditingProduct(null)}
              />
            </div>
          </div>
        )}

        <div className="products-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <h1 style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>Product List</h1>
            <div className="search-input" style={{ minWidth: 300 }}>
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Search for product..."
                onChange={handleSearch}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#aeb9e1',
                  width: '100%',
                  padding: '8px 12px',
                  fontSize: '15px',
                  fontWeight: 600,
                  outline: 'none'
                }}
              />
            </div>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            style={{ background: '#cb3cff', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 22px', fontWeight: 600, fontSize: 15, cursor: 'pointer' }}
          >
            Add New Product
          </button>
        </div>

        <div className="products-table-container" style={{ background: '#101935', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)', padding: 0, marginTop: 16 }}>
          <div style={{ padding: '18px 24px', borderBottom: '1px solid #232b43', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: 17 }}>All Products</span>
            <span style={{ color: '#cb3cff', fontWeight: 600, fontSize: 16 }}>{indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} <span style={{ color: '#aeb9e1' }}>of {filteredProducts.length}</span></span>
          </div>
          <table className="products-table" style={{ width: '100%', borderCollapse: 'collapse', background: 'none' }}>
            <thead>
              <tr style={{ background: 'none', color: '#bfc9da', fontWeight: 600 }}>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15, textAlign: 'center' }}><CheckSquare size={16} /></th>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15 }}><Star size={16} style={{ color: '#c85ffc' }} /> Product Name</th>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15 }}><Tag size={16} /> Category</th>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15 }}><DollarSign size={16} /> Price</th>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15 }}><Building2 size={16} /> Company</th>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15 }}><AlertCircle size={16} /> Status</th>
                <th style={{ padding: '14px 10px', fontWeight: 600, fontSize: 15 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, idx) => (
                <tr key={product.id} style={{ background: idx % 2 === 0 ? 'rgba(174,185,225,0.02)' : 'none' }}>
                  <td style={{ textAlign: 'center', verticalAlign: 'middle' }}><input type="checkbox" /></td>
                  <td style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600, color: '#fff', padding: '14px 10px' }}>
                    <img src={product.image} alt={product.name} style={{ width: 32, height: 32, borderRadius: 8, background: '#181f36', objectFit: 'cover' }} />
                    {product.name}
                  </td>
                  <td style={{ color: '#bfc9da', fontWeight: 500, padding: '14px 10px' }}>{product.category}</td>
                  <td style={{ color: '#fff', fontWeight: 600, padding: '14px 10px' }}>${product.price}</td>
                  <td style={{ color: '#bfc9da', fontWeight: 500, padding: '14px 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <img src={product.companyLogo} alt={product.company} style={{ width: 22, height: 22, borderRadius: '50%', background: '#181f36', objectFit: 'cover' }} />
                    {product.company}
                  </td>
                  <td style={{ padding: '14px 10px' }}>
                    <span style={{
                      background: product.status === 'In Stock' ? '#093c2e' : '#3c1a1a',
                      color: product.status === 'In Stock' ? '#14c973' : '#ff5a64',
                      borderRadius: 4,
                      padding: '4px 10px',
                      fontWeight: 600,
                      fontSize: 13,
                      display: 'inline-block',
                      minWidth: 80,
                      textAlign: 'center',
                    }}>
                      {product.status === 'In Stock' ? '+ In Stock' : '* Out of stock'}
                    </span>
                  </td>
                  <td style={{ padding: '14px 10px', display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => handleEditProduct(product.id)}
                      style={{
                        background: '#131d38',
                        border: 'none',
                        color: '#fff',
                        borderRadius: 4,
                        padding: '6px 10px',
                        cursor: 'pointer'
                      }}
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      style={{
                        background: '#131d38',
                        border: 'none',
                        color: '#fff',
                        borderRadius: 4,
                        padding: '6px 10px',
                        cursor: 'pointer'
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-container" style={{ marginTop: 18, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="page-count" style={{ color: '#fff', fontWeight: 500 }}>{indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length}</div>
          <div className="pagination-info" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#bfc9da', fontWeight: 500 }}>Rows per page:</span>
            <select className="rows-per-page" value={productsPerPage} onChange={handleProductsPerPageChange} style={{ background: '#101935', color: '#ffff', border: '1px solid #232b43', borderRadius: 4, padding: '6px 12px', marginRight: 16 }}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <button className="pagination-button" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} style={{ background: '#101935', color: '#bfc9da', border: 'none', borderRadius: 4, padding: '6px 10px', marginRight: 4 }}>
              <ChevronLeft size={16} />
            </button>
            <button className="pagination-button" onClick={() => paginate(currentPage + 1)} disabled={indexOfLastProduct >= filteredProducts.length} style={{ background: '#101935', color: '#bfc9da', border: 'none', borderRadius: 4, padding: '6px 10px' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
