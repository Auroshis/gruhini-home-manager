<template>
    <div>
      <div class="tabs">
        <button @click="activeTab = 'Available'">Available</button>
        <button @click="activeTab = 'Buy Again'">Buy Again</button>
        <button @click="activeTab = 'Expires Soon'">Expires Soon</button>
      </div>
  
      <div class="item-list">
        <div v-for="item in filteredItems" :key="item.id" class="item">
          <span>{{ item.item_name }}</span>
          <span>{{ item.placed_at }}</span>
          <span>{{ item.use_by }}</span>
          <button @click="showUpdateDelete(item)">...</button>
        </div>
      </div>
  
      <button @click="showAddPopup">+</button>
  
      <AddItemPopup v-if="showPopup" @closePopup="closePopup" />
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import AddItemPopup from "./AddItemPopup.vue";
//   const cors = require('cors');
  export default {
    name: 'HomeInventory',
    components: {
      AddItemPopup,
    },
    data() {
      return {
        activeTab: "Available",
        showPopup: false,
        items: [], // Fetch items from API and set here
      };
    },
    computed: {
      filteredItems() {
        return this.items.filter((item) => item.status === this.activeTab);
      },
    },
    methods: {
      showAddPopup() {
        this.showPopup = true;
      },
      closePopup() {
        this.showPopup = false;
      },
      fetchData() {
      try {
        let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://invlog-backend2-wbmhxsi47a-uc.a.run.app',
  headers: { }
};

axios.request(config)
.then((response) => {
    this.items = response.data;
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
        // axios.use(cors(origin , "https://invlog-backend2-wbmhxsi47a-uc.a.run.app",));
        // const response = axios.get();
        // Process the response daa as needed
        // this.items = response.data; // Assuming your data structure is an array of items
        console.log(this.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    // ... Other methods ...
      showUpdateDelete(item) {
        console.log(item);
        // Show update and delete options for the selected item
      },
    },
    mounted() {
        this.fetchData();
  },
  };
  </script>
  
  <style>
.tabs {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.tabs button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.tabs button:not(:last-child) {
  margin-right: 10px;
}

.item-list {
  margin-top: 20px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f7f7f7;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.item span {
  font-weight: bold;
}

.item button {
  background-color: #333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
}

.item button:hover {
  background-color: #555;
}
</style>

  