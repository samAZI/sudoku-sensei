<template>
<div>
  <div class="grid">
      <div class="row" :key="`row-${row}`" v-for="(row, rowIndex) in values">
          <div class="box" :key="`column-${item}`" v-for="(item, columnIndex) in row">
            <div class="inner">{{item}}</div>
            <input :ref="`item-${rowIndex}-${columnIndex}`" v-show="mask[rowIndex][columnIndex] === 'a'" class="inner">
        </div>
      </div>
  </div>
  <button class="btn btn-reset">Reset</button>
  <button class="btn btn-validate" @click="validate">Valider</button>
</div>
</template>

<script>
import Vue from 'vue'

export default {

  name: 'grid',

  data () {
    return {
      values: [
        ['6', '2', '9', '8', '5', '3', '7', '4', '1'],
        ['4', '1', '8', '6', '7', '9', '3', '2', '5'],
        ['5', '3', '7', '1', '4', '2', '6', '8', '9'],
        ['8', '6', '4', '2', '9', '1', '5', '3', '7'],
        ['3', '5', '2', '7', '8', '6', '1', '9', '4'],
        ['7', '9', '1', '4', '3', '5', '2', '6', '8'],
        ['2', '7', '3', '9', '1', '8', '4', '5', '6'],
        ['9', '4', '5', '3', '6', '7', '8', '1', '2'],
        ['1', '8', '6', '5', '2', '4', '9', '7', '3'],
      ],
      mask: [
        ['a', 'a', 'a', 'a', 'b', 'b', 'a', 'a', 'a'],
        ['b', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'b'],
        ['a', 'a', 'a', 'b', 'a', 'a', 'b', 'b', 'a'],
        ['a', 'b', 'a', 'a', 'a', 'b', 'a', 'a', 'b'],
        ['b', 'a', 'b', 'a', 'a', 'a', 'b', 'a', 'b'],
        ['b', 'a', 'a', 'b', 'a', 'a', 'a', 'b', 'a'],
        ['a', 'b', 'b', 'a', 'a', 'b', 'a', 'a', 'a'],
        ['b', 'a', 'a', 'a', 'b', 'a', 'a', 'a', 'b'],
        ['a', 'a', 'a', 'b', 'b', 'a', 'a', 'a', 'a'],
      ]
    }
  },
  methods: {
    validate() {
      Object.keys(this.$refs).forEach(key => {
        const input = this.$refs[key]
        const rowIndex = key.split('-')[1]
        const columnIndex = key.split('-')[2]
        const value = input[0].value
        if (value === this.values[rowIndex][columnIndex]) {
          Vue.set(this.mask[rowIndex], columnIndex, 'b')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 4px 10px;
  text-align: center;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  margin-left: 10px;
  &.btn-reset {
    background-color: red;
  }
  &.btn-validate {
    background-color: #23A913;
  }  
}
.grid {
    margin: 0 auto;
    width: 80vw;
    max-width: 70vh;
    height: 80vw;
    max-height: 70vh;
    font-size: 1rem;
}
.row {
    display: flex;
}
.box {
    background: #AAAAAA;
    margin: 5px;
    color: white;
    font-weight: bold;
    flex: 1 0 auto;
    position: relative;
}
.box:after {
    content: "";
    float:left;
    display: block;
    padding-top: 100%;
}
.box .inner {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
input {
  font-size: 1rem;
}
</style>
