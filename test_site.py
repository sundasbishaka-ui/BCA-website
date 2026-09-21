"""
Automated Verification Suite for BCA Department Website
"""
import os
import re
import json
import sys

# Ensure UTF-8 output if possible
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

WORKSPACE = r"c:\Users\sunda\OneDrive\Documents\bca_department"

def run_tests():
    print("--- Starting BCA Website Verification Suite ---")
    errors = []
    
    # 1. Check all required files exist
    required_files = [
        "index.html",
        "README.md",
        "data/department.json",
        "assets/css/variables.css",
        "assets/css/main.css",
        "assets/css/components.css",
        "assets/css/responsive.css",
        "assets/js/data.js",
        "assets/js/app.js",
        "assets/js/components/navigation.js",
        "assets/js/components/curriculum.js",
        "assets/js/components/faculty.js",
        "assets/js/components/notices.js",
        "assets/js/components/events.js",
        "assets/js/components/facilities.js",
        "assets/js/components/contact.js"
    ]
    
    print("\n[1] Verifying File Structure...")
    for rel_path in required_files:
        full_path = os.path.join(WORKSPACE, rel_path)
        if not os.path.exists(full_path):
            errors.append(f"Missing required file: {rel_path}")
        else:
            size = os.path.getsize(full_path)
            if size == 0:
                errors.append(f"File is empty: {rel_path}")
            else:
                print(f"  [OK] {rel_path} ({size} bytes)")

    # 2. Check JSON validity
    print("\n[2] Validating JSON Data Schema...")
    json_path = os.path.join(WORKSPACE, "data", "department.json")
    try:
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            assert "departmentInfo" in data, "Missing departmentInfo in JSON"
            print("  [OK] department.json parsed successfully and has required root keys")
    except Exception as e:
        errors.append(f"JSON validation error: {e}")

    # 3. Check HTML structure and section presence
    print("\n[3] Validating HTML Semantics and Required Sections...")
    html_path = os.path.join(WORKSPACE, "index.html")
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    required_sections = [
        ("home", "Home / Hero Section"),
        ("about", "About the Department Section"),
        ("courses", "Courses Section"),
        ("curriculum", "Curriculum Section"),
        ("faculty", "Faculty Members Section"),
        ("notices", "Notices / Announcements Section"),
        ("events", "Events Section"),
        ("facilities", "Facilities Section"),
        ("contact", "Contact Section")
    ]

    for sec_id, sec_name in required_sections:
        if f'id="{sec_id}"' in html:
            print(f"  [OK] Section '{sec_name}' (id='{sec_id}') found")
        else:
            errors.append(f"Missing section in index.html: {sec_name} (id='{sec_id}')")

    # 4. Check CSS & JS references in index.html
    print("\n[4] Validating Asset Linkages in HTML...")
    css_links = re.findall(r'<link rel="stylesheet" href="([^"]+)"', html)
    for css in css_links:
        css_full = os.path.join(WORKSPACE, css.replace("/", os.sep))
        if os.path.exists(css_full):
            print(f"  [OK] Linked stylesheet exists: {css}")
        else:
            errors.append(f"Linked stylesheet not found: {css}")

    js_scripts = re.findall(r'<script src="([^"]+)"', html)
    for js in js_scripts:
        js_full = os.path.join(WORKSPACE, js.replace("/", os.sep))
        if os.path.exists(js_full):
            print(f"  [OK] Linked script exists: {js}")
        else:
            errors.append(f"Linked script not found: {js}")

    # 5. Check data.js content completeness
    print("\n[5] Checking data.js Content Completeness...")
    data_js_path = os.path.join(WORKSPACE, "assets", "js", "data.js")
    with open(data_js_path, "r", encoding="utf-8") as f:
        data_js = f.read()

    data_keys = ["departmentInfo", "stats", "about", "programs", "curriculum", "faculty", "notices", "events", "facilities", "faqs"]
    for k in data_keys:
        if f"{k}:" in data_js or f'"{k}":' in data_js:
            print(f"  [OK] Key '{k}' present in data store")
        else:
            errors.append(f"Missing data key in data.js: {k}")

    # Summary
    print("\n-------------------------------------------")
    if not errors:
        print("[SUCCESS] ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!")
        return 0
    else:
        print(f"[FAILED] Verification failed with {len(errors)} errors:")
        for err in errors:
            print(f"  - {err}")
        return 1

if __name__ == "__main__":
    sys.exit(run_tests())
