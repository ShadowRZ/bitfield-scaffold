---
layout: listing
metas: true
title: Listing example
description: This page queries /blog contents.
query:
  path: "/blog"
  sort:
    - date: -1
  where:
    - _partial: false
---

You can additionally wrtie something here and it'll auto apply prose styling.

This page uses the following YAML front matter:

```yaml
layout: listing
metas: true
title: Listing example
description: This page queries /blog contents.
query:
  path: "/blog"
  sort:
    - date: -1
  where:
    - _partial: false
```
