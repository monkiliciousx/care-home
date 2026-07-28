# Durian Care Home — GitHub Setup

This package contains the complete source for the Durian Care Home website:

- English, Chinese and Bahasa Malaysia content
- Responsive desktop and mobile layouts
- Care services, accommodation, facilities, location and FAQ sections
- Opening-soon enquiry interface
- Guided visit booking flow with a date-and-time popup
- Dedicated `/book-visit` details page for name, phone, optional email,
  visitor count and notes
- Compressed production images under `public/images/`

## Upload the project to GitHub

1. Sign in to GitHub and create a new empty repository.
2. Extract `durian-care-home-github.zip` on your computer.
3. Open the extracted `durian-care-home` folder.
4. Upload the **contents inside the folder** to the new GitHub repository.
5. Commit the uploaded files.

Do not upload the ZIP itself as the website source.

## Run it locally

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

Open the local address printed in the terminal.

## Hosting

This repository is a Next.js/Vinext source project. A GitHub repository can
store and version the code, but GitHub Pages cannot run this server-compatible
project directly.

For the easiest public deployment, connect the GitHub repository to a
Next.js-compatible hosting provider such as Vercel or Cloudflare. The existing
private ChatGPT Sites deployment can also continue to be used independently.

## Before public launch

The enquiry form and visit booking form currently demonstrate the user
experience but do not send or store submissions. Connect them to the client's
email, WhatsApp or database before going public.

The current photographs are concept imagery. Replace them with approved
architectural renders or actual Durian Care Home photography when available.
