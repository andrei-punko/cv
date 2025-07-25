#!/bin/sh

rm pdf/*.pdf

curl -v --data-urlencode "markdown=$(cat Andrei_Punko_CV_\(eng\).md)" -d "css=$(cat style.css)" --output pdf/Andrei_Punko_CV_\(eng\).pdf https://md-to-pdf.fly.dev

curl -v --data-urlencode "markdown=$(cat Andrei_Punko_CV_\(rus\).md)" -d "css=$(cat style.css)" --output pdf/Andrei_Punko_CV_\(rus\).pdf https://md-to-pdf.fly.dev
