<template>
<div class="grid">
    <div class="row" v-for="row in values">
        <div class="box" v-for="item in row">
          <div class="inner">{{item}}</div>
      </div>
    </div>
</div>

</template>

<script>
export default {

  name: 'grid',

  data () {
    return {
      values: [
        ['', '', '', '', '5', '3', '', '', ''],
        ['4', '', '', '', '7', '', '', '', '5'],
        ['', '', '', '1', '', '', '6', '8', ''],
        ['', '6', '', '', '', '1', '', '', '7'],
        ['3', '2', '', '', '', '', '1', '', '4'],
        ['7', '', '', '4', '', '', '', '6', ''],
        ['', '7', '3', '', '', '8', '', '', ''],
        ['9', '', '', '', '6', '', '', '', '2'],
        ['', '', '', '5', '2', '', '', '', ''],
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
    background: tomato;
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
}
</style>
