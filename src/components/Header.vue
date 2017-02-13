<template>
  <div class="Header">
    <div id="title">
      <h1>{{ msg }}</h1>
    </div>
    <div id="action">
      <!-- TODO:商品追加処理の実装 -->
      <button type="button" class="button">商品追加</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: '買い物かごシステム'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 60px;
    background-color: darkslateblue;
    color: aliceblue;
    text-align: center;
  }
  
  #title{
    float: left;
    width: 70%;
    height: 100%;
  }
  #action{
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    width: 30%;
    height: 100%;
  }
  
  .button {
	display: inline-block;
	outline: none;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	font: 14px/100% Arial, Helvetica, sans-serif;
	padding: .5em 2em .55em;
	text-shadow: 0 1px 1px rgba(0,0,0,.3);
	-webkit-border-radius: .5em; 
	-moz-border-radius: .5em;
	border-radius: .5em;
	-webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	-moz-box-shadow: 0 1px 2px rgba(0,0,0,.2);
	box-shadow: 0 1px 2px rgba(0,0,0,.2);
    background-color: rgb(156, 230, 15);
  }
  .button:hover {
  	text-decoration: none;
  }
  .button:active {
  	position: relative;
  	top: 1px;
  }
  
  h1, h2 {
    font-weight: normal;
    margin: 0;
    height: 60px;
    line-height: 60px;
  }
  
</style>
