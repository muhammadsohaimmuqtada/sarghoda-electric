# Sarghoda Electric and Electronics - Website

A modern, fast, zero-cost catalog and showcase website for **Sarghoda Electric and Electronics** located at **Sarghoda-Mianwali Rd, Wan Bhachran, 42100**.

## 🚀 Key Features
- **Mobile First**: Optimized for smartphones with sticky WhatsApp and Call action buttons.
- **Interactive Product Catalog**: Instant search and category filtering (Fans, Cables, Solar/UPS, Breakers, Lighting, Switches, Appliances).
- **One-Tap WhatsApp Inquiries**: Automatically generates customized product inquiry text with product title and brand.
- **Google Maps Integration**: Direct links and embedded location for Wan Bhachran.
- **Zero Cost Forever**: Can be hosted on GitHub Pages or Cloudflare Pages with zero monthly cost, free HTTPS SSL certificate, and 100% uptime.

## 🛠️ How to Update Your Phone & WhatsApp Number
Open `index.html` and look at lines ~430-440:
```javascript
const SHOP_CONFIG = {
  name: "Sarghoda Electric and Electronics",
  address: "Sargodha-Mianwali Rd, Wan Bhachran, 42100",
  whatsappNumber: "923016353217", 
  phoneNumber: "+92 301 6353217"
};
```

## 📦 How to Add / Edit Products
Open `products.js` to modify titles, prices, categories, and specifications.

## 🌐 How to Deploy for 100% Free on GitHub Pages

Run these commands inside this folder:
```bash
git init
git add .
git commit -m "Initial website commit"
gh repo create sarghoda-electric --public --source=. --push
gh browse --settings # Under Pages, select main branch / root and save!
```
Your live link will be: `https://<your-username>.github.io/sarghoda-electric/`
