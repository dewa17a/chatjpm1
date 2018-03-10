<template>
	<div class="log">
		<pesan v-for="message in messages" v-bind:message="message"></pesan>
	</div>
</template>

<script>
export default {

  name: 'log',

  props:['messages']
}
</script>

<style lang="css" scoped>
.log .pesan:nth-child(even){
	background-color: #ccc; 
}
</style>