---
sidebar_position: 6
---

# Custom Arrows

> You can change the Prev and Next arrows, as you like, as shown in the following example

# 1. Add your SVGs Icons

```html title="index.html" {12,13}
<!-- Slider Elements -->
<script src="https://cdn.jsdelivr.net/npm/@evairx/heliosjs/helios.min.js"></script>

<script>
    let helios = HeliosConfig({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000, // 10 seconds.
        speed: 1500, // 1.5 seconds.
        color: "#fff",
        nextArrow: { component: '<svg>Your Next Svg Icon</svg>' }
        prevArrow: { component: '<svg>Your Prev Svg Icon</svg>' }
    });
</script>
```

# 2. Custom CSS

```html title="index.html" {3,4}
<script>
    let helios = HeliosConfig({
        nextArrow: { component: '<svg>Your Next Svg Icon</svg>' , class: 'your-custom-next-class' }
        prevArrow: { component: '<svg>Your Prev Svg Icon</svg>' , class: 'your-custom-prev-class' }
    });
</script>
```

```css title="customArrows.css"
.your-custom-next-class {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
}

.your-custom-prev-class {
    position: absolute;
    bottom: 0;
    right: 44px;
    cursor: pointer;
}
```