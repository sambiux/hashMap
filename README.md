# hashMap

🧾 Code Description: HashMap Implementation Using a Factory Function in JavaScript
This code implements a hash map data structure (HashMap) using a factory function. A HashMap efficiently stores key-value pairs and supports fast operations for insertion (set), retrieval (get), deletion (remove), and more.

📦 How It Works
🔧 1. createHashMap() Function
This factory function creates a new hash map instance with:

initialCapacity: the starting number of buckets (default is 8).

loadFactor: the threshold (default is 0.75) that triggers automatic resizing when the map becomes too full.

Internally, it uses:

buckets: an array of arrays (each bucket stores multiple key-value pairs if collisions occur).

size: the current number of stored elements.

capacity: the current total capacity of the map.
