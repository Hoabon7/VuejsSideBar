<template>
  <div class="row DataJson">
    <div v-for="(item, index) in gifs" :key="index" class="col-4 img_car">
      <img
        @click="goToEvents(item.name, item.id)"
        :src="`http://bankconnect.vn/${item.image}`"
        alt=""
        class="logo_car uk-button uk-button-link"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: "https://bankconnect.vn/api/car/category",
      gifs: null,
      typeCar: "",
    };
  },
  methods: {
    fetchGifs: function () {
      fetch(this.url)
        .then((reponse) => reponse.json())
        .then((data) => (this.gifs = data.data));
    },
    goToEvents: function (name, id) {
      this.typeCar = name;
      location.href =
        "http://localhost:8080/catagoryCar/ListCar" + "/" + id + "/" + name;
    },
  },
  created: function () {
    // sử dụng created để fetch data từ phía backend ngay lúc khởi tạo.
    this.fetchGifs();
  },
  mounted: function () {
    this.fetchGifs();
  },
};
</script>
<style scoped>
.DataJson {
  border: 1px solid green;
  width: 700px;
  height: 1500px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
}

.img_car {
  margin-top: 15px;
  margin-bottom: 15px;
}
.logo_car {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  width: 200px;
  height: 100px;
  object-fit: scale-down;
  vertical-align: middle;
  padding: 10px;
}
</style>