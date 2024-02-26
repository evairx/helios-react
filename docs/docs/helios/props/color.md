---
sidebar_position: 6
---

# Color

> Customize the color of your slider's prev/next buttons and dots

```html title="index.html" {11}
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
    });
</script>
```