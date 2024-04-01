# Sundown Studio Clone

This project is a clone of the Sundown Studio website, created using core HTML, CSS, and JavaScript. It incorporates smooth scrolling functionality using Locomotive Scroll.

## Tech Stack

- HTML
- CSS
- JavaScript
- Locomotive Scroll

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/sundown-studio-clone.git
```

2. Navigate to the project directory:

```
cd sundown-studio-clone
```

3. Open the `index.html` file in your preferred web browser.

## Usage

Feel free to explore the cloned Sundown Studio website. Use the navigation menu to browse different sections and enjoy the smooth scrolling experience provided by Locomotive Scroll.

## Locomotive Scroll CDN

To include Locomotive Scroll in your project, add the following CDN link in the `<head>` section of your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.0.6/dist/locomotive-scroll.min.js"></script>
```

Then, initialize Locomotive Scroll in your JavaScript file:

```javascript
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});
```

Make sure to replace `[data-scroll-container]` with the appropriate selector for your scroll container.

## Credits

This project is inspired by the Sundown Studio website.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
