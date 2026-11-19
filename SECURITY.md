# Security policy

## Reporting a vulnerability

Do not publish patient information, credentials, or exploit details in a public issue. Report suspected vulnerabilities privately to the repository maintainers through GitHub's private vulnerability reporting feature, if enabled.

## Deployment notes

This project is a static GitHub Pages site. The HTML includes a Content Security Policy as a defense-in-depth measure, but inline scripts/styles remain enabled for compatibility with the current codebase. This is not equivalent to a strict nonce/hash-based CSP.

GitHub Pages does not provide arbitrary response-header configuration. If the site is placed behind a CDN, reverse proxy, or hosting platform that supports custom headers, configure at least:

- Strict-Transport-Security (only when HTTPS is guaranteed)
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy with only required browser features
- Content-Security-Policy as an HTTP response header, including frame-ancestors 'none' (or an explicitly approved framing policy)

Clinical and medication calculators require independent clinical/pharmacy validation. A security review or passing software tests do not certify clinical accuracy.
