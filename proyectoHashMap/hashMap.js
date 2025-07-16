function createHashMap(initialCapacity = 8, loadFactor = 0.75) {
  let capacity = initialCapacity;
  let size = 0;
  let buckets = Array(capacity).fill(null).map(() => []);

  function hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * prime + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  }

  function set(key, value) {
    const index = hash(key);
    const bucket = buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    size++;
    if (size / capacity > loadFactor) {
      resize();
    }
  }

  function get(key) {
    const index = hash(key);
    const bucket = buckets[index];
    for (let [k, v] of bucket) {
      if (k === key) return v;
    }
    return null;
  }

  function has(key) {
    const index = hash(key);
    return buckets[index].some(([k]) => k === key);
  }

  function remove(key) {
    const index = hash(key);
    const bucket = buckets[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        size--;
        return true;
      }
    }
    return false;
  }

  function length() {
    return size;
  }

  function clear() {
    buckets = Array(capacity).fill(null).map(() => []);
    size = 0;
  }

  function keys() {
    return buckets.flatMap(bucket => bucket.map(([k]) => k));
  }

  function values() {
    return buckets.flatMap(bucket => bucket.map(([_, v]) => v));
  }

  function entries() {
    return buckets.flatMap(bucket => bucket);
  }

  function resize() {
    const oldBuckets = buckets;
    capacity *= 2;
    buckets = Array(capacity).fill(null).map(() => []);
    size = 0;
    for (let bucket of oldBuckets) {
      for (let [key, value] of bucket) {
        set(key, value);
      }
    }
  }

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
    hash,
    debug() {
      return { capacity, size, buckets };
    }
  };
}

const test = createHashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

test.set('apple', 'verde');
test.set('lion', 'amarillo');

test.set('moon', 'silver');

test.set('grape', 'uva');
test.set('frog', 'rana');

test.get('apple');
test.get('kite');
test.has('dog');
test.has('banana');
test.remove('banana');
test.length();
test.keys();
test.values();
test.entries();
test.clear();
test.length();
