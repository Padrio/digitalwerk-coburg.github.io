#!/usr/bin/env python3
"""Capture screenshots for all pages at mobile (375x812) and desktop (1280x800) viewports."""

from playwright.sync_api import sync_playwright
import os

BASE_URL = "https://digitalwerk-coburg.de"
OUTPUT_DIR = "/Users/pascal/Developer/DigitalWerk/.audit/2026-05-09/screenshots"

PAGES = [
    ("home", "/"),
    ("leistungen", "/leistungen"),
    ("webdesign-coburg", "/webdesign-coburg"),
    ("blog", "/blog"),
    ("blog-local-seo", "/blog/local-seo-coburg-google-business-profile"),
    ("wissen-website-kosten", "/wissen/was-kostet-eine-website"),
    ("kontakt", "/kontakt"),
]

VIEWPORTS = [
    ("mobile", 375, 812),
    ("desktop", 1280, 800),
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

def capture(page_obj, url, output_path, width, height):
    page_obj.goto(url, wait_until="networkidle", timeout=30000)
    # Wait a moment for any animations/fonts
    page_obj.wait_for_timeout(1500)
    page_obj.screenshot(path=output_path, full_page=False)
    print(f"  Saved: {output_path}")

def capture_full(page_obj, url, output_path, width, height):
    page_obj.goto(url, wait_until="networkidle", timeout=30000)
    page_obj.wait_for_timeout(1500)
    page_obj.screenshot(path=output_path, full_page=True)
    print(f"  Saved (full): {output_path}")

with sync_playwright() as p:
    browser = p.chromium.launch()

    for vp_name, vp_width, vp_height in VIEWPORTS:
        print(f"\n--- {vp_name.upper()} ({vp_width}x{vp_height}) ---")
        context = browser.new_context(
            viewport={"width": vp_width, "height": vp_height},
            device_scale_factor=2 if vp_name == "mobile" else 1,
        )
        page = context.new_page()

        for page_slug, path in PAGES:
            url = BASE_URL + path
            # Above-fold screenshot
            atf_path = os.path.join(OUTPUT_DIR, f"{page_slug}_{vp_name}_atf.png")
            # Full-page screenshot
            full_path = os.path.join(OUTPUT_DIR, f"{page_slug}_{vp_name}_full.png")

            print(f"Capturing {url} ...")
            try:
                capture(page, url, atf_path, vp_width, vp_height)
                capture_full(page, url, full_path, vp_width, vp_height)
            except Exception as e:
                print(f"  ERROR: {e}")

        context.close()

    browser.close()

print("\nAll screenshots captured.")
