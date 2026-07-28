# Durian Care Home — GitHub Pages Setup

This package contains the complete source for the Durian Care Home website:

- English, Chinese and Bahasa Malaysia content
- Responsive desktop and mobile layouts
- Care services, accommodation, facilities, location and FAQ sections
- Visual Single Room, Twin Room and Shared Room showcase
- Detailed Room Types showcase page
- Reviews showcase with clearly labelled sample testimonials
- Gallery placeholder page
- Opening-soon enquiry interface
- Guided visit booking flow with a date-and-time popup
- Dedicated `/book-visit` details page for name, phone, optional email,
  visitor count and notes
- Compressed production images under `public/images/`
- Automatic deployment to `https://monkiliciousx.github.io/care-home/`

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

## Publish with GitHub Pages

After pushing the files:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and wait for **Deploy GitHub Pages** to show a
   green check.
5. Visit `https://monkiliciousx.github.io/care-home/`.

Every later push to the `main` branch will automatically rebuild and publish
the website.

## Before public launch

The enquiry form and visit booking form currently demonstrate the user
experience but do not send or store submissions. Connect them to the client's
email, WhatsApp or database before going public.

The current photographs are concept imagery. Replace them with approved
architectural renders or actual Durian Care Home photography when available.

The Reviews page contains fictional sample testimonials for client
presentation. They are visibly labelled as examples and must be replaced with
verified, permission-based feedback from real residents or families after
opening.
