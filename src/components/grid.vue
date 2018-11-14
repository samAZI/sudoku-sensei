<template>
<div>
  <div class="grid">
      <div class="row" :key="`row-${row}`" v-for="(row, y) in values">
          <div class="box" :key="`column-${item}`" v-for="(item, x) in row">
            <div class="inner">{{item}}</div>
            <input :ref="`item-${y}-${x}`"
                   v-show="mask[y][x] === 'a'"
                   class="inner"/>
        </div>
      </div>
  </div>
  <div>Nombre d'erreurs: {{validateErrors}}</div>
  <button class="btn btn-reset">Reset</button>
  <button class="btn btn-validate" @click="validate">Valider</button>
</div>
</template>

<script>
import Vue from 'vue';
import { generate } from '@/modules/generateGrid';

export default {

  name: 'grid',

  data() {
    return {
      validateErrors: 0,
      values: generate(),
      mask: [
        ['b', 'a', 'b', 'b', 'b', 'a', '42', 'b', 'a'],
        ['b', 'b', 'b', 'b', 'a', 'b', 'b', 'b', 'b'],
        ['a', 'b', 'a', 'b', 'b', 'b', 'a', 'b', 'b'],
        ['b', 'a', 'a', 'b', 'a', 'b', 'b', 'a', 'a'],
        ['b', 'b', 'a', 'b', 'a', 'b', 'b', 'b', 'b'],
        ['a', 'a', 'b', 'b', 'b', 'a', 'b', 'b', 'b'],
        ['a', 'b', 'b', 'a', 'b', 'b', 'a', 'a', 'b'],
        ['b', 'b', 'b', 'a', 'b', 'b', 'b', 'a', 'a'],
        ['b', 'a', 'b', 'b', 'b', 'a', 'b', 'a', 'b'],
      ],
    }
  },
  methods: {
    validate() {
      Object.keys(this.$refs).forEach(key => {
        const input = this.$refs[key]
        const y = key.split('-')[1]
        const x = key.split('-')[2]
        const value = input[0].value

        if (value === this.values[y][x]) {
          Vue.set(this.mask[y], x, 'b')
        } else if (value) {
          this.validateErrors += 1;
          input[0].classList.add('error');
        } else if (input[0].classList.contains('error')) {
          input[0].classList.remove('error');
        }
      });
    },
  },
};
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
    text-align: center;

  &.error {
    background-color: red;
  }
}
hr {
  flex-grow: 1;
  /* width: 100%; */ /* or this */
}
</style>
