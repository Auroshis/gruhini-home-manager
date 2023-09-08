<template>
  <div class="container">
    <!-- Title -->
    <div class="title">Invlog</div>

    <!-- Tabs -->
    <div class="tabs">
      <div
        class="tab"
        :class="{ active: activeTab === 'Available' }"
        @click="activeTab = 'Available'"
        style="color: #4CAF50;"
      >
        <i class="fas fa-check-circle"></i> Available
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'Buy Again' }"
        @click="activeTab = 'Buy Again'"
        style="color: #FF5722;"
      >
        <i class="fas fa-shopping-cart"></i> Buy Again
      </div>
      <div
        class="tab"
        :class="{ active: activeTab === 'Expires Soon' }"
        @click="activeTab = 'Expires Soon'"
        style="color: #FFC107;"
      >
        <i class="fas fa-clock"></i> Expires Soon
      </div>
    </div>

    <!-- Item List -->
    <div class="item-list">
      <div v-for="item in filteredItems" :key="item.id" class="item-card">
        <div class="item">
          <div class="item-details">
            <div class="item-name">{{ item.item_name }}</div>
            <div class="item-date">{{ item.placed_at }}</div> <!-- placed_at below item_name -->
          </div>
          <div class="item-date-right">{{ item.use_by }}</div> <!-- use_by on the right -->
        </div>
      </div>
    </div>

    <!-- Add Item Button -->
    <button class="add-button" @click="showAddPopup">+</button>

    <!-- Loading Animation -->
    <div class="loading" v-if="loading">
      <div class="spinner"></div>
    </div>

    <!-- Add Item Popup -->
    <AddItemPopup v-if="showPopup" @closePopup="closePopup" />
  </div>
</template>

<script>
import axios from "axios";
import AddItemPopup from "./AddItemPopup.vue";

export default {
  name: "HomeInventory",
  components: {
    AddItemPopup,
  },
  data() {
    return {
      activeTab: "Available",
      showPopup: false,
      loading: true, // Add loading state
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
          method: "get",
          maxBodyLength: Infinity,
          url: "https://invlog-backend2-wbmhxsi47a-uc.a.run.app",
          headers: {},
        };

        axios
          .request(config)
          .then((response) => {
            this.items = response.data;
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false; // Turn off loading animation
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
/* Global styles for all screen sizes */
.container {
  max-width: 800px; /* Maximum width of the container */
  margin: 0 auto; /* Center-align the container */
  background-color: #fff; /* White background color */
  padding: 20px; /* Add padding inside the container */
}

/* Title */
.title {
  font-size: 96px; /* 4 times larger font size */
  text-align: center; /* Center-align the title */
  background: linear-gradient(90deg, #40a9ff, #008eff); /* Gradient blue background */
  -webkit-background-clip: text;
  color: transparent; /* Make the text transparent to reveal the gradient background */
  margin-bottom: 20px; /* Add space from the bottom */
}

/* Tabs */
/* Tabs */
.tabs {
  display: flex;
  justify-content: space-between; /* Distribute tabs evenly */
  margin-top: 20px; /* Add space from the top */
  padding: 10px 0; /* Add padding to tabs */
}

.tab {
  cursor: pointer;
  transition: color 0.3s ease; /* Smooth color transition */
  width: 200px; /* Equal width for three tabs */
  display: flex;
  align-items: center; /* Center-align tab contents vertically */
  font-size: 24px; /* Increase font size for tabs */
  font-weight: bold; /* Bold font weight for active tab */
  text-align: center; /* Center-align tab text */
  padding: 1px; /* Add padding to tabs */
  background-color: white; /* White background for tabs */
}

.tab.active {
  color: white; /* Light text color for active tab */
}

.tab i {
  margin-right: 5px; /* Add space between icon and text */
}

/* Item List */
.item-list {
  display: flex;
  flex-direction: column;
  align-items: left; /* Left-align items horizontally */
  padding: 20px 0; /* Add padding around the item list */
}

.item-card {
  width: 70%; /* Reduced width by 30% */
  margin: 0 auto; /* Center-align the item card */
}

.item {
  background-color: #2d2d2d; /* Dark-themed background */
  padding: 15px; /* Adjust padding as needed */
  margin-bottom: 15px; /* Adjust margin between items */
  border-radius: 5px; /* Slight border radius */
  box-shadow: 5px 5px 15px #0a0a0a, -5px -5px 15px #3a3a3a; /* Dark-themed neumorphic shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item-details {
  text-align: left; /* Left-align item details */
  color: #4086fe; /* Text color */
}

.item-name {
  font-size: 24px; /* 2 times larger font size */
  font-weight: bold;
}

.item-date {
  font-size: 18px;
  color: #40a9ff; /* Font size for placed_at */
}

.item-date-right {
  font-size: 18px; /* Font size for use_by */
  text-align: right;
  color: #40a9ff; /* Right-align use_by */
}

/* Add Item Button */
.add-button {
  background-color: #333; /* Dark button background color */
  color: #f0f0f0; /* Light button text color */
  border: none;
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 5px 5px 15px #0a0a0a, -5px -5px 15px #3a3a3a; /* Dark-themed neumorphic shadow */
  font-size: 24px; /* Adjust font size as needed */
  position: fixed;
  bottom: 20px;
  right: 20px;
}

/* Loading Animation */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999; /* Place above other content */
}

.spinner {
  border: 4px solid rgba(255, 255, 255, 0.3); /* Light border color */
  border-top: 4px solid #40a9ff; /* Border color matching the title */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite; /* Spin animation */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive styles for smaller screens (e.g., mobile) */
@media (max-width: 768px) {
  .tabs {
    flex-direction: column; /* Stack tabs vertically on small screens */
    align-items: center; /* Center-align tabs horizontally */
  }

  .tab {
    width: 100%; /* Full width for tabs on smaller screens */
    margin: 5px 0; /* Add margin to tabs for spacing */
  }

  .item-card {
    width: 100%; /* Take up full width on smaller screens */
  }

  .item {
    flex-direction: column; /* Stack item details vertically on smaller screens */
  }

  .item-details {
    margin-bottom: 10px; /* Add space between item name and date */
    text-align: center; /* Center-align item details on smaller screens */
  }

  .item-date-right {
    text-align: center; /* Center-align use_by on smaller screens */
  }
}
</style>
