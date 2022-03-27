# Conditional Rendering 

* v-if 
* v-else
* v-else-if
* v-show

# List Rendering
## v-for Directive
* Array of strings
* Array of object
* Array of arrays
* Block of HTML elements
* Object key value pairs

## Key Attribute
A common practice and also recommended to provide a key attribute with the v-for directive

Key is a special attribute which is primarily used as a hint for Vue's virtual DOM algorithm to identify nodes when diffing the new DOM tree with the old DOM tree.

The key attribute helps Vue identify which items in a list have changed, are added or removed and plays a crucial role in handling UI correctly and efficiently.

When used with the v-for directive, the key attribute should always have a uniue value in each iteration.

Without keys, Vue uses an algorithm that minimizes elementmovement and tries to patch/reuse element of the same type in-place as much as possible.

Not using keys is only suitable when list render output does not rely on temporary DOM state or child component state.

Although the default of patching is more efficient, it can lead to problems.

A typical value to provide to the key attribute is the id property in an object. But any unique property will do as long as its not non-primitive value like object or arrays.