# Durian Care Home

Multilingual showcase website for Durian Care Home, a 53-bed aged-care
residence opening soon in Ayer Keroh, Melaka.

## Website

After GitHub Pages is enabled, the production website is published at:

<https://monkiliciousx.github.io/care-home/>

The site includes:

- English, Chinese and Bahasa Malaysia content
- Single, Twin and Shared Room showcases
- Clearly labelled sample-review content for client presentation
- Gallery Coming Soon page
- Date-and-time visit booking interface
- Responsive desktop and mobile layouts

## Publish on GitHub Pages

The included workflow automatically builds and deploys the website whenever a
change is pushed to `main`.

1. Upload all project files with GitHub Desktop, including the hidden
   `.github` folder.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Open **Actions** and wait for **Deploy GitHub Pages** to complete.

See [GITHUB_SETUP.md](GITHUB_SETUP.md) for the full instructions.

## Local development

Install Node.js 22 or newer, then run:

```bash
npm install
npm run dev
```

To verify the GitHub Pages export:

```bash
npm run build:pages
```

## Before public launch

The enquiry and visit-booking forms currently demonstrate the user experience
but do not send or store submissions. Connect them to the client's preferred
email, WhatsApp or database before launch.

The review cards are fictional examples and are visibly labelled as sample
content. Replace them with verified, permission-based feedback after opening.
