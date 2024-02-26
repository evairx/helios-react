---
sidebar_position: 4
---

# AutoPlay Speed

> Customize slider autoPlay seconds

```html title="index.html" {9}
<!-- Slider Elements -->
<script src="https://cdn.jsdelivr.net/npm/@evairx/heliosjs/helios.min.js"></script>

<script>
    let helios = HeliosConfig({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000, // 10 seconds
    });
</script>
```