# Avani

An e-commerce store for perfumes, NFC keychains and posters.

**Live:** https://avani-vt7t-ten.vercel.app/

## Stack

- **Frontend:** React, Vite, Redux Toolkit, Tailwind CSS (`frontend/`)
- **Backend:** Node.js, Express, MongoDB, JWT auth, Cloudinary uploads (`backend/`)
- **Payments:** PayPal (sandbox)
- **Hosting:** Vercel (two separate projects) + MongoDB Atlas

## Run locally

```bash
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

**`backend/.env`:** `MONGO_URI`, `JWT_SECRET`, `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`

**`frontend/.env`:** `VITE_BACKEND_URL` (no trailing slash), `VITE_PAYPAL_CLIENT_ID`

Seed sample products with `npm run seed` in `backend/`.
