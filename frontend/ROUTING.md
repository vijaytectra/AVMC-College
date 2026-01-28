# Routing Guide

This document outlines the available routes in the AVMC Frontend application and how to access them.

## Available Pages

| Page Name | Route URL | Description |
| :--- | :--- | :--- |
| **Home** | [`/`](http://localhost:3000/) | The main homepage of the website. |
| **Anti-Ragging** | [`/anti-ragging`](http://localhost:3000/anti-ragging) | Information about the Anti-Ragging Committee, regulations, and reporting. |
| **Career Details** | [`/career-details`](http://localhost:3000/career-details) | Detailed view of a specific job opening (e.g., Staff Nurse). |
| **Apply Job** | [`/apply-job`](http://localhost:3000/apply-job) | Application form for applying to a job position. |
| **Careers** | [`/careers`](http://localhost:3000/careers) | Main careers page featuring the hero section. |
| **Newsletter** | [`/newsletter`](http://localhost:3000/newsletter) | Main newsletter page with featured articles and research spotlight. |
| **Newsletter Detail** | [`/newsletter/[id]`](http://localhost:3000/newsletter/world-chol-day) | Detailed view of a specific newsletter (dynamic route). |
| **International Engagements** | [`/about/international-engagements`](http://localhost:3000/about/international-engagements) | Overview of international partnerships, collaborations, and events. |
| **Symposium 2024** | [`/about/international-engagements/international-medical-research-symposium-2024`](http://localhost:3000/about/international-engagements/international-medical-research-symposium-2024) | Detailed view of the International Medical Research Symposium 2024. |

## How to Access

1.  **Run the Development Server**:
    Ensure the Next.js development server is running:
    ```bash
    npm run dev
    ```

2.  **Navigate in Browser**:
    Open your web browser (Chrome, Edge, etc.) and go to `http://localhost:3000`.

3.  **Direct Navigation**:
    You can directly type the URL for any specific page (e.g., `http://localhost:3000/apply-job`) in the address bar.

## Notes

-   **Routing**: The application uses Next.js App Router. Pages are located in the `app/` directory.
    -   `app/page.tsx` -> `/`
    -   `app/anti-ragging/page.tsx` -> `/anti-ragging`
    -   `app/career-details/page.tsx` -> `/career-details`
    -   `app/apply-job/page.tsx` -> `/apply-job`
    -   `app/careers/page.tsx` -> `/careers`
    -   `app/newsletter/page.tsx` -> `/newsletter`
    -   `app/about/international-engagements/international-medical-research-symposium-2024/page.tsx` -> `/about/international-engagements/international-medical-research-symposium-2024`
-   **Components**: Reusable UI components for these pages are located in `components/`.
