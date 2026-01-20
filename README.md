# 🎨 Modern Graphic Design Portfolio

A sleek, serverless portfolio solution for graphic designers. Hosted on Cloudflare Pages, powered by React, and utilizing Cloudflare R2 for cost-effective, high-speed image storage.

## ✨ Features

*   **Public Gallery**: Responsive Masonry layout with optimized image loading.
*   **Admin Dashboard**: Secure login (single-user) to manage your work.
*   **Instant Upload**: Stream large design files directly to Cloudflare R2.
*   **Edge-Powered**: Sub-second load times globally via Cloudflare’s network.
*   **Zero Hosting Costs**: Designed to fit 100% within the Cloudflare Free Tier.

## 🛠️ Tech Stack

*   **Frontend**: React (Vite) + Tailwind CSS
*   **Backend**: Cloudflare Pages Functions (Serverless)
*   **Storage**: Cloudflare R2 (S3-Compatible)
*   **Auth**: JWT / Environment Secret

## 🚀 Setup & Deployment

1.  **Clone the repo**: `git clone...`
2.  **Configure R2**: Create a bucket in your Cloudflare dashboard named `rajdeep-portfolio`.
3.  **Environment Variables**: Set your `ADMIN_PASSWORD` and `R2_BUCKET` binding in Cloudflare Pages.
4.  **Deploy**: Connect your GitHub account to Cloudflare Pages for automatic deployment.
