---
sidebar_position: 5
---

# Animation Speed

> Customize the seconds of the slider animation

```html title="index.html" {10}
<!-- Slider Elements -->
<script src="https://cdn.jsdelivr.net/npm/@evairx/heliosjs/helios.min.js"></script>

<script>
    let helios = HeliosConfig({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000, // 10 seconds.
        speed: 1500, // 1.5 seconds.
    });
</script>
```