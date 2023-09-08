<template>
  <div class="popup">
    <div class="popup-content">
      <input v-model="newItem.name" placeholder="Item Name" />
      <input v-model="newItem.category" placeholder="Item Category" />
      <input type="datetime-local" v-model="newItem.useBy" placeholder="Use By" />
      <select v-model="newItem.status">
        <option value="Available">Available</option>
        <option value="Buy Again">Buy Again</option>
        <option value="Expires Soon">Expires Soon</option>
      </select>
      <input v-model="newItem.placed_at" placeholder="Placed At" />
      <button @click="addItem">Add Item</button>
      <button @click="closePopup">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddItemPopup',
  props: {},
  data() {
    return {
      newItem: {
        name: "",
        category: "",
        useBy: "",
        status: "Available",
        placed_at: "",
      },
    };
  },
  methods: {
    addItem() {
      // Add logic to send new item data to API
      this.$emit("closePopup");
    },
    closePopup() {
      this.$emit("closePopup");
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.popup-content {
  background-color: white;
  padding: 20px;
  padding-right: 40px; /* Added padding to the right */
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.popup input,
.popup select {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.popup button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.popup button:hover {
  background-color: #555;
}

.popup button:not(:last-child) {
  margin-right: 10px;
}
</style>
