#!/usr/bin/env python3
import re
import sys
import os

def fix_encoding(text):
    replacements = [
        ('Ã¤', 'ä'), ('Ã¼', 'ü'), ('Ã¶', 'ö'),
        ('Ã„', 'Ä'), ('Ãœ', 'Ü'), ('Ã–', 'Ö'),
        ('ÃŸ', 'ß'), ('Ã©', 'é'), ('Ã¨', 'è'),
        ('Ã«', 'ë'), ('Ã­', 'í'), ('Ã¡', 'á'),
        ('Ã§', 'ç'), ('Â·', '·'), ('â€¢', '•'),
        ('â€™', "'"), ('â€"', '–'), ('â€"', '—'),
        ('ã¼', 'ü'), ('ã¤', 'ä'),
    ]
    for bad, good in replacements:
        text = text.replace(bad, good)
    return text

def extract_article(filepath):
    with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
        content = f.read()
    content = fix_encoding(content)

    # Try to extract main content
    main_match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
    if main_match:
        html = main_match.group(1)
    else:
        html = content

    # Remove scripts and styles
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)

    return html

basedir = '/Users/maviscat/TennisKompass/archiv/TennisKompass WebSeite'
files = [
    'kinderschlaeger.html', 'kinderschuhe.html', 'vereine.html', 'tennisschule.html',
    'kosten.html', 'liganu.html', 'turniere.html', 'medenspiele.html',
    'familiencamps.html', 'eltern-kodex.html', 'tennisprofi.html',
    'index.html'
]

for f in files:
    path = os.path.join(basedir, f)
    print(f'\n{"="*60}')
    print(f'FILE: {f}')
    print('='*60)
    try:
        html = extract_article(path)
        # Extract text content for preview
        text = re.sub(r'<[^>]+>', ' ', html)
        text = re.sub(r'\s+', ' ', text).strip()
        print(text[:1000])
    except Exception as e:
        print(f'ERROR: {e}')
