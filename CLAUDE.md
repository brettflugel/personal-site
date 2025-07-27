# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with vanilla HTML, CSS, and JavaScript. The goal is to recreate a personal site using only these core web technologies based on learnings from online courses.

## Architecture

This is a simple static website with the following structure:

- **index.html**: Main homepage containing experience, education, skills, and contact sections
- **Pages/**: Contains secondary pages (about.html, blog.html, contact.html) 
- **Templates/**: Contains reusable HTML components (header.html with navigation)
- **style.css**: All styling using flexbox layout with a two-column responsive design
- **scripts.js**: Currently minimal/empty JavaScript file

The site uses a clean, academic resume-style layout with:
- Centered header with name
- Horizontal navigation menu
- Two-column content layout using flexbox
- Consistent typography using 'Old Standard TT' font family

## Development Notes

- This is a static site with no build process, package manager, or bundling
- No frameworks or libraries are used - pure HTML/CSS/JS only
- The site appears to be in early development stages with some placeholder content
- Navigation uses relative paths (./Pages/about.html)
- Templates directory suggests intention to modularize common components
- CSS uses modern flexbox for responsive layout

## File Organization

- Root level contains the main index.html and core assets
- Pages/ subdirectory contains individual page files
- Templates/ contains reusable HTML snippets
- All styles consolidated in a single style.css file
- Single scripts.js file for any JavaScript functionality

Since this is a static site with no build tools, changes can be tested by opening HTML files directly in a browser or using a simple local server.