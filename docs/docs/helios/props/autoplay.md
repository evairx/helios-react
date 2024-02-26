---
sidebar_position: 3
---

# AutoPlay

> Enabling this option will have autoplay in your slider.

```html title="index.html" {8}
<!-- Slider Elements -->
<script src="https://cdn.jsdelivr.net/npm/@evairx/heliosjs/helios.min.js"></script>

<script>
    let helios = HeliosConfig({
        infinite: true,
        dots: true,
        autoplay: true,
    });
</script>
```