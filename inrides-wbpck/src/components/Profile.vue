<template>
  <div>
    <div class="top-part">
      <MainHeader/>
    </div>
    <div class="profile-wrap">
      <div>
        <label for="name">
          <span class="lbl-fld">Your name:</span>
          <input type="text" id="name" name="name" v-model="uname">
        </label>
      </div>
      <div class="photo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div>
        <label for="nickname">
          <span class="lbl-fld">Your nickname:</span>
          <input type="text" id="nickname" name="nickname" v-model="unick">
        </label>
      </div>
      <div>
        <label for="about">
          <span class="lbl-fld">About you:</span>
          <textarea type="text" id="about" name="about" v-model="uabout">
          </textarea>
        </label>
      </div>
      <div>
        <label for="age">
          <span class="lbl-fld">Your age:</span>
          <input type="number" id="age" name="age" v-model="uage">
        </label>
      </div>
      <div>
        <label for="yes">
          <span class="lbl-fld">Have your own bicycle?</span>
          <label for="yes">
            <input type="checkbox" id="yes" name="with-by" v-model="uhaveTrue" @click="checkCheckbox(true)">
            YES
          </label>
          <label for="no">
            <input type="checkbox" id="no" name="with-by" v-model="uhaveFalse" @click="checkCheckbox(false)">
            NO
          </label>
        </label>
      </div>
      <div class="btns-wrapper">
        <a class="btn"><span>Edit</span><em></em></a>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from './MainHeader'

export default {
  name: "profile",
  data: function () {
    return {
      uname: "Eugeniy",
      unick: "Bamboosha",
      uabout: "Good boy, would like to chill out with you! Every Sunday and Monday I'm free! ;)",
      uage: 24,
      uhaveTrue: true,
      uhaveFalse: false
    }
  },
  methods: {
    checkCheckbox (n) {
      if(n) {
        this.uhaveFalse = this.uhaveTrue
      } else {
        this.uhaveTrue = this.uhaveFalse
      }

    }
  },
  components: {
    MainHeader
  }
}
</script>

<style lang="scss" scoped>
.profile-wrap {
  font-size: large;
  text-align: left;
  margin: 40px auto;
  padding: 40px;
  width: 90%;
  background-color: #fff;
  min-height: 600px;
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
}

.photo {
  float: right;
  width: 300px;
  height: 300px;
  padding: 10px;
  border: 4px solid black;
  line-height: 300px;
  img {
    width: 300px;
    cursor: pointer;
    vertical-align: middle;
  }
  -webkit-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
  box-shadow: -13px 10px 46px -8px rgba(0,0,0,0.75);
}

.lbl-fld {
  display: inline-block;
  width: 200px;
}

textarea {
  width: 300px;
  height: 200px;
  max-height: 200px;
  min-height: 200px;
  max-width: 300px;
  min-width: 300px;
}

input, textarea {
  margin-bottom: 8px;
}

.btns-wrapper {
  position: relative;
}
.btn {
  cursor: pointer;
  background-color: #000;
  width: 200px;
  height: 50px;
  line-height: 50px;
  position: absolute;
  left: 100px;
  top: 40px;
  transform: translate(-50%, -50%);
  z-index: 0;
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.34);
  span {
    color: #fff;
    display: block;
    padding-left: 35px;
    text-transform: uppercase;
    font: bold 18px/50px Arial;
    transform: scaleX(0.6);
    letter-spacing: 3px;
    transform-origin: center left;
    transition: color 0.3s ease;
    position: relative;
    z-index: 1;
  }
  em {
    position: absolute;
    height: 1px;
    background: #fff;
    width: 30%;
    right: 23px;
    top: 50%;
    transform: scaleX(0.25);
    transform-origin: center right;
    transition: all 0.3s ease;
    z-index: 1;
  }
  &:before, &:after {
    content: '';
    background: #fff;
    height: 50%;
    width: 0;
    position: absolute;
    transition: .3s cubic-bezier(.785,.135,.15,.86);
  }
  &:before {
    top: 0;
    left: 0;
    right: auto;
  }
  &:after {
    bottom: 0;
    right: 0;
    left: auto;
  }
  &:hover {
    &:before {
      width: 100%;
      right: 0;
      left: auto;
    }
    &:after {
      width: 100%;
      left: 0;
      right: auto;
    }
    span {
      color: #000;
    }
    em {
      background: #000;
      transform: scaleX(1);
    }
  }
}

</style>
