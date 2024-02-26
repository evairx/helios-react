---
sidebar_position: 1
---

# Infinite

> When you put the infinite to your slider it will be in loop mode, 
> when it reaches the final element it will restart and start again.

### Add a new `<script>` for passing props

```html title="index.html" {6}
<!-- Slider Elements -->
<script src="https://cdn.jsdelivr.net/npm/@evairx/heliosjs/helios.min.js"></script>

<script>
    let helios = HeliosConfig({
        infinite: true,
    });
</script>
```