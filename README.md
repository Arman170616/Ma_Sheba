# মা সেবা সোসাইটি — Ma Sheba Society

> **মাতৃ কালিন মায়েদের আস্থার প্রতিষ্ঠান**  
> A trusted maternal health organization based in Feni, Bangladesh.

---

## 🖥️ Live Preview

![Ma Sheba Homepage](screenshots/homepage.png)

---

## 📋 Project Overview

**Ma Sheba Society** is a full-stack web application for a maternal health NGO in Feni, Bangladesh. It provides a public-facing website with news, board members, member listings, and a media gallery — all managed through a secure admin panel backed by a Django REST API.

---

## ✨ Features

### Public Website
- **Home Page** — Hero section, service overview, latest news
- **About** — Organization history and mission
- **Why Ma Seba?** — Values and impact statistics
- **পরিচালনা পরিষদ (Board)** — Leadership board + regular member listings with photos
- **Services** — Maternal health services offered
- **Office** — Contact and location information
- **সংবাদ (News)** — Dynamic news portal with category filtering
- **গ্যালারি (Gallery)** — Photo & video gallery with lightbox and YouTube embed support

### Admin Panel
- Secure token-based login (`/admin-login`)
- **Member Management** — Add/remove/toggle visibility with photo upload
- **News Management** — Publish/unpublish articles
- **Gallery Management** — Upload images or add YouTube video links
- Django `/admin/` panel with full CRUD and Bangla labels

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, Tailwind CSS |
| Backend | Django 5, Django REST Framework |
| Database | SQLite3 |
| Auth | Token Authentication (DRF) |
| Media | Pillow, Django media serving |
| CORS | django-cors-headers |

---

## 📁 Project Structure

```
Ma-Sheda/
├── Frontend/                  # React + TypeScript frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Board.tsx      # Shows board + regular members
│   │   │   ├── News.tsx
│   │   │   ├── Gallery.tsx    # Photo & video gallery
│   │   │   ├── AdminLogin.tsx
│   │   │   └── AdminDashboard.tsx
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── api.ts             # API client (token auth, FormData upload)
│   │   └── types.ts
│   ├── package.json
│   └── vite.config.ts
│
└── backend/                   # Django REST API
    ├── api/
    │   ├── models.py          # BoardMember, Member, NewsItem, GalleryItem
    │   ├── views.py           # ViewSets + login/logout
    │   ├── serializers.py
    │   ├── urls.py
    │   └── admin.py           # Bangla-labeled Django admin
    ├── backend/
    │   ├── settings.py
    │   └── urls.py
    └── manage.py
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Arman170616/Ma_Sheba.git
cd Ma_Sheba
```

### 2. Backend Setup

```bash
cd backend
pip install django djangorestframework django-cors-headers pillow
python manage.py migrate
python manage.py createsuperuser   # or use: admin / maseba2024
python seed_data.py                # loads sample board, members, news
python manage.py runserver 8000
```

### 3. Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

### 4. Access

| URL | Description |
|-----|-------------|
| `http://localhost:5173` | Public website |
| `http://localhost:5173` → Admin login | Admin panel (username: `admin`, password: `maseba2024`) |
| `http://localhost:8000/admin/` | Django admin panel |
| `http://localhost:8000/api/` | REST API browser |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login/` | Admin login → returns token |
| POST | `/api/auth/logout/` | Admin logout |
| GET | `/api/news/` | Published news (public) |
| GET/POST/PATCH/DELETE | `/api/news/{id}/` | News CRUD (admin) |
| GET | `/api/members/` | Visible members (public) / all (admin) |
| GET/POST/PATCH/DELETE | `/api/members/{id}/` | Member CRUD with photo upload |
| GET | `/api/board-members/` | Board members (public) |
| GET | `/api/gallery/` | Published gallery items (public) |
| GET/POST/PATCH/DELETE | `/api/gallery/{id}/` | Gallery CRUD with image upload |

---

## 📸 Screenshots

### Home Page
![Homepage](screenshots/homepage.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)

### পরিচালনা পরিষদ (Board)
![Board Page](screenshots/board.png)

### গ্যালারি (Gallery)
![Gallery Page](screenshots/gallery.png)

---

## 🔐 Admin Credentials (Demo)

```
Username: admin
Password: maseba2024
```

> ⚠️ Change these credentials before deploying to production.

---

## 📞 Contact

**মা সেবা সোসাইটি**  
📍 ফেনি, ৩৯০০, বাংলাদেশ  
📞 +880 1832-698111  
📧 masebabd@gmail.com  
🌐 masebabd.com

---

## 📄 License

This project is developed for **Ma Seba Society**. All rights reserved.

---

*Built with ❤️ for the mothers of Bangladesh*
