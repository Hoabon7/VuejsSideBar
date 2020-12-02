<template>
  <div class="container listCart">
    <div>
      <select
        v-model="selected"
        @change="onChange($event)"
        class="form-control"
      >
        <option value="0">Chọn</option>
        <option value="1">Gía xe thấp nhất</option>
        <option value="2">Gía xe cao nhất</option>
        <option value="3">Công xuất thấp nhất</option>
        <option value="4">Công xuất cao nhất</option>
      </select>
    </div>

    <div
      class="row list_car_bank"
      v-for="(item, index) in list_car"
      :key="index"
    >
      <div class="col-md-4 list_logo_car">
        <div class="col-md-12 col-xs-6">
          <img
            class="img_car"
            :src="`http://bankconnect.vn/${item.image}`"
            alt=""
          />
        </div>
        <div class="col-md-12 col-xs-6">
          <p>{{ item.ten_xe }}</p>
          <p>Giá bán (niêm yết)</p>
          <h3>{{ item.gia_ban }}</h3>
          <p class="uoctinh">Ước tính giá lăn bánh</p>
        </div>
      </div>
      <div class="col-md-8">
        <div>
          <ul class="list_info_car">
            <!-- <p>{{Number(item.gia_ban)+2222}}</p> -->
            <li>{{ item.dong_co }}</li>
            <li>{{ item.hop_so }}</li>
            <li>{{ item.cong_suat }}</li>
            <li>{{ item.momen }}</li>
            <li>{{ item.kich_thuoc }}</li>
          </ul>
        </div>
        <div class="btn-detail">
          <button class="btn btn-danger">chi tieet</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//
export default {
  data() {
    return {
      id_type_car: this.$route.params.id,
      list_car: null,
      url:
        "https://bankconnect.vn/api/service/9/car/category/" +
        this.$route.params.id +
        "/items/get",
      selected: 0,
      name_type_car: this.$route.params.namecar,
    };
  },
  methods: {
    fetchGifs: function () {
      fetch(this.url)
        .then((reponse) => reponse.json())
        .then((data) => (this.list_car = data.data));
    },
    splitString: function (string) {
      var t = string.split("/");
      return t;
    },
    onChange(event) {
      var t = event.target.value;

      if (t != 0) {
        if (t == 1) {
          for (let i = 0; i < this.list_car.length-1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              if (
                Number(this.list_car[i].gia_ban) >
                Number(this.list_car[j].gia_ban)
              ) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j]= t;
              }
            }
          }
        } else if (t == 2) {
          //xep xe gia cao nhat den thap nhat
          for (let i = 0; i < this.list_car.length-1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              if (
                Number(this.list_car[i].gia_ban) <
                Number(this.list_car[j].gia_ban)
              ) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
        } else if (t == 3) {
          for (let i = 0; i < this.list_car.length - 1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              let z = this.splitString(this.list_car[i].cong_suat);
              let k = this.splitString(this.list_car[j].cong_suat);
              if (Number(z[0]) > Number(k[0])) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
          //xep xe cong xuat thap nhat den cao nhat
          //alert(3);
        } else {
          //xep xe cong xuat cao nhat xuong thap nhat
          for (let i = 0; i < this.list_car.length - 1; i++) {
            for (let j = i; j < this.list_car.length; j++) {
              let z = this.splitString(this.list_car[i].cong_suat);
              let k = this.splitString(this.list_car[j].cong_suat);
              if (Number(z[0]) < Number(k[0])) {
                let t = this.list_car[i];
                this.list_car[i] = this.list_car[j];
                this.list_car[j] = t;
              }
            }
          }
        }
      }
    },
  },

  created: function () {
    // sử dụng created để fetch data từ phía backend ngay lúc khởi tạo.
    this.fetchGifs();
  },
};
</script>
<style scoped>
.listCart {
  width: 700px;
}
.img_car {
  width: 100%;
}
.list_car_bank {
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin-top: 20px;
}
.list_info_car {
  text-align: left;
}
.btn-detail {
  text-align: right;
}
h3 {
  color: #c80000;
}
.uoctinh {
  color: #c80000;
  font-size: 12px;
}
</style>