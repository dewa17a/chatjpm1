<template lang="html">
	<div class="pesan">
		<p>{{message.message}}</p>
		<small>{{message.user}}</small>
	</div>
</template>

<script>
export default {

  name: 'pesan',

  props : ['message']
}
</script>

<style lang="css">
.pesan{
	padding: 1rem;
}
.pesan > p{
	margin-bottom: .5rem;
}
</style>