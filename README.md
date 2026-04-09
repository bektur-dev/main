# Bektur Ukuev Portfolio Site

Static resume-style portfolio website built for Nginx.

## Files

- `index.html` — main page
- `styles.css` — styling and responsive layout
- `script.js` — reveal animations and stat counters
- `assets/profile.jpg` — profile image
- `nginx.conf` — Nginx server config example

## Run locally

Simple option:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Run with Nginx

Copy files into your Nginx web root, for example:

```bash
sudo mkdir -p /usr/share/nginx/html
sudo cp -R ./* /usr/share/nginx/html/
sudo cp nginx.conf /etc/nginx/conf.d/default.conf
sudo nginx -t
sudo systemctl reload nginx
```

## Replace content

- Update phone, email, and LinkedIn in `index.html`
- Replace `assets/profile.jpg` if you want another image
- Add GitHub or project links in the contact section if needed
